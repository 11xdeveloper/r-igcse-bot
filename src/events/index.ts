import {
	type Awaitable,
	type Client,
	type ClientEvents,
	Events,
} from "discord.js";
import { readdir } from "node:fs/promises";
import { join as joinPaths } from "node:path";
import { isCodeFile } from "@/utils";

export interface Event<T extends keyof ClientEvents> {
	once: boolean;
	execute(client: Client, ...args: ClientEvents[T]): Awaitable<void>;
}

const isEventName = (name: string) =>
	Object.values(Events).includes(name as Events);

export const registerEvents = async (client: Client) => {
	const eventsDirPath = import.meta.dir;
	const eventFiles = await readdir(eventsDirPath, { recursive: true });

	for (const file of eventFiles) {
		const fileName = file.split(".")[0] ?? "";
		if (!isCodeFile(file) || !isEventName(fileName)) {
			continue;
		}

		const filePath = joinPaths(eventsDirPath, file);
		const {
			default: { once, execute },
		}: {
			default: Event<keyof ClientEvents>;
		} = await import(filePath);

		if (once) {
			client.once(fileName, (...args: ClientEvents[keyof ClientEvents]) =>
				execute(client, ...args),
			);
		} else {
			client.on(fileName, (...args: ClientEvents[keyof ClientEvents]) =>
				execute(client, ...args),
			);
		}
	}
};

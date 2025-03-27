import type { Awaitable, Client, ClientEvents } from "discord.js";
import { readdir } from "node:fs/promises";
import { join as joinPaths } from "node:path";
import { isCodeFile } from "@/utils";

export interface Event<T extends keyof ClientEvents> {
	once: boolean;
	execute(client: Client, ...args: ClientEvents[T]): Awaitable<void>;
}

const isEvent = (value: unknown): value is Event<keyof ClientEvents> => {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	return "once" in value && "execute" in value;
};

export const registerEvents = async (client: Client) => {
	const eventsDirPath = import.meta.dir;
	const eventFiles = await readdir(eventsDirPath, { recursive: true });

	for (const file of eventFiles) {
		const fileName = file.split(".")[0] ?? "";
		if (!isCodeFile(file) || file.startsWith("index.")) {
			continue;
		}

		const filePath = joinPaths(eventsDirPath, file);
		const exports = await import(filePath);

		for (const exportValue of Object.values(exports)) {
			if (isEvent(exportValue)) {
				const { once, execute } = exportValue;

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
		}
	}
};

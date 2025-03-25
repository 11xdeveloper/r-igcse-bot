import { Client, Events, type Awaitable, type ClientEvents } from "discord.js";
import { readdir } from "node:fs/promises";
import { extname, join as joinPaths } from "node:path";

const client = new Client({ intents: [] });

const eventsDirPath = joinPaths(import.meta.dir, "events");
const eventFiles = await readdir(eventsDirPath, { recursive: true });

const isEventName = (name: string) =>
	Object.values(Events).includes(name as Events);
const isCodeFile = (name: string) =>
	extname(name) === ".js" || extname(name) === ".ts";

for (const file of eventFiles) {
	const fileName = file.split(".")[0] ?? "";
	if (!isCodeFile(file) || !isEventName(fileName)) {
		continue;
	}

	const filePath = joinPaths(eventsDirPath, file);
	const {
		execute,
		once = false,
	}: {
		execute: (
			client: Client,
			...args: ClientEvents[keyof ClientEvents]
		) => Awaitable<void>;
		once?: boolean;
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

await client.login(process.env.BOT_TOKEN);

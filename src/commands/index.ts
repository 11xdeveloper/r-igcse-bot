import {
	type Awaitable,
	type ChatInputCommandInteraction,
	type Client,
	type SharedSlashCommand,
	type ContextMenuCommandBuilder,
	type ContextMenuCommandInteraction,
	Collection,
	Routes,
} from "discord.js";
import { readdir } from "node:fs/promises";
import { join as joinPaths } from "node:path";
import { isCodeFile } from "@/utils";

export enum CommandType {
	Slash = "slash",
	Menu = "menu",
}

export interface Command<T extends CommandType> {
	data: T extends CommandType.Slash
		? SharedSlashCommand
		: ContextMenuCommandBuilder;
	mainGuildOnly: boolean;
	execute: (
		interaction: T extends CommandType.Slash
			? ChatInputCommandInteraction
			: ContextMenuCommandInteraction,
	) => Awaitable<void>;
}

export const commands: Collection<
	string,
	Command<CommandType>
> = new Collection();

const isCommand = (value: unknown): value is Command<CommandType> => {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	return "data" in value && "mainGuildOnly" in value && "execute" in value;
};

export const registerCommands = async () => {
	const commandsDirPath = import.meta.dir;
	const commandFiles = await readdir(commandsDirPath, { recursive: true });

	for (const file of commandFiles) {
		if (!isCodeFile(file) || file.startsWith("index.")) {
			continue;
		}

		const filePath = joinPaths(commandsDirPath, file);

		const exports = await import(filePath);

		for (const exportValue of Object.values(exports)) {
			if (isCommand(exportValue)) {
				commands.set(exportValue.data.name, exportValue);
			}
		}
	}
};

export const syncCommands = async (client: Client) => {
	if (!client.user) {
		throw new Error("Client user not found");
	}

	const globalCommandData = commands
		.filter((command) => !command.mainGuildOnly)
		.map((command) => command.data.toJSON());
	const guildCommandData = commands
		.filter((command) => command.mainGuildOnly)
		.map((command) => command.data.toJSON());

	const data = (await client.rest.put(
		Routes.applicationGuildCommands(client.user.id, process.env.MAIN_GUILD_ID),
		{ body: guildCommandData },
	)) as unknown[];

	const globalData = (await client.rest.put(
		Routes.applicationCommands(client.user.id),
		{
			body: globalCommandData,
		},
	)) as unknown[];

	return {
		global: globalData.length,
		guild: data.length,
	};
};

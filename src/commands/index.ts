import {
	type Awaitable,
	type Client,
	Collection,
	type CommandInteraction,
	Routes,
	type SlashCommandBuilder,
} from "discord.js";
import { readdir } from "node:fs/promises";
import { join as joinPaths } from "node:path";
import { isCodeFile } from "@/utils";

export interface Command {
	data: SlashCommandBuilder;
	mainGuildOnly: boolean;
	execute: (interaction: CommandInteraction) => Awaitable<void>;
}

export const commands: Collection<string, Command> = new Collection();

export const registerCommands = async () => {
	const commandsDirPath = import.meta.dir;
	const commandFiles = await readdir(commandsDirPath, { recursive: true });

	for (const file of commandFiles) {
		if (!isCodeFile(file) || file.startsWith("index.")) {
			continue;
		}

		const filePath = joinPaths(commandsDirPath, file);

		const {
			default: command,
		}: {
			default: Command;
		} = await import(filePath);

		commands.set(command.data.name, command);
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

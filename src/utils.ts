import type { Client } from "discord.js";
import { extname } from "node:path";

export const isCodeFile = (name: string) =>
	extname(name) === ".js" || extname(name) === ".ts";

export const isBotDev = async (client: Client, id: string) => {
	const guild = await client.guilds.fetch(process.env.MAIN_GUILD_ID);

	if (!guild) {
		return false;
	}

	const member = await guild.members.fetch(id);

	if (!member) {
		return false;
	}

	return member.roles.cache.has(process.env.BOT_DEV_ROLE_ID);
};

import type { Events } from "discord.js";
import type { Event } from "@/events";
import { syncCommands } from "@/commands";
import { isBotDev } from "@/utils";

export const MessageCreate: Event<Events.MessageCreate> = {
	once: false,
	async execute(client, message) {
		if (message.author.bot) {
			return;
		}

		if (message.content === "!sync_commands") {
			if (!(await isBotDev(client, message.author.id))) {
				return;
			}

			const { global, guild } = await syncCommands(client);

			message.reply(
				`Succesfully synced commands. Global: ${global}, Guild: ${guild}`,
			);
		}
	},
};

import type { Events } from "discord.js";
import type { Event } from "@/events";
import { commands } from "@/commands";

const InteractionCreate: Event<Events.InteractionCreate> = {
	once: false,
	async execute(client, interaction) {
		if (interaction.isChatInputCommand()) {
			const command = commands.get(interaction.commandName);

			if (!command) {
				console.warn("Unknown command: ", interaction.commandName);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error("Error executing command: ", error);
			}
		}
	},
};

export default InteractionCreate;

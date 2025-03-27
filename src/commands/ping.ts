import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "@/commands";

export const Ping: Command = {
	data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
	mainGuildOnly: false,
	async execute(interaction) {
		await interaction.deferReply();
		const deferredReply = await interaction.fetchReply();

		const embed = new EmbedBuilder().setAuthor({
			name: `Pong! | Client: ${deferredReply.createdTimestamp - interaction.createdTimestamp}ms | WebSocket: ${interaction.client.ws.ping}ms`,
			iconURL: interaction.client.user.displayAvatarURL(),
		});

		interaction.followUp({
			embeds: [embed],
		});
	},
};

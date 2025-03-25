import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { syncCommands, type Command } from "@/commands";

const SyncCommands: Command = {
	data: new SlashCommandBuilder()
		.setName("sync_commands")
		.setDescription("Sync commands with Discord")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	mainGuildOnly: true,
	async execute(interaction) {
		await interaction.deferReply();

		const { global, guild } = await syncCommands(interaction.client);

		interaction.followUp(
			`Succesfully synced commands. Global: ${global}, Guild: ${guild}`,
		);
	},
};

export default SyncCommands;

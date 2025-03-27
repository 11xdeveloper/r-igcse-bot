import {
	ContextMenuCommandBuilder,
	PermissionFlagsBits,
	InteractionContextType,
	ApplicationCommandType,
	MessageFlags,
} from "discord.js";
import type { Command, CommandType } from "@/commands";

export const TogglePin: Command<CommandType.Menu> = {
	data: new ContextMenuCommandBuilder()
		.setName("Toggle Pinned")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.setContexts([InteractionContextType.Guild])
		.setType(ApplicationCommandType.Message),
	mainGuildOnly: false,

	async execute(interaction) {
		if (
			!interaction.inCachedGuild() ||
			!interaction.isMessageContextMenuCommand()
		) {
			return;
		}

		if (interaction.targetMessage.pinned) {
			await interaction.targetMessage.unpin();

			interaction.reply({
				content: "Message unpinned",
				flags: MessageFlags.Ephemeral,
			});

			interaction.targetMessage.reply({
				content: `Message unpinned by ${interaction.user}`,
			});
		} else {
			if (!interaction.targetMessage.pinnable) {
				interaction.reply({
					content: "You can't pin this message",
					flags: MessageFlags.Ephemeral,
				});

				return;
			}

			await interaction.targetMessage.pin();

			interaction.reply({
				content: "Message pinned",
				flags: MessageFlags.Ephemeral,
			});

			interaction.targetMessage.reply({
				content: `Message pinned by ${interaction.user}`,
			});
		}
	},
};

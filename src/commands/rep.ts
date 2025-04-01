import {
	Colors,
	InteractionContextType,
	MessageFlags,
	PermissionFlagsBits,
	SlashCommandBuilder,
} from "discord.js";
import type { Command, CommandType } from "@/commands";
import { prisma } from "@/prisma";
import { PaginationBuilder } from "@/components/PaginationBuilder";

export const ReputationCommand: Command<CommandType.Slash> = {
	data: new SlashCommandBuilder()
		.setName("rep")
		.setDescription("View someone's current rep")
		.addUserOption((option) =>
			option
				.setName("user")
				.setDescription("The user to view the rep of")
				.setRequired(false),
		)
		.setContexts([InteractionContextType.Guild]),
	mainGuildOnly: false,
	async execute(interaction) {
		if (!interaction.inCachedGuild()) {
			await interaction.reply({
				content: "This command can only be used in a server.",
				flags: MessageFlags.Ephemeral,
			});
			return;
		}

		const user = interaction.options.getUser("user", false) ?? interaction.user;

		const res = await prisma.reputation.findUnique({
			where: {
				guildId_userId: {
					guildId: interaction.guild.id,
					userId: user.id,
				},
			},
		});

		const rep = res?.rep || 0;

		await interaction.reply({
			content: `${user.username} has ${rep} rep`,
		});
	},
};

export const LeaderboardCommand: Command<CommandType.Slash> = {
	data: new SlashCommandBuilder()
		.setName("leaderboard")
		.setDescription("View the current rep leaderboard")
		.setContexts([InteractionContextType.Guild])
		.addIntegerOption((option) =>
			option
				.setName("page")
				.setDescription("Page number to to display")
				.setRequired(false),
		),
	mainGuildOnly: false,

	async execute(interaction) {
		if (
			!interaction.inCachedGuild() ||
			!interaction.channel ||
			!interaction.channel.isTextBased()
		) {
			return;
		}

		const page = (interaction.options.getInteger("page", false) ?? 1) - 1;

		await interaction.deferReply();

		const reps = await prisma.reputation.findMany({
			where: {
				guildId: interaction.guild.id,
			},
			orderBy: {
				rep: "desc",
			},
		});

		if (reps.length === 0) {
			interaction.followUp({
				content: "No one in this server has rep 💀",
				ephemeral: true,
			});

			return;
		}

		new PaginationBuilder(
			reps.map(({ userId, rep }) => ({ userId, rep })),
			async ({ userId, rep }) => ({
				name: (await interaction.client.users.fetch(userId)).tag,
				value: `${rep}`,
				inline: true,
			}),
		)
			.setTitle("Rep Leaderboard")
			.setColor(Colors.Blurple)
			.setInitialPage(page)
			.build((page) => interaction.followUp(page), [interaction.user.id]);
	},
};

export const SetReputationCommand: Command<CommandType.Slash> = {
	data: new SlashCommandBuilder()
		.setName("set_rep")
		.setDescription("Change a users reputation (for mods)")
		.setContexts([InteractionContextType.Guild])
		.addIntegerOption((option) =>
			option
				.setName("new_rep")
				.setDescription("New reputation")
				.setRequired(true),
		)
		.addUserOption((option) =>
			option
				.setName("user")
				.setDescription("The user to change the rep of")
				.setRequired(true),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	mainGuildOnly: false,

	async execute(interaction) {
		if (!interaction.inCachedGuild()) {
			return;
		}

		const user = interaction.options.getUser("user", false) ?? interaction.user;
		const newRep = interaction.options.getInteger("new_rep", true);

		await prisma.reputation.upsert({
			where: {
				guildId_userId: {
					guildId: interaction.guild.id,
					userId: user.id,
				},
			},
			create: {
				userId: user.id,
				rep: newRep,
				guildId: interaction.guild.id,
			},
			update: {
				rep: newRep,
			},
		});

		await interaction.reply({
			content: `Changed ${user.tag} rep to ${newRep}`,
		});
	},
};

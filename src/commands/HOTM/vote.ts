import {
	MessageFlags,
	SlashCommandBuilder,
	type ChatInputCommandInteraction,
} from "discord.js";
import type { CommandType, Command } from "@/commands";
import { prisma } from "@/prisma";
import { updateResultsEmbed } from "./utils";
import { GuildPreferencesCache } from "@/redis";
import { checkIfHelper } from "./utils";

export const voteCommand: Command<CommandType.Slash> = {
	data: new SlashCommandBuilder()
		.setName("vote_hotm")
		.setDescription("Vote for the Helper of the Month")
		.addUserOption((option) =>
			option
				.setName("helper")
				.setDescription("The helper you want to vote for")
				.setRequired(true),
		),
	mainGuildOnly: true,
	execute: async (interaction: ChatInputCommandInteraction) => {
		if (!interaction.inCachedGuild()) {
			interaction.reply({
				content: "This command can only be used in a server.",
				flags: MessageFlags.Ephemeral,
			});
			return;
		}

		await interaction.deferReply({ flags: MessageFlags.Ephemeral });

		const guildPreferences = await GuildPreferencesCache.get(
			interaction.guildId,
		);

		if (!guildPreferences || !guildPreferences.hotmResultsChannelId) {
			await interaction.editReply({
				content: "HOTM voting has not been configured for this server.",
			});
			return;
		}

		if (!guildPreferences.hotmSessionOngoing) {
			await interaction.editReply({
				content: "There is no active HOTM voting session at the moment.",
			});
			return;
		}

		const helper = interaction.options.getUser("helper", true);
		const helperMember = await interaction.guild.members
			.fetch(helper.id)
			.catch(() => null);

		// Check if helper is the same as voter
		if (interaction.user.id === helper.id) {
			await interaction.editReply({
				content: "You cannot vote for yourself!",
			});
			return;
		}

		// Check if helper exists in the guild
		if (!helperMember) {
			await interaction.editReply({
				content: "This user is not a member of this server.",
			});
			return;
		}

		// Check if the selected user is eligible (is a helper)
		const isHelper = await checkIfHelper(helperMember);
		if (!isHelper) {
			await interaction.editReply({
				content: "The selected user is not a helper in this server.",
			});
			return;
		}

		// Check if the helper is blacklisted
		const blacklistCheck = await prisma.hotmBlacklist.findFirst({
			where: {
				guildId: interaction.guildId,
				helperId: helper.id,
			},
		});

		if (blacklistCheck) {
			await interaction.editReply({
				content: "This helper has been blacklisted from the HOTM competition.",
			});
			return;
		}

		// Get or create user's voting record
		let hotmVoter = await prisma.hotmVoter.findFirst({
			where: {
				guildId: interaction.guildId,
				userId: interaction.user.id,
			},
		});

		if (!hotmVoter) {
			hotmVoter = await prisma.hotmVoter.create({
				data: {
					guildId: interaction.guildId,
					userId: interaction.user.id,
					voted: [],
				},
			});
		}

		// Check if user has already voted for this helper
		if (hotmVoter.voted.includes(helper.id)) {
			await interaction.editReply({
				content: "You have already voted for this helper.",
			});
			return;
		}

		// Check if user has used all their votes
		const MAX_VOTES = 3;
		if (hotmVoter.voted.length >= MAX_VOTES) {
			await interaction.editReply({
				content: `You have already used all ${MAX_VOTES} of your votes.`,
			});
			return;
		}

		// Transaction to update votes
		await prisma.$transaction(async (tx) => {
			// Update user's voting record
			await tx.hotmVoter.update({
				where: { id: hotmVoter.id },
				data: {
					voted: {
						push: helper.id,
					},
				},
			});

			// Increment helper's vote count or create new record
			const existingHelperRecord = await tx.hotmCandidate.findFirst({
				where: {
					guildId: interaction.guildId,
					helperId: helper.id,
				},
			});

			if (existingHelperRecord) {
				await tx.hotmCandidate.update({
					where: { id: existingHelperRecord.id },
					data: { votes: existingHelperRecord.votes + 1 },
				});
			} else {
				await tx.hotmCandidate.create({
					data: {
						guildId: interaction.guildId,
						helperId: helper.id,
						votes: 1,
					},
				});
			}
		});

		// Get updated vote count for the helper
		const updatedHelper = await prisma.hotmCandidate.findFirst({
			where: {
				guildId: interaction.guildId,
				helperId: helper.id,
			},
		});

		// Log the vote in the results channel
		const channel = interaction.guild.channels.cache.get(
			guildPreferences.hotmResultsChannelId,
		);
		if (channel?.isTextBased()) {
			await channel.send({
				content: `${interaction.user.tag} has voted for ${helper.tag} who now has ${updatedHelper?.votes ?? 1} vote(s).`,
			});
		}

		// Update the results embed
		await updateResultsEmbed({
			guild: interaction.guild,
			channelId: guildPreferences.hotmResultsChannelId,
			messageId: guildPreferences.hotmResultsEmbedId ?? undefined,
		});

		// Calculate remaining votes
		const remainingVotes = MAX_VOTES - (hotmVoter.voted.length + 1);
		const votesMessage =
			remainingVotes === 1
				? "You have 1 vote remaining."
				: `You have ${remainingVotes} votes remaining.`;

		await interaction.editReply({
			content: `You successfully voted for ${helper.tag}! ${votesMessage}`,
		});
	},
};

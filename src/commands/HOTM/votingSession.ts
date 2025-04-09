import {
	type ChatInputCommandInteraction,
	SlashCommandBuilder,
	ChannelType,
	MessageFlags,
} from "discord.js";
import type { CommandType, Command } from "@/commands";
import { GuildPreferencesCache } from "@/redis";
import type { CachedGuildPreferences } from "@/redis/guildPreferences";
import { prisma } from "@/prisma";
import { updateResultsEmbed } from "./utils";

export const SessionCommand: Command<CommandType.Slash> = {
	data: new SlashCommandBuilder()
		.setName("hotm_session")
		.setDescription("Manage HOTM voting sessions")
		.addSubcommand((subcommand) =>
			subcommand
				.setName("start")
				.setDescription("Start a new HOTM voting session"),
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("end")
				.setDescription("End the current HOTM voting session"),
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("blacklist")
				.setDescription("Add a user to the HOTM blacklist")
				.addUserOption((option) =>
					option
						.setName("helper")
						.setDescription("The helper to blacklist")
						.setRequired(true),
				)
				.addBooleanOption((option) =>
					option
						.setName("permanent")
						.setDescription(
							"Whether the blacklist is permanent (false by default)",
						),
				),
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("unblacklist")
				.setDescription("Remove a user from the HOTM blacklist")
				.addUserOption((option) =>
					option
						.setName("helper")
						.setDescription("The helper to unblacklist")
						.setRequired(true),
				),
		),
	mainGuildOnly: false,
	execute: async (interaction: ChatInputCommandInteraction) => {
		if (!interaction.inCachedGuild()) {
			interaction.reply({
				content: "This command can only be used in a server.",
				ephemeral: true,
			});
			return;
		}

		const guildPreferences = await GuildPreferencesCache.get(
			interaction.guildId,
		);

		if (!guildPreferences || !guildPreferences.hotmResultsChannelId) {
			interaction.reply({
				content:
					"Configure the bot using `/setup` before managing HOTM sessions.",
				flags: MessageFlags.Ephemeral,
			});
			return;
		}

		const subcommand = interaction.options.getSubcommand();

		switch (subcommand) {
			case "start":
				await handleStartSession(interaction, guildPreferences);
				break;
			case "end":
				await handleEndSession(interaction, guildPreferences);
				break;
			case "blacklist":
				await handleBlacklist(interaction, guildPreferences);
				break;
			case "unblacklist":
				await handleUnblacklist(interaction, guildPreferences);
				break;
		}
	},
};

async function handleStartSession(
	interaction: ChatInputCommandInteraction<"cached">,
	guildPreferences: CachedGuildPreferences,
) {
	if (guildPreferences.hotmSessionOngoing) {
		interaction.reply({
			content:
				"A HOTM session is already ongoing. End it before starting a new one.",
			flags: MessageFlags.Ephemeral,
		});
		return;
	}

	await interaction.deferReply({ flags: MessageFlags.Ephemeral });

	// Update guild preferences
	await GuildPreferencesCache.set(guildPreferences.guildId, {
		...guildPreferences,
		hotmSessionOngoing: true,
		hotmResultsEmbedId: null,
	});

	await prisma.$transaction([
		prisma.hotmCandidate.deleteMany({
			where: { guildId: interaction.guildId },
		}),
		prisma.hotmVoter.deleteMany({ where: { guildId: interaction.guildId } }),
		prisma.hotmBlacklist.deleteMany({
			where: {
				guildId: interaction.guildId,
				permanent: false,
			},
		}),
	]);

	await interaction.editReply({
		content:
			"HOTM voting session started. Members can now vote using `/vote_hotm`.",
	});

	// Initialize the results embed
	const resultChannelId = guildPreferences.hotmResultsChannelId;
	if (resultChannelId) {
		await updateResultsEmbed({
			guild: interaction.guild,
			channelId: resultChannelId,
			message: "A new HOTM voting session has started!",
		});
	}
}

async function handleEndSession(
	interaction: ChatInputCommandInteraction<"cached">,
	guildPreferences: CachedGuildPreferences,
) {
	if (!guildPreferences.hotmSessionOngoing) {
		await interaction.reply({
			content: "There is no ongoing HOTM voting session to end.",
			ephemeral: true,
		});
		return;
	}

	await interaction.deferReply({ ephemeral: true });

	// Update guild preferences
	await GuildPreferencesCache.set(guildPreferences.guildId, {
		...guildPreferences,
		hotmSessionOngoing: false,
	});

	// Update the results embed with final standings
	const resultChannelId = guildPreferences.hotmResultsChannelId;
	if (resultChannelId) {
		await updateResultsEmbed({
			guild: interaction.guild,
			channelId: resultChannelId,
			messageId: guildPreferences.hotmResultsEmbedId ?? undefined,
			message: "🏆 HOTM voting session has ended! 🏆",
		});
	}

	// Save final results but don't clear data to maintain historical record
	await GuildPreferencesCache.set(guildPreferences.guildId, {
		...guildPreferences,
		hotmSessionOngoing: false,
		hotmResultsEmbedId: null,
	});

	await interaction.editReply({
		content: "HOTM voting session has ended. Final results have been posted.",
	});
}

/**
 * Handles blacklisting a helper
 */
async function handleBlacklist(
	interaction: ChatInputCommandInteraction<"cached">,
	guildPreferences: CachedGuildPreferences,
) {
	const helper = interaction.options.getUser("helper", true);
	const permanent = interaction.options.getBoolean("permanent") ?? false;

	await interaction.deferReply({ ephemeral: true });

	const existingBlacklist = await prisma.hotmBlacklist.findFirst({
		where: {
			guildId: interaction.guildId,
			helperId: helper.id,
		},
	});

	if (existingBlacklist) {
		interaction.editReply({
			content: "This helper is already blacklisted.",
		});
		return;
	}

	// Add to blacklist
	await prisma.hotmBlacklist.create({
		data: {
			guildId: interaction.guildId,
			helperId: helper.id,
			permanent,
		},
	});

	// Reset their votes
	await prisma.$transaction(async (tx) => {
		// Reset the helper's votes
		await tx.hotmCandidate.delete({
			where: {
				guildId_helperId: {
					guildId: interaction.guildId,
					helperId: helper.id,
				},
			},
		});

		const users = await tx.hotmVoter.findMany({
			where: {
				guildId: interaction.guildId,
				voted: {
					has: helper.id,
				},
			},
		});

		// Remove the helper from all users' voted arrays
		for (const user of users) {
			await tx.hotmVoter.update({
				where: {
					id: user.id,
				},
				data: {
					voted: { set: user.voted.filter((id) => id !== helper.id) },
				},
			});
		}
	});

	// Log to the results channel
	const channel = interaction.guild.channels.cache.get(
		guildPreferences.hotmResultsChannelId!,
	);
	if (channel && channel.type === ChannelType.GuildText) {
		channel.send({
			content: `${helper.tag} has been blacklisted ${permanent ? "permanently" : "for this session"} and now has 0 votes.`,
		});
	}

	// Update results embed
	await updateResultsEmbed({
		guild: interaction.guild,
		channelId: guildPreferences.hotmResultsChannelId!,
		messageId: guildPreferences.hotmResultsEmbedId ?? undefined,
	});

	await interaction.editReply({
		content: `${helper.tag} has been blacklisted ${permanent ? "permanently" : "for this session"}.`,
	});
}

/**
 * Handles unblacklisting a helper
 */
async function handleUnblacklist(
	interaction: ChatInputCommandInteraction<"cached">,
	guildPreferences: CachedGuildPreferences,
) {
	const helper = interaction.options.getUser("helper", true);

	await interaction.deferReply({ ephemeral: true });

	// Check if the helper is blacklisted
	const existingBlacklist = await prisma.hotmBlacklist.findFirst({
		where: {
			guildId: interaction.guildId,
			helperId: helper.id,
		},
	});

	if (!existingBlacklist) {
		await interaction.editReply({
			content: "This helper is not blacklisted.",
		});
		return;
	}

	// Remove from blacklist
	await prisma.hotmBlacklist.delete({
		where: {
			id: existingBlacklist.id,
		},
	});

	// Log to the results channel
	const channel = interaction.guild.channels.cache.get(
		guildPreferences.hotmResultsChannelId!,
	);
	if (channel && channel.type === ChannelType.GuildText) {
		await channel.send({
			content: `${helper.tag} has been removed from the blacklist.`,
		});
	}

	await interaction.editReply({
		content: `${helper.tag} is no longer blacklisted.`,
	});
}

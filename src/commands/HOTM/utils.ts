import { prisma } from "@/prisma";
import { GuildPreferencesCache } from "@/redis";
import {
	ChannelType,
	EmbedBuilder,
	type APIEmbedField,
	type Guild,
	type GuildMember,
} from "discord.js";

export const checkIfHelper = async (member: GuildMember) => {
	const studyChannels = await prisma.studyChannel.findMany({
		where: { guildId: member.guild.id },
		select: { helperRoleId: true },
	});

	if (studyChannels.length === 0) {
		return false;
	}

	const helperRoleIds = studyChannels
		.map((channel) => channel.helperRoleId)
		.filter((id): id is string => typeof id === "string");

	return member.roles.cache.some((role) => helperRoleIds.includes(role.id));
};

export const updateResultsEmbed = async (data: {
	guild: Guild;
	channelId: string;
	messageId?: string;
	message?: string;
}) => {
	const { guild, channelId, messageId, message } = data;

	const channel = await guild.channels.fetch(channelId);
	if (!channel || channel.type !== ChannelType.GuildText) {
		return;
	}

	// Get top 20 helpers by votes
	const results = await prisma.hotmCandidate.findMany({
		where: { guildId: guild.id },
		orderBy: { votes: "desc" },
		take: 20,
	});

	const fields: APIEmbedField[] = [];

	// Populate fields with helper info and votes
	for (const helper of results) {
		const member = await guild.members.fetch(helper.helperId).catch(() => null);
		fields.push({
			name: member ? `${member.user.tag} (${member.id})` : helper.helperId,
			value: `Votes: ${helper.votes}`,
			inline: true,
		});
	}

	// Create embed
	const embed = new EmbedBuilder()
		.setTitle("🏆 Helper of the Month Results 🏆")
		.setDescription(message ?? null)
		.setColor(0x3498db)
		.setTimestamp()
		.setFooter({ text: "Results are updated in real-time" });

	if (fields.length > 0) {
		embed.addFields(fields);
	} else {
		embed.addFields([
			{ name: "No votes yet", value: "Vote for your favorite helpers!" },
		]);
	}

	// Try to delete previous embed if it exists
	if (messageId) {
		try {
			await channel.messages.delete(messageId);
		} catch (error) {
			console.error("Failed to delete previous results message:", error);
		}
	}

	// Send new embed
	const embedMessage = await channel.send({ embeds: [embed] });

	// Update the embed ID in guild preferences
	const guildPreferences = await GuildPreferencesCache.get(guild.id);

	if (guildPreferences) {
		await GuildPreferencesCache.set(guild.id, {
			...guildPreferences,
			hotmResultsEmbedId: embedMessage.id,
		});
	} else {
		console.error("Guild preferences not found for guild:", guild.id);
	}
};

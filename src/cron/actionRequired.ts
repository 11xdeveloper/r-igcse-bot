// import { prisma } from "@/prisma";
// import type { Cron } from "@/cron";
// import { Colors, EmbedBuilder, type APIEmbedField } from "discord.js";

// export const actionRequired: Cron = {
// 	// once per week
// 	expression: "0 0 * * 0",
// 	async execute(client, _now) {
// 		const thirtyDaysAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);

// 		const guildsPreferences = await prisma.guildPreferences.findMany({
// 			where: {
// 				actionRequiredChannelId: {
// 					not: null,
// 				},
// 			},
// 		});

// 		for (const guildPreferences of guildsPreferences) {
// 			const guild = await client.guilds.fetch(guildPreferences.guildId);

// 			if (!guild || !guildPreferences.actionRequiredChannelId) {
// 				continue;
// 			}

// 			const actionRequiredChannel = await guild.channels.fetch(
// 				guildPreferences.actionRequiredChannelId,
// 			);

// 			if (!actionRequiredChannel || !actionRequiredChannel.isTextBased()) {
// 				continue;
// 			}

// 			const punishmentsAggregate = await prisma.punishment.groupBy({
// 				by: ["actionAgainst"],
// 				where: {
// 					guildId: guild.id,
// 				},
// 				_sum: {
// 					points: true,
// 				},
// 				_max: {
// 					when: true,
// 				},
// 			});

// 			const filteredPunishments = punishmentsAggregate
// 				.map((p) => ({
// 					actionAgainst: p.actionAgainst,
// 					totalPoints: p._sum.points || 0,
// 					lastPunishment: p._max.when,
// 				}))
// 				.filter(
// 					(p) =>
// 						p.totalPoints >= 10 &&
// 						p.lastPunishment &&
// 						p.lastPunishment >= thirtyDaysAgo,
// 				)
// 				.sort((a, b) => b.totalPoints - a.totalPoints);

// 			const fields: APIEmbedField[] = [];

// 			for (const userPunishments of filteredPunishments) {
// 				const member = await guild.members
// 					.fetch(userPunishments.actionAgainst)
// 					.catch(() => null);

// 				if (!member) {
// 					continue;
// 				}

// 				fields.push({
// 					name: `${member.user.tag} (${member.id})`,
// 					value: `Total Points: ${userPunishments.totalPoints}`,
// 				});
// 			}

// 			if (fields.length === 0) {
// 				continue;
// 			}

// 			const chunks = Array.from(
// 				{ length: Math.ceil(fields.length / 25) },
// 				(_, i) => fields.slice(i * 25, i * 25 + 25),
// 			);

// 			const embeds = chunks.map((chunk) =>
// 				new EmbedBuilder()
// 					.setTitle("Infraction Points Leaderboard")
// 					.setDescription(
// 						"The following users have accumulated 10 or more infraction points.",
// 					)
// 					.setColor(Colors.DarkNavy)
// 					.addFields(chunk),
// 			);

// 			await actionRequiredChannel
// 				.send({
// 					embeds,
// 				})
// 				.catch(console.error);
// 		}
// 	},
// };

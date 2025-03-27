import { prisma } from "@/prisma";
import type { GuildPreferences } from "@prisma/client";
import {
	type Entity,
	type RedisConnection,
	Repository,
	Schema,
} from "redis-om";

export type CachedGuildPreferences = Omit<GuildPreferences, "id"> & Entity;

const schema = new Schema("GuildPreferences", {
	guildId: { type: "string" },
	repEnabled: { type: "boolean" },
	repDisabledChannelIds: { type: "string[]" },
	hotmSessionOngoing: { type: "boolean" },
	modlogChannelId: { type: "string" },
	generalLogsChannelId: { type: "string" },
	actionRequiredChannelId: { type: "string" },
	welcomeChannelId: { type: "string" },
	confessionsChannelId: { type: "string" },
	confessionApprovalChannelId: { type: "string" },
	hostSessionApprovalChannelId: { type: "string" },
	countingChannelId: { type: "string" },
	hotmResultsChannelId: { type: "string" },
	hotmResultsEmbedId: { type: "string" },
	hostSessionChannelId: { type: "string" },
	archiveSessionCategoryId: { type: "string" },
	modmailCreateChannelId: { type: "string" },
	modmailThreadsChannelId: { type: "string" },
	modmailLogsChannelId: { type: "string" },
	closedDmChannelId: { type: "string" },
	banAppealFormLink: { type: "string" },
	moderatorRoleId: { type: "string" },
	forcedMuteRoleId: { type: "string" },
	welcomeChannelMessage: { type: "string" },
	welcomeDMMessage: { type: "string" },
	groupStudyChannelId: { type: "string" },
	keywordRequestsChannelId: { type: "string" },
});

export class GuildPreferencesRepository extends Repository {
	constructor(clientOrConnection: RedisConnection) {
		super(schema, clientOrConnection);
	}

	async get(guildId: string) {
		const cachedRes = (await this.fetch(guildId)) as GuildPreferences;

		if (cachedRes.guildId) {
			return cachedRes;
		}

		const res = await prisma.guildPreferences.findUnique({
			where: { guildId },
		});

		if (!res) {
			return null;
		}

		await this.set(guildId, res);

		return res;
	}

	async set(guildId: string, preferences: GuildPreferences) {
		const res = (await this.save(guildId, preferences)) as GuildPreferences;

		await this.expire(guildId, 120);

		return res;
	}
}

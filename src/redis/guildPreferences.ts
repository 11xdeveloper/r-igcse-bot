import { prisma } from "@/prisma";
import { type RedisConnection, Repository } from "redis-om";
import { GuildPreferencesSchema } from "../../prisma/generated/zod";
import { generateRedisSchema, type SchemaType } from "./schemaGenerator";
import type { GuildPreferences } from "@prisma/client";

export type CachedGuildPreferences = SchemaType<GuildPreferences>;

export const guildPreferencesSchema = generateRedisSchema(
	"GuildPreferences",
	GuildPreferencesSchema,
);

export class GuildPreferencesRepository extends Repository {
	constructor(clientOrConnection: RedisConnection) {
		super(guildPreferencesSchema, clientOrConnection);
	}

	async get(guildId: string) {
		const cachedRes = (await this.fetch(guildId)) as CachedGuildPreferences;

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

	async set(guildId: string, preferences: CachedGuildPreferences) {
		const res = (await this.save(
			guildId,
			preferences,
		)) as CachedGuildPreferences;

		await this.expire(guildId, 120);

		return res;
	}
}

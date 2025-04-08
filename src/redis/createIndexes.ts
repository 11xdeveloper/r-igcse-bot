import { createClient } from "redis";
import { GuildPreferencesRepository } from "./guildPreferences";
export const redis = createClient({
	url: process.env.REDIS_URL,
});

await redis.connect();

const GuildPreferencesCache = new GuildPreferencesRepository(redis);

await GuildPreferencesCache.createIndex();

await redis.disconnect();

import { createClient } from "redis";
import { GuildPreferencesRepository } from "./guildPreferences";
import { StickyMessageRepository } from "./stickyMessage";
import { ModPingRepository } from "./modPing";
import { PracticeQuestionRepository } from "./question";
import { UserRepository } from "./user";
import { ButtonInteractionRepository } from "./buttonInteraction";
import { KeywordRepository } from "./keyword";

export const redis = createClient({
	url: process.env.REDIS_URL,
});

redis.on("error", (err) => console.error("Redis Client Error", err));

await redis.connect();

export const GuildPreferencesCache = new GuildPreferencesRepository(redis);
export const StickyMessageCache = new StickyMessageRepository(redis);
export const ModPingCache = new ModPingRepository(redis);
export const PracticeQuestionCache = new PracticeQuestionRepository(redis);
export const UserCache = new UserRepository(redis);
export const ButtonInteractionCache = new ButtonInteractionRepository(redis);
export const KeywordCache = new KeywordRepository(redis);

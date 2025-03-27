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

await redis.connect();

const GuildPreferencesCache = new GuildPreferencesRepository(redis);
const StickyMessageCache = new StickyMessageRepository(redis);
const ModPingCache = new ModPingRepository(redis);
const PracticeQuestionCache = new PracticeQuestionRepository(redis);
const UserCache = new UserRepository(redis);
const ButtonInteractionCache = new ButtonInteractionRepository(redis);
const KeywordCache = new KeywordRepository(redis);

await GuildPreferencesCache.createIndex();
await StickyMessageCache.createIndex();
await ModPingCache.createIndex();
await PracticeQuestionCache.createIndex();
await UserCache.createIndex();
await ButtonInteractionCache.createIndex();
await KeywordCache.createIndex();

await redis.disconnect();

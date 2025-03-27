import type { Keyword } from "@prisma/client";
import {
	type Entity,
	type RedisConnection,
	Repository,
	Schema,
} from "redis-om";

export type CachedKeyword = Omit<Keyword, "id"> & Entity;

const schema = new Schema("Keyword", {
	guildId: { type: "string" },
	keyword: { type: "string" },
	response: { type: "string" },
	imageLink: { type: "string" },
});

export class KeywordRepository extends Repository {
	constructor(clientOrConnection: RedisConnection) {
		super(schema, clientOrConnection);
	}

	async get(guildId: string, keyword: string) {
		return (await this.fetch(`${keyword}-${guildId}`)) as CachedKeyword;
	}

	async delete(guildId: string, keyword: string) {
		await this.remove(`${keyword}-${guildId}`);
	}

	async append(keyword: CachedKeyword) {
		await this.save(`${keyword.keyword}-${keyword.guildId}`, keyword);
	}

	async autoComplete(guildId: string, phrase: string) {
		// redisearch wildcard full-text search is very inconsitent so filtering instead
		const phraseTrimmed = phrase.trim().toLowerCase();

		const keywords = (
			await this.search().where("guildId").equal(guildId).return.all()
		).map((entry) => entry.keyword as string);

		return (
			phraseTrimmed
				? keywords.filter((keyword) =>
						keyword.toLowerCase().includes(phraseTrimmed),
					)
				: keywords
		).toSorted();
	}
}

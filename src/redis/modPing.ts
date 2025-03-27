import {
	type Entity,
	type RedisConnection,
	Repository,
	Schema,
} from "redis-om";

export interface ModPing extends Entity {
	guildId: string;
	userId: string;
	when: Date;
}

export const ModPing = new Schema("ModPing", {
	guildId: { type: "string" },
	userId: { type: "string" },
	when: { type: "date" },
});

export class ModPingRepository extends Repository {
	constructor(redis: RedisConnection) {
		super(ModPing, redis);
	}

	async get(id: string): Promise<ModPing | null> {
		const user = (await this.fetch(id)) as ModPing;

		if (!user || !user.userId) {
			return null;
		}

		return user;
	}

	async set(id: string, data: ModPing): Promise<void> {
		await this.save(id, data);
	}

	async getAll(): Promise<ModPing[]> {
		return (await this.search().return.all()) as ModPing[];
	}
}

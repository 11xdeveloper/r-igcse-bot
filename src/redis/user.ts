import {
	type Entity,
	type RedisConnection,
	Repository,
	Schema,
} from "redis-om";

export interface PracticeSessionUser extends Entity {
	userId: string;
	playing: boolean;
	subject?: string;
	sessionId?: string;
}

export const User = new Schema("User", {
	userId: { type: "string" },
	playing: { type: "boolean" },
	subject: { type: "string" },
	sessionId: { type: "string" },
});

export class UserRepository extends Repository {
	constructor(redis: RedisConnection) {
		super(User, redis);
	}

	async get(userId: string): Promise<PracticeSessionUser | null> {
		const user = (await this.fetch(userId)) as PracticeSessionUser;
		if (!user.userId) {
			return null;
		}
		return user;
	}

	async set(userId: string, data: PracticeSessionUser): Promise<void> {
		await this.save(userId, data);
	}

	async getAll(): Promise<PracticeSessionUser[]> {
		return (await this.search().return.all()) as PracticeSessionUser[];
	}
}

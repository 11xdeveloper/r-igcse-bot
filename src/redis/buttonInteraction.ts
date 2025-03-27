import {
	type Entity,
	type RedisConnection,
	Repository,
	Schema,
} from "redis-om";

export interface ButtonInteraction extends Entity {
	customId: string;
	messageId: string;
	guildId?: string;
	userHash?: string;
	userId?: string;
	questionAndAnswers?: string[];
}

export const ButtonInteraction = new Schema("ButtonInteraction", {
	customId: { type: "string" },
	messageId: { type: "string" },
	guildId: { type: "string" },
	userHash: { type: "string" },
	userId: { type: "string" },
	questionAndAnswers: { type: "string[]" },
});

export class ButtonInteractionRepository extends Repository {
	constructor(redis: RedisConnection) {
		super(ButtonInteraction, redis);
	}

	async get(customId: string): Promise<ButtonInteraction | null> {
		return (await this.fetch(customId)) as ButtonInteraction;
	}

	async set(customId: string, data: ButtonInteraction): Promise<void> {
		await this.save(customId, data);
	}

	async getAll(): Promise<ButtonInteraction[]> {
		return (await this.search().return.all()) as ButtonInteraction[];
	}
}

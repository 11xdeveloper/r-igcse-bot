import {
	type APIEmbedField,
	ActionRowBuilder,
	type AwaitMessageCollectorOptionsParams,
	ButtonBuilder,
	ButtonStyle,
	type ColorResolvable,
	ComponentType,
	EmbedBuilder,
	type Message,
} from "discord.js";

export class PaginationBuilder<T> {
	private chunks: T[][] = [];
	private title: string | null = null;
	private color: ColorResolvable | null = null;
	private page = 0;
	private map: (itemData: T) => Promise<APIEmbedField> | APIEmbedField;
	private description:
		| string
		| ((currentPage: number, totalPages: number) => string) = (p, t) =>
		`Page#${p} of ${t}`;
	private timedOut = false;

	constructor(
		data: T[],
		map: (itemData: T) => Promise<APIEmbedField> | APIEmbedField,
		options: { itemsPerChunk: number } = { itemsPerChunk: 9 },
	) {
		const itemsPerChunk = Math.min(Math.max(options.itemsPerChunk, 1), 25);

		this.chunks = Array.from(
			{ length: Math.ceil(data.length / itemsPerChunk) },
			(_, i) =>
				data.slice(i * itemsPerChunk, i * itemsPerChunk + itemsPerChunk),
		);

		this.map = map;
	}

	private async getPage() {
		const embed = new EmbedBuilder()
			.setTitle(this.title)
			.setColor(this.color)
			.setDescription("No data available");

		const data = this.chunks[this.page];

		if (this.map && this.chunks.length > 0 && data) {
			const fields: APIEmbedField[] = [];

			for (const item of data) {
				fields.push(await this.map(item));
			}

			embed
				.setFields(fields)
				.setDescription(
					typeof this.description === "string"
						? this.description
						: this.description(this.page + 1, this.chunks.length),
				);
		}

		return embed;
	}

	private getButtons() {
		const disabled = this.timedOut || this.chunks.length === 0;

		const firstButton = new ButtonBuilder()
			.setCustomId("first")
			.setEmoji("⏪")
			.setStyle(ButtonStyle.Primary)
			.setDisabled(disabled || this.page === 0);

		const previousButton = new ButtonBuilder()
			.setCustomId("previous")
			.setEmoji("⬅️")
			.setStyle(ButtonStyle.Primary)
			.setDisabled(disabled || this.page === 0);

		const lastButton = new ButtonBuilder()
			.setCustomId("last")
			.setEmoji("⏩")
			.setStyle(ButtonStyle.Primary)
			.setDisabled(disabled || this.page + 1 === this.chunks.length);

		const nextButton = new ButtonBuilder()
			.setCustomId("next")
			.setEmoji("➡️")
			.setStyle(ButtonStyle.Primary)
			.setDisabled(disabled || this.page + 1 === this.chunks.length);

		return new ActionRowBuilder<ButtonBuilder>().addComponents(
			firstButton,
			previousButton,
			nextButton,
			lastButton,
		);
	}

	public setTitle(title: string) {
		this.title = title;

		return this;
	}

	public setDescription(
		description: string | ((currentPage: number, totalPages: number) => string),
	) {
		this.description = description;

		return this;
	}

	public setColor(color: ColorResolvable) {
		this.color = color;

		return this;
	}

	public setInitialPage(page: number) {
		this.page = page;

		return this;
	}

	public async build(
		messageCallback: (page: {
			embeds: EmbedBuilder[];
			components: ActionRowBuilder<ButtonBuilder>[];
			fetchReply: true;
		}) => Promise<Message>,
		allowedUsers: string[],
		collectorOptions: Omit<
			AwaitMessageCollectorOptionsParams<ComponentType.Button, boolean>,
			"filter"
		> = { time: 60000 },
	) {
		const message = await messageCallback({
			components: [this.getButtons()],
			embeds: [await this.getPage()],
			fetchReply: true,
		});

		const collector = message.createMessageComponentCollector({
			componentType: ComponentType.Button,
			filter: (i) => allowedUsers.some((userId) => userId === i.user.id),
			...collectorOptions,
		});

		collector.on("collect", async (i) => {
			await i.deferUpdate();

			switch (i.customId) {
				case "first":
					this.page = 0;
					break;
				case "previous":
					this.page--;
					break;
				case "next":
					this.page++;
					break;
				case "last":
					this.page = this.chunks.length - 1;
					break;
				default:
					break;
			}

			await message.edit({
				components: [this.getButtons()],
				embeds: [await this.getPage()],
			});
		});

		collector.once("end", () => {
			this.timedOut = true;

			message.edit({
				components: [this.getButtons()],
			});
		});
	}
}

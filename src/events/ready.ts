import type { Client, ClientEvents, Events } from "discord.js";

export const once = true;
export function execute(
	client: Client,
	...args: ClientEvents[Events.ClientReady]
) {
	console.log(`Ready! Logged in as ${client.user?.tag}`);
}

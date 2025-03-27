import type { Events } from "discord.js";
import type { Event } from "@/events";

export const ClientReadyEvent: Event<Events.ClientReady> = {
	once: true,
	execute(_client, client) {
		console.log(`Ready! Logged in as ${client.user?.tag}`);
	},
};

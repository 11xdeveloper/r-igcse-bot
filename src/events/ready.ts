import type { Events } from "discord.js";
import type { Event } from "@/events";

const ClientReady: Event<Events.ClientReady> = {
	once: true,
	execute(_client, client) {
		console.log(`Ready! Logged in as ${client.user?.tag}`);
	},
};

export default ClientReady;

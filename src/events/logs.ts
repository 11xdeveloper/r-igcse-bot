import type { Events } from "discord.js";
import type { Event } from "@/events";

export const ErrorEvent: Event<Events.Error> = {
	once: false,
	execute(_client, error) {
		console.error(error);
	},
};

export const WarnEvent: Event<Events.Warn> = {
	once: false,
	execute(_client, message) {
		console.warn(message);
	},
};

export const DebugEvent: Event<Events.Debug> = {
	once: false,
	execute(_client, message) {
		console.debug(message);
	},
};

export const CacheSweepEvent: Event<Events.CacheSweep> = {
	once: false,
	execute(_client, message) {
		console.log("Cache sweep: ", message);
	},
};

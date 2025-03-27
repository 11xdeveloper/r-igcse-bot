import { readdir } from "node:fs/promises";
import { join as joinPaths } from "node:path";
import { isCodeFile } from "@/utils";
import type { Client } from "discord.js";
import { schedule } from "node-cron";

export interface Cron {
	expression: string;
	execute: (client: Client, now: Date | "manual" | "init") => Promise<void>;
}

const isCron = (value: unknown): value is Cron => {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	return "expression" in value && "execute" in value;
};

export const registerCrons = async (client: Client) => {
	const commandsDirPath = import.meta.dir;
	const commandFiles = await readdir(commandsDirPath, { recursive: true });

	for (const file of commandFiles) {
		if (!isCodeFile(file) || file.startsWith("index.")) {
			continue;
		}

		const filePath = joinPaths(commandsDirPath, file);

		const exports = await import(filePath);

		for (const exportValue of Object.values(exports)) {
			if (isCron(exportValue)) {
				schedule(exportValue.expression, async (now) =>
					exportValue.execute(client, now),
				);
			}
		}
	}
};

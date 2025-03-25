import { Client } from "discord.js";
import { registerEvents } from "@/events";
import { registerCommands } from "@/commands";

const client = new Client({ intents: [] });

await registerCommands();
await registerEvents(client);

await client.login(process.env.BOT_TOKEN);

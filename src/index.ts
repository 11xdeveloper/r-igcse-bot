import { Client } from "discord.js";
import { registerEvents } from "@/events";

const client = new Client({ intents: [] });

await registerEvents(client);

await client.login(process.env.BOT_TOKEN);

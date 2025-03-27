declare module "bun" {
	interface Env {
		BOT_TOKEN: string;
		DATABASE_URL: string;
		MAIN_GUILD_ID: string;
		BOT_DEV_ROLE_ID: string;
		[key: string]: string | undefined;
	}
}

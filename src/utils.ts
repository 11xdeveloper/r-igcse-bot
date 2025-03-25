import { extname } from "node:path";

export const isCodeFile = (name: string) =>
	extname(name) === ".js" || extname(name) === ".ts";

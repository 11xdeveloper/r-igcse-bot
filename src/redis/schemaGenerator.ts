import {
	Schema,
	type Entity,
	type FieldDefinition,
	type SchemaDefinition,
} from "redis-om";
import { z } from "zod";

export type SchemaType<T> = Omit<T, "id"> & Entity;

const prismaTypeToRedisType = (type: z.ZodTypeAny): FieldDefinition["type"] => {
	if (type instanceof z.ZodString) {
		return "string";
	}

	if (type instanceof z.ZodNumber) {
		return "number";
	}

	if (type instanceof z.ZodBoolean) {
		return "boolean";
	}

	if (type instanceof z.ZodArray) {
		const elementType = prismaTypeToRedisType(type.element);
		return `${elementType}[]` as FieldDefinition["type"];
	}

	return "string";
};

export const generateRedisSchema = <T extends z.ZodRawShape>(
	name: string,
	zodSchema: z.ZodObject<T>,
): Schema<SchemaType<T>> => {
	const shape = zodSchema.shape;
	const schemaFields: SchemaDefinition = {};

	for (const [key, value] of Object.entries(shape)) {
		if (key === "id") {
			continue;
		}

		schemaFields[key] = { type: prismaTypeToRedisType(value) };
	}

	return new Schema(name, schemaFields);
};

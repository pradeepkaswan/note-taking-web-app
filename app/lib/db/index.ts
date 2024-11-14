import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const db = drizzle({ client: sql, schema });

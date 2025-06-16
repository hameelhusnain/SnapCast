import { db } from "@/drizzle/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import pg from 'pg';

export const auth = betterAuth({
    database: drizzleAdapter(db, { provider: "pg" })
})
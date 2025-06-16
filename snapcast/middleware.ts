import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest, response: NextResponse){
    const session = await auth.api.getSession({
        headers: await headers(), 
    })
}
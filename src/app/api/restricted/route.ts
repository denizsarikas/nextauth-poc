import { options } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(options);
  if (session) {
    return NextResponse.json({ date: session?.date });
  } else {
    return NextResponse.json("You must be signed in.");
  }
}

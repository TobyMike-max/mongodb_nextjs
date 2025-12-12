import connectionToDatabase from "../../../lib/mongoose";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectionToDatabase();
    const { name, email } = await req.json();
    const newUser = new User({ name, email });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}

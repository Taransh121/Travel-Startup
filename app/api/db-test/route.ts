import { NextResponse } from "next/server";
import connectDB from "@/data/mongoose"; // Import your DB connection

export async function GET() {
  try {
    await connectDB(); // Connect to the database
    return NextResponse.json({ message: "Database connected successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}

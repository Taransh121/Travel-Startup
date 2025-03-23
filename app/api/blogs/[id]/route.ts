import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/data/mongoose";
import Blog from "@/data/blogModel";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.nextUrl);
    const id = url.pathname.split("/").pop(); 
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }
    const blog = await Blog.findById(id).select("-__v");
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("GET Blog Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}


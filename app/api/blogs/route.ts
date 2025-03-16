import { NextResponse } from "next/server";
import connectDB from "@/data/mongoose";
import Blog from "@/data/blogModel";

connectDB();

// **Fetch All Blogs**
export async function GET() {
  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// **Add a Blog**
export async function POST(req: Request) {
  try {
    const { title, metaTitle, metaDescription, sections } = await req.json();
    const newBlog = new Blog({ title, metaTitle, metaDescription, sections });
    await newBlog.save();
    return NextResponse.json(
      { message: "Blog added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

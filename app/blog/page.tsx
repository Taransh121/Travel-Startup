import React from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  metaDescription: string;
  sections: { content?: string }[];
}

// Fetch blogs from API
async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center mt-20 text-gray-700">Blogs</h1>
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col">
              {/* Blog Image */}
              <div className="h-40 w-full">
                <img
                  src={
                    blog.sections[0]?.content?.startsWith("http")
                      ? blog.sections[0].content
                      : "https://via.placeholder.com/300x150" // Fallback image
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2 h-14">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-3 h-18">{blog.metaDescription}</p>

                {/* Read More Button */}
                <div className="mt-auto pt-4">
                  <Link href={`/blog/${blog._id}`} className="text-blue-600 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
    </div>
  );
}

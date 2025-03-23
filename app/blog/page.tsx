import Link from "next/link";
import React from "react";

interface Blog {
  _id: string;
  title: string;
  metaDescription: string;
}

// Fetch blogs from API
async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center mt-20 text-[#ec8014]">
        BLOGS
      </h1>
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border rounded-lg shadow-md p-4 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-[#03485e]">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.metaDescription}</p>

              <div className="mt-auto pt-4">
                <Link
                  href={`/blog/${blog._id}`}
                  className="text-[#ec8014] font-medium"
                >
                  Read More →
                </Link>
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

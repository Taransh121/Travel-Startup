import React from "react";

interface BlogSubSection {
  title?: string;
  content?: string;
  bulletPoints?: string[];
}

interface BlogSection {
  title?: string;
  content?: string;
  bulletPoints?: string[];
  subsections?: BlogSubSection[];
}

interface Blog {
  _id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 mt-12">Latest Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="border p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700">{blog.metaDescription}</p>
            <div className="mt-2">
              {blog.sections.map((section, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                  {section.bulletPoints && (
                    <ul className="list-disc pl-5 mt-2">
                      {section.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {section.subsections &&
                    section.subsections.map((sub, subIndex) => (
                      <div key={subIndex} className="ml-4 mt-2">
                        <h4 className="text-md font-semibold">{sub.title}</h4>
                        <p className="text-gray-500">{sub.content}</p>
                        {sub.bulletPoints && (
                          <ul className="list-disc pl-5 mt-2">
                            {sub.bulletPoints.map((subPoint, subI) => (
                              <li key={subI}>{subPoint}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

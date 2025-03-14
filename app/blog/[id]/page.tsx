import { notFound } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  metaDescription: string;
  sections: { title?: string; content?: string; bulletPoints?: string[]; subsections?: any[] }[];
}

// ✅ Fetch single blog by ID
async function fetchBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
      cache: "force-cache",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// ✅ Generate static paths
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);
    const blogs: { _id: string }[] = await res.json();

    return blogs.map((blog) => ({
      id: blog._id,
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Display the Blog ID from URL */}
      <h1 className="text-2xl font-bold mt-20">Blog ID: {params.id}</h1>

      {/* Simple message below the navbar */}
      <p className="mt-4 text-gray-700">Hello</p>
    </div>
  );
}

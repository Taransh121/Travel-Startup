import { notFound } from "next/navigation";

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
  metaDescription: string;
  sections: BlogSection[];
}

// Fetch single blog by ID
async function fetchBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Generate static paths
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`);
    const blogs: { _id: string }[] = await res.json();

    return blogs.map((blog) => ({
      id: blog._id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}
export default async function BlogDetails(props: {
  params: Promise<{ id: string }>;
 }) 
 {
  const params = await props.params;
  const blog = await fetchBlog(params.id);

  if (!blog) return notFound();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-[#ec8014] mt-20">{blog.title}</h1>
      <p className="mt-2 text-gray-600 text-lg">{blog.metaDescription}</p>

      {/* Blog Sections */}
      <div className="mt-6 space-y-8">
        {blog.sections.map((section, index) => (
          <div key={index} className="border-b pb-4">
            {section.title && (
              <h2 className="text-2xl font-semibold text-gray-700">
                {section.title}
              </h2>
            )}
            {section.content && (
              <p className="mt-2 text-gray-600">{section.content}</p>
            )}

            {/* Bullet Points */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="mt-3 list-disc list-inside text-gray-600">
                {section.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Subsections */}
            {section.subsections && section.subsections.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 border-gray-300">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-4">
                    {subsection.title && (
                      <h3 className="text-xl font-semibold text-gray-600">
                        {subsection.title}
                      </h3>
                    )}
                    {subsection.content && (
                      <p className="mt-1 text-gray-600">{subsection.content}</p>
                    )}
                    {subsection.bulletPoints &&
                      subsection.bulletPoints.length > 0 && (
                        <ul className="mt-2 list-disc list-inside text-gray-500">
                          {subsection.bulletPoints.map((subPoint, subI) => (
                            <li key={subI}>{subPoint}</li>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

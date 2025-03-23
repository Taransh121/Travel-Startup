import mongoose, { Schema, Document, models } from "mongoose";

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

export interface IBlog extends Document {
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    sections: [
      {
        title: { type: String },
        content: { type: String },
        bulletPoints: { type: [String] },
        subsections: [
          {
            title: { type: String },
            content: { type: String },
            bulletPoints: { type: [String] },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Blog = models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;

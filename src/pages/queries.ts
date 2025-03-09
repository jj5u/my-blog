import { db } from "..";
import { blogs } from "../db/schema";

export const getHome = async () => {
  const allBlogs = await db.select({
    title: blogs.title,
    content: blogs.content,
    created_at: blogs.created_at,
  });
  return allBlogs;
};

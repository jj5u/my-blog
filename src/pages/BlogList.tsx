import React from "react";
import { useOutletContext } from "react-router";
interface BlogProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogList() {
  const { blogData }: { blogData: BlogProps[] } = useOutletContext();

  return (
    <div>
      <h1>Postings ({blogData.length})</h1>
      {blogData.map((blog) => (
        <div key={blog.id} className="border p-4 my-4 rounded-2xl text-gray-800 cursor-pointer hover:shadow-lg transition-shadow">
          <h2 className="text-lg">{blog.title}</h2>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-600">{blog.created_at}</p>
        </div>
      ))}
    </div>
  );
}

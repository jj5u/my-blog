import React from "react";
import { Link, Outlet } from "react-router";

export default function Blog() {
  const blogData = [
    { id: "1", title: "First Post", content: "This is the first post.", createdAt: "2025-02-28" },
    { id: "2", title: "Second Post", content: "This is the second post.", createdAt: "2025-02-27" },
  ];
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl">
      <Outlet context={{ blogData }} />
      <footer className="text-gray-800 p-1 bg-white rounded-2xl mt-auto">
        <p className="p-4 text-center">
          Want to
          <span className="text-red-600"> make </span> something
          <span className="text-red-600"> great</span> together?
        </p>
        <div className="flex justify-center space-x-2 p-4">
          <Link to="https://github.com/jj5u/" className="hover:font-bold transition-all w-24 text-center">
            Github
          </Link>
          <Link to="https://www.linkedin.com/in/jahye-hwang-a42307244" className="hover:font-bold transition-all w-24 text-center text-red-600">
            linkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
}

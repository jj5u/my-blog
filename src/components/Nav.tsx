import React from "react";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="p-0.5 sticky top-0 z-10">
      <div className="flex justify-end items-center space-x-4 mx-auto p-2 bg-white rounded-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center justify-center p-4 w-32 h-10 cursor-pointer transition-colors last-of-type:rounded-br-xl last-of-type:rounded-tr-xl ${isActive ? "text-red-500 underline-offset-2 underline" : "text-black hover:bg-slate-100"}`
          }
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center justify-center p-4 w-32 h-10 cursor-pointer transition-colors last-of-type:rounded-br-xl last-of-type:rounded-tr-xl ${isActive ? "text-red-500 underline-offset-2 underline" : "text-black hover:bg-slate-100"}`
          }
        >
          <span>About</span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `flex items-center justify-center p-4 w-32 h-10 cursor-pointer transition-colors last-of-type:rounded-br-xl last-of-type:rounded-tr-xl ${isActive ? "text-red-500 underline-offset-2 underline" : "text-black hover:bg-slate-100"}`
          }
        >
          <span>Blog</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center justify-center p-4 w-32 h-10 cursor-pointer transition-colors last-of-type:rounded-br-xl last-of-type:rounded-tr-xl ${isActive ? "text-red-500 underline-offset-2 underline" : "text-black hover:bg-slate-100"}`
          }
        >
          <span>Projects</span>
        </NavLink>
      </div>
    </nav>
  );
}

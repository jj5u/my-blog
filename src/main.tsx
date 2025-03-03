import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./index.css";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="projects" element={<Projects />} />

          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Failed to find the root element");
}

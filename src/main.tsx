import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./index.css";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import About from "./pages/About";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const root = document.getElementById("root");
const queryClient = new QueryClient();
const base = import.meta.env.MODE === "development" ? "/" : "/my-blog/";
if (root) {
  ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={base}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />}>
              <Route index element={<BlogList />} />
            </Route>
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
} else {
  console.error("Failed to find the root element");
}

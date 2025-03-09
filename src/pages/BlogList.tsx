import { useFetchBlogs } from "../hooks/useFetchBlogs";
interface BlogProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogList() {
  const { data: blogData, isLoading, error } = useFetchBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;
  return (
    <div>
      <h1>Postings ({blogData?.length})</h1>
      {blogData?.map((blog: BlogProps) => (
        <div key={blog.id} className="border p-4 my-4 rounded-2xl text-gray-800 cursor-pointer hover:shadow-lg transition-shadow">
          <h2 className="text-lg">{blog.title}</h2>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-600">
            {new Date(blog.created_at).toLocaleDateString("ko-KR", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}{" "}
            {new Intl.DateTimeFormat("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
              timeZone: "Asia/Seoul", // Convert to given time zone
            }).format(new Date(blog.created_at + "Z"))}
          </p>
        </div>
      ))}
    </div>
  );
}

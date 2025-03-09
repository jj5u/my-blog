import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabase";

const fetchBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

export const useFetchBlogs = () => useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs });

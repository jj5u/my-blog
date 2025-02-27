import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Instrument } from "./types"; // Adjust the path as needed
console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Anon Key:", import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabase = createClient(import.meta.env.VITE_DATABASE_URL, import.meta.env.VITE_SUPERBASE_ANON_KEY);

function App() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data, error } = await supabase.from<Instrument>("instruments").select("*");

    if (error) {
      console.error("Error fetching instruments:", error);
    } else {
      setInstruments(data ?? []);
    }
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;

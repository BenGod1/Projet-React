import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://fvniggiddjwhmrgqbrra.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bmlnZ2lkZGp3aG1yZ3FicnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODcxNjMsImV4cCI6MjAyMjQ2MzE2M30.o-xPq1qIYKD-252XVLgmqLs_tVBcEQEQyUiP4NftBXg");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
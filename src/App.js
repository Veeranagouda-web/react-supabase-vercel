import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setStudents(data);
  }

  async function addStudent(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("students")
      .insert([{ name, email }]);
    if (error) return console.error(error);
    setName("");
    setEmail("");
    fetchStudents();
  }

  return (
    <div style={{ padding: 20 }}>
      {/* <Auth /> */}
      <h1>Students</h1>
      <form onSubmit={addStudent}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Add+</button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

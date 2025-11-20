// import React, { useState } from "react";
// import { supabase } from "./supabaseClient";

// export default function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function signUp(e) {
//     e.preventDefault();
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) alert(error.message);
//     else alert("Check your email for confirmation (if enabled).");
//   }

//   async function signIn(e) {
//     e.preventDefault();
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) alert(error.message);
//     else alert("Signed in");
//   }

//   return (
//     <div>
//       <h2>Auth</h2>
//       <form onSubmit={signUp}>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           type="password"
//           required
//         />
//         <button onClick={signUp}>Sign up</button>
//         <button onClick={signIn}>Sign in</button>
//       </form>
//     </div>
//   );
// }

// Auth.js
import React, { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Check your email to verify login!");
  }

  async function signIn(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Signed in successfully");
  }

  return (
    <div>
      <h2>Login / Signup</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
      </form>
    </div>
  );
}

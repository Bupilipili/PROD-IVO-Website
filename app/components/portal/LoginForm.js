"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm]     = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`, {
        method: "POST",
        //credentials: "include",                  // send+receive cookie
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.email,                 // backend expects `username`
          password: form.password
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Login failed");
      }


      // NEW: grab token from JSON and store it
      const { token } = await res.json();
      localStorage.setItem("ADMIN_TOKEN", token);

      // on success, go to the create‑post page
      router.push("/admin/posts/new");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form className={styles.loginFormContainer} onSubmit={handleSubmit}>
      <h4 className={styles.title}>Admin Login</h4>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.inputWrapper}>
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          name="password"
          type="password"
          placeholder="Your Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className="main-button"
          disabled={loading}
        >
          {loading ? "Logging in…" : "Log In"}
        </button>
      </div>
    </form>
  );
}

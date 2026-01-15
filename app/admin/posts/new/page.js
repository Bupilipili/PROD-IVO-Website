"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "./newPost.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ALLOWED_DOC_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB

function slugify(str = "") {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [file, setFile] = useState(null);     // blog file (.docx or .pdf)
  const [image, setImage] = useState(null);   // banner image (optional)
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // auto-suggest a slug while user types a title (still editable)
  const suggestedSlug = useMemo(() => slugify(title), [title]);

  function onTitleChange(e) {
    const v = e.target.value;
    setTitle(v);
    // only auto-fill slug if user hasn't typed a custom one yet
    if (!slug) setSlug(slugify(v));
  }

  function onSlugChange(e) {
    setSlug(slugify(e.target.value));
  }

  function validateDoc(f) {
    if (!f) return "Please attach the blog file (.docx or .pdf).";
    if (!ALLOWED_DOC_TYPES.includes(f.type)) {
      return "File must be a .docx or .pdf.";
    }
    if (f.size > MAX_FILE_BYTES) {
      return "File is too large (max 10MB).";
    }
    return null;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setErr("");

    try {
      const msg = validateDoc(file);
      if (msg) throw new Error(msg);

      const fd = new FormData();
      fd.append("title", title);
      fd.append("slug", slug || suggestedSlug);
      fd.append("excerpt", excerpt);
      fd.append("docx", file);            // <- MUST match backend field name
      if (image) fd.append("image", image);

      const token =
        typeof window !== "undefined" ? localStorage.getItem("ADMIN_TOKEN") : null;

      const res = await fetch(`${API_URL}/api/posts/docx`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Upload failed (${res.status})`);
      }

      // success
      router.push("/blogs");
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
     <div className="body-wrapper" style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1 className={styles.title}>Create New Blog Post</h1>

      {err && <p className={styles.error}>{err}</p>}

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={onTitleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            type="text"
            value={slug}
            onChange={onSlugChange}
            placeholder={suggestedSlug || "my-awesome-post"}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            rows={4}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Short summary shown on the list page…"
            required
          />
        </div>

        <div className={styles.field}>
          {/* <label htmlFor="docx">Blog file (.docx or .pdf)</label>
          <input
            id="docx"
            className={styles.fileInput}
            type="file"
            accept=".docx,.pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />
          {file && (
            <small>
              Selected: {file.name} ({Math.round(file.size / 1024)} KB)
            </small>
          )} */}
          <label>
            Blog file (.docx)
            <input type="file" accept=".docx" onChange={e=>setFile(e.target.files?.[0]||null)} required />
          </label>
        </div>

        <div className={styles.field}>
          {/* <label htmlFor="image">Banner image (required)</label>
          <input
            id="image"
            className={styles.fileInput}
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          {image && <small>Selected: {image.name}</small>} */}
          <label>
            Banner image (required)
            <input type="file" accept="image/*" onChange={e=>setImage(e.target.files?.[0]||null)} required />
          </label>
        </div>

        <button className={styles.submitButton} disabled={loading}>
          {loading ? "Uploading…" : "Post"}
        </button>
      </form>
    </div>
  );
}

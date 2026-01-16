// app/blogs/[slug]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { API_URL } from "@/lib/config";

export const revalidate = 0;

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  const res = await fetch(`${API_URL}/api/posts/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error(`Post fetch failed (${res.status})`);
  }

  const { post } = await res.json();

  return (
    <div className="body-wrapper">
      {/* Cover banner */}
      {post.image_url && (
        <div className={styles.cover}>
          <Image
            src={`${API_URL}${post.image_url}`}
            alt={post.title}
            fill
            className={styles.coverImg}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      )}

      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>
        {new Date(post.created_at).toLocaleDateString()}
      </p>

      {/* Body (HTML converted on the server from DOCX) */}
      {post.content_html ? (
        <article
          className={styles.article}
          // content_html is already sanitized on the server
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />
      ) : (
        <p className={styles.fallback}>
          We couldn’t render the content.&nbsp;
          {post.original_docx_path && (
            <a
              href={`${API_URL}${post.original_docx_path}`}
              target="_blank"
              rel="noreferrer"
            >
              Download the original file
            </a>
          )}
        </p>
      )}
    </div>
  );
}



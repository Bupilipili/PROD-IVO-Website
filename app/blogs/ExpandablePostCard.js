
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from "./blogs.module.css";

// export default function ExpandablePostCard({
//   post,
//   apiUrl,
//   variant = "grid",
//   forceOpen = false,
//   onMore,
//   onLess,
//   hideOpenLink = true,
//   hideCollapseBtn = true,
// }) {
//   const [open, setOpen] = useState(!!forceOpen);
//   const [loading, setLoading] = useState(false);
//   const [html, setHtml] = useState("");
//   const [err, setErr] = useState("");
//   const panelRef = useRef(null);

//   const imgSrc = post?.image_url ? `${apiUrl}${post.image_url}` : "/images/placeholder.jpg";

//   // keep local state in sync with forceOpen
//   useEffect(() => {
//     setOpen(!!forceOpen);
//   }, [forceOpen]);

//   // auto-load HTML when force-opened
//   useEffect(() => {
//     if (forceOpen && open && !html && !loading) {
//       (async () => {
//         try {
//           setLoading(true);
//           setErr("");
//           const res = await fetch(`${apiUrl}/api/posts/${post.slug}`, { cache: "no-store" });
//           if (!res.ok) throw new Error(`Load failed (${res.status})`);
//           const data = await res.json();
//           setHtml(data?.post?.content_html || "");
//         } catch (e) {
//           setErr("Sorry — couldn’t load this article.");
//         } finally {
//           setLoading(false);
//         }
//       })();
//     }
//   }, [forceOpen, open, html, loading, apiUrl, post.slug]);

//   // smooth height animation (re-run when html arrives)
//   useEffect(() => {
//     const el = panelRef.current;
//     if (!el) return;
//     el.style.maxHeight = open ? el.scrollHeight + "px" : "0px";
//   }, [open, html]);

//   async function ensureHtmlLoaded() {
//     if (html || loading) return;
//     try {
//       setLoading(true);
//       setErr("");
//       const res = await fetch(`${apiUrl}/api/posts/${post.slug}`, { cache: "no-store" });
//       if (!res.ok) throw new Error(`Load failed (${res.status})`);
//       const data = await res.json();
//       setHtml(data?.post?.content_html || "");
//     } catch (e) {
//       setErr("Sorry — couldn’t load this article.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleMore = async () => {
//     await ensureHtmlLoaded();
//     setOpen(true);
//     onMore?.(post.id);
//   };

//   const handleLess = () => {
//     setOpen(false);
//     onLess?.();
//   };

//   return (
//     <article
//       className={
//         variant === "lead"
//           ? styles.leadCard
//           : variant === "small"
//           ? styles.smallCard
//           : styles.gridCard
//       }
//     >
//       <div
//         className={
//           variant === "lead"
//             ? styles.leadMedia
//             : variant === "small"
//             ? styles.smallMedia
//             : styles.gridMedia
//         }
//       >
//         <Image
//           src={imgSrc}
//           alt={post.title}
//           fill={variant !== "small"}
//           width={variant === "small" ? 640 : undefined}
//           height={variant === "small" ? 360 : undefined}
//           className={variant === "small" ? styles.intrinsic : styles.cover}
//           priority={variant === "lead"}
//         />
//       </div>

//       <div
//         className={
//           variant === "lead"
//             ? styles.leadBody
//             : variant === "small"
//             ? styles.smallBody
//             : styles.gridBody
//         }
//       >
//         {variant === "small" ? (
//           <h3 className={styles.smallTitle}>{post.title}</h3>
//         ) : variant === "lead" ? (
//           <h2 className={styles.leadTitle}>{post.title}</h2>
//         ) : (
//           <h3>{post.title}</h3>
//         )}

//         {/* Hide the excerpt/summary when open */}
//         {!open && (
//           <p className={variant === "small" ? styles.smallExcerpt : undefined}>
//             {post.excerpt}
//           </p>
//         )}

//         <div className={styles.smallMeta}>
//           {!open ? (
//             <button
//               type="button"
//               className={styles.inlineMore}
//               onClick={handleMore}
//               aria-expanded={open}
//               aria-controls={`panel-${post.id}`}
//             >
//               more
//             </button>
//           ) : (
//             <button
//               type="button"
//               className={styles.inlineMore}
//               onClick={handleLess}
//               aria-expanded={open}
//               aria-controls={`panel-${post.id}`}
//             >
//               less
//             </button>
//           )}
//         </div>
//       </div>

//       <div
//         id={`panel-${post.id}`}
//         ref={panelRef}
//         className={styles.expandPanel}
//         aria-hidden={!open}
//       >
//         <div className={styles.expandInner}>
//           {loading && <div className={styles.loading}>Loading…</div>}
//           {err && <div className={styles.error}>{err}</div>}
//           {!loading && !err && html && (
//             <div
//               className={styles.articleHtml}
//               dangerouslySetInnerHTML={{ __html: html }}
//             />
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }


// app/blogs/ExpandablePostCard.js

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./blogs.module.css";

/** Fix invalid nested anchors from CMS and remove empty anchors */
function sanitizeAnchors(rawHtml) {
  if (!rawHtml) return rawHtml;

  // Use DOM only in the browser
  if (typeof window === "undefined") return rawHtml;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = rawHtml;

  // 1) Unwrap inner <a> when an <a> is inside another <a>
  wrapper.querySelectorAll("a a").forEach((inner) => {
    const outer = inner.closest("a");
    if (!outer) return;

    // Promote href/target/rel from inner to outer if outer lacks them
    if (!outer.getAttribute("href") && inner.getAttribute("href")) {
      outer.setAttribute("href", inner.getAttribute("href"));
      if (inner.getAttribute("target"))
        outer.setAttribute("target", inner.getAttribute("target"));
      if (inner.getAttribute("rel"))
        outer.setAttribute("rel", inner.getAttribute("rel"));
    }

    // Move inner contents to the outer and remove the inner anchor
    while (inner.firstChild) outer.appendChild(inner.firstChild);
    inner.remove();
  });

  // 2) Remove empty anchors (no href and no content)
  wrapper.querySelectorAll("a").forEach((a) => {
    const hasHref = a.hasAttribute("href");
    const text = (a.textContent || "").trim();
    const hasContent = text.length > 0 || a.children.length > 0;
    if (!hasHref && !hasContent) a.replaceWith(document.createTextNode(""));
  });

  // 3) Optional: ensure external links are safe
  wrapper.querySelectorAll('a[href^="http"]').forEach((a) => {
    if (!a.getAttribute("target")) a.setAttribute("target", "_blank");
    const rel = (a.getAttribute("rel") || "").split(" ").filter(Boolean);
    if (!rel.includes("noopener")) rel.push("noopener");
    if (!rel.includes("noreferrer")) rel.push("noreferrer");
    a.setAttribute("rel", rel.join(" "));
  });

  return wrapper.innerHTML;
}

export default function ExpandablePostCard({
  post,
  apiUrl,
  variant = "grid",
  forceOpen = false,
  onMore,
  onLess,
  hideOpenLink = true,
  hideCollapseBtn = true,
}) {
  const [open, setOpen] = useState(!!forceOpen);
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const [err, setErr] = useState("");
  const panelRef = useRef(null);

  const imgSrc = post?.image_url ? `${apiUrl}${post.image_url}` : "/images/placeholder.jpg";

  // keep local state in sync with forceOpen
  useEffect(() => {
    setOpen(!!forceOpen);
  }, [forceOpen]);

  // helper: set sanitized HTML
  const setSanitizedHtml = (raw) => {
    const cleaned = sanitizeAnchors(raw);
    setHtml(cleaned || "");
  };

  // auto-load HTML when force-opened
  useEffect(() => {
    if (forceOpen && open && !html && !loading) {
      (async () => {
        try {
          setLoading(true);
          setErr("");
          const res = await fetch(`${apiUrl}/api/posts/${post.slug}`, { cache: "no-store" });
          if (!res.ok) throw new Error(`Load failed (${res.status})`);
          const data = await res.json();
          setSanitizedHtml(data?.post?.content_html || "");
        } catch (e) {
          setErr("Sorry — couldn’t load this article.");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [forceOpen, open, html, loading, apiUrl, post.slug]);

  // smooth height animation (re-run when html arrives)
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    el.style.maxHeight = open ? el.scrollHeight + "px" : "0px";
  }, [open, html]);

  // Adjust height if images load later inside the panel
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const el = panelRef.current;
    const imgs = el.querySelectorAll("img");
    const onLoad = () => (el.style.maxHeight = el.scrollHeight + "px");
    imgs.forEach((im) => im.addEventListener("load", onLoad));
    return () => imgs.forEach((im) => im.removeEventListener("load", onLoad));
  }, [open, html]);

  async function ensureHtmlLoaded() {
    if (html || loading) return;
    try {
      setLoading(true);
      setErr("");
      const res = await fetch(`${apiUrl}/api/posts/${post.slug}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Load failed (${res.status})`);
      const data = await res.json();
      setSanitizedHtml(data?.post?.content_html || "");
    } catch (e) {
      setErr("Sorry — couldn’t load this article.");
    } finally {
      setLoading(false);
    }
  }

  const handleMore = async () => {
    await ensureHtmlLoaded();
    setOpen(true);
    onMore?.(post.id);
  };

  const handleLess = () => {
    setOpen(false);
    onLess?.();
  };

  return (
    <article
      className={
        variant === "lead"
          ? styles.leadCard
          : variant === "small"
          ? styles.smallCard
          : styles.gridCard
      }
    >
      <div
        className={
          variant === "lead"
            ? styles.leadMedia
            : variant === "small"
            ? styles.smallMedia
            : styles.gridMedia
        }
      >
        <Image
          src={imgSrc}
          alt={post.title}
          fill={variant !== "small"}
          width={variant === "small" ? 640 : undefined}
          height={variant === "small" ? 360 : undefined}
          className={variant === "small" ? styles.intrinsic : styles.cover}
          priority={variant === "lead"}
        />
      </div>

      <div
        className={
          variant === "lead"
            ? styles.leadBody
            : variant === "small"
            ? styles.smallBody
            : styles.gridBody
        }
      >
        {variant === "small" ? (
          <h3 className={styles.smallTitle}>{post.title}</h3>
        ) : variant === "lead" ? (
          <h2 className={styles.leadTitle}>{post.title}</h2>
        ) : (
          <h3>{post.title}</h3>
        )}

        {/* Hide the excerpt/summary when open */}
        {!open && (
          <p className={variant === "small" ? styles.smallExcerpt : undefined}>
            {post.excerpt}
          </p>
        )}

        <div className={styles.smallMeta}>
          {!open ? (
            <button
              type="button"
              className={styles.inlineMore}
              onClick={handleMore}
              aria-expanded={open}
              aria-controls={`panel-${post.id}`}
            >
              more
            </button>
          ) : (
            <button
              type="button"
              className={styles.inlineMore}
              onClick={handleLess}
              aria-expanded={open}
              aria-controls={`panel-${post.id}`}
            >
              less
            </button>
          )}
        </div>
      </div>

      <div
        id={`panel-${post.id}`}
        ref={panelRef}
        className={styles.expandPanel}
        aria-hidden={!open}
      >
        <div className={styles.expandInner}>
          {loading && <div className={styles.loading}>Loading…</div>}
          {err && <div className={styles.error}>{err}</div>}
          {!loading && !err && html && (
            <div
              className={styles.articleHtml}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>
    </article>
  );
}



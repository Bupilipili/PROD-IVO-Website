// app/blogs/BlogFeedClient.js
"use client";

import { useState, useCallback } from "react";
import ExpandablePostCard from "./ExpandablePostCard";
import styles from "./blogs.module.css";

export default function BlogFeedClient({
  lead,
  rest,
  apiUrl,
  onActivePostChange, // <- parent will use this to swap featured posts
}) {
  // store a generic key (id or slug)
  const [expandedKey, setExpandedKey] = useState(null);

  const allPosts = [lead, ...rest];

  // find a post by id OR slug
  // const findPostByKey = useCallback(
  //   (key) => allPosts.find((p) => p.id === key || p.slug === key),
  //   [allPosts]
  // );

  const handleOpen = useCallback(
    (key) => {
      setExpandedKey(key);
      const post = findPostByKey(key);
      // tell parent which post is active so it can update featured posts
      if (post && onActivePostChange) {
        onActivePostChange(post.slug); // we pass slug so it matches your perPostFeatured keys
      }
    },
    [findPostByKey, onActivePostChange]
  );

  const handleClose = useCallback(() => {
    setExpandedKey(null);
    // tell parent: no active post -> use default featured list
    onActivePostChange?.(null);
  }, [onActivePostChange]);

  // When something is opened: show ONLY that post, forced open
  if (expandedKey !== null) {
    const post = findPostByKey(expandedKey);
    if (!post) return null;

    return (
      <ExpandablePostCard
        key={post.id}
        post={post}
        apiUrl={apiUrl}
        variant="lead"
        forceOpen
        onLess={handleClose}   // “less” collapses and brings list back
        hideOpenLink           // keep your existing flags
        hideCollapseBtn
      />
    );
  }

  // Default: show the full list
  return (
    <>
      {/* Lead */}
      <ExpandablePostCard
        post={lead}
        apiUrl={apiUrl}
        variant="lead"
        onMore={handleOpen}    // when “more” clicked, open this one
        hideOpenLink
        hideCollapseBtn
      />

      {/* Two small cards row */}
      <div className={styles.smallRow}>
        {rest.slice(0, 2).map((p) => (
          <ExpandablePostCard
            key={p.id}
            post={p}
            apiUrl={apiUrl}
            variant="small"
            onMore={handleOpen}
            hideOpenLink
            hideCollapseBtn
          />
        ))}
      </div>

      {/* Grid of remaining posts */}
      <div className={styles.grid}>
        {rest.slice(2).map((p) => (
          <ExpandablePostCard
            key={p.id}
            post={p}
            apiUrl={apiUrl}
            variant="grid"
            onMore={handleOpen}
            hideOpenLink
            hideCollapseBtn
          />
        ))}
      </div>
    </>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogs.module.css";
import { API_URL } from "@/lib/config";

function imageSrc(p) {
  return p?.image_url ? `${API_URL}${p.image_url}` : "/images/placeholder.jpg";
}

export default function PostsCarousel({ posts = [] }) {
  const trackRef = useRef(null);
  if (!posts.length) return null;

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className={styles.carousel}>
      <button
        type="button"
        aria-label="Previous"
        className={`${styles.carouselBtn} ${styles.prev}`}
        onClick={() => scrollBy(-1)}
      >
        ‹
      </button>

      <div ref={trackRef} className={styles.carouselTrack}>
        {posts.map((p) => (
          <article key={p.id} className={styles.slideCard}>
            <div className={styles.slideMedia}>
              <Image
                src={imageSrc(p)}
                alt={p.title}
                fill
                className={styles.cover}
                sizes="(max-width:768px) 80vw, 40vw"
              />
            </div>
            <div className={styles.slideBody}>
              <h3><Link href={`/blogs/${p.slug}`}>{p.title}</Link></h3>
              <p>{p.excerpt}</p>
              <div className={styles.smallMeta}>
                <time>{new Date(p.created_at).toLocaleDateString()}</time>
                <Link href={`/blogs/${p.slug}`} className={styles.smallMore}>more</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next"
        className={`${styles.carouselBtn} ${styles.next}`}
        onClick={() => scrollBy(1)}
      >
        ›
      </button>
    </section>
  );
}

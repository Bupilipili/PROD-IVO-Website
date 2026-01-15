
// app/blogs/page.js
import Image from "next/image";
import styles from "./blogs.module.css";
import { API_URL } from "@/lib/config";
import BlogsLayoutClient from "./BlogsLayoutClient";

export const revalidate = 0; // always fresh

export default async function BlogsPage() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
  const { posts = [] } = await res.json();

  if (!posts.length) {
    return <div className="body-wrapper">No blog posts yet.</div>;
  }

  // 🔹 DEFAULT Featured Posts (shown when no blog is expanded)
  const defaultFeatured = [
    {
      title:
        "JSON Relational Duality: The Revolutionary Unification of Document, Object, and Relational Models",
      href: "https://blogs.oracle.com/database/post/json-relational-duality-app-dev",
    },
    {
      title: "Explore SQL Features in Oracle Database 23ai",
      href: "https://docs.oracle.com/en/learn/db23ai-sql-features/index.html#introduction",
    },
    {
      title: "Overview of Multilingual Engine for JavaScript",
      href: "https://docs.oracle.com/en/database/oracle/oracle-database/23/mlejs/overview-multilingual-engine-javascript.html#GUID-6AEC4D40-BE51-4DC6-9B8E-22396B5B16DD",
    },
    {
      title:
        "Get started with property graphs in Oracle Database 23c Free – Developer Release",
      href: "https://blogs.oracle.com/database/post/get-started-with-property-graphs-in-oracle-database-23c-free-developer-release",
    },
    {
      title: "Release Update 23.9 Features",
      href: "https://docs.oracle.com/en/database/oracle/oracle-database/23/nfcoa/ru_23_9.html#GUID-ru_23_9",
    },
  ];

  // 🔹 PER-BLOG Featured Posts
  // Key = blog `slug` from your DB (see your `blogs` table).
  // Edit these arrays to control what appears per post.
  const perPostFeatured = {
    "zero-trust-security-embracing-never-trust-always-verify": [
      {
        title:
          "Zero Trust Architecture vs Traditional Security Models – A Comparative Analysis",
        href: "https://techdirect.net/blog/zero-trust-architecture-vs-traditional-security-models-a-comparative-analysis",
      },
      {
        title:
          "Zero Trust vs Traditional Security Models – How Do They Compare?",
        href: "https://blog.theinstillery.com/stories/zero-trust-vs-traditional-security-models-how-do-they-compare",
      },
    ],

    "the-future-of-ai-in-oracle-database-23c": [
      {
        title: "New Features in Oracle Database 23ai (23c)",
        href: "https://docs.oracle.com/en/database/oracle/oracle-database/23/nfcoa/index.html",
      },
      {
        title: "JSON Relational Duality for App Developers",
        href: "https://blogs.oracle.com/database/post/json-relational-duality-app-dev",
      },
      {
        title: "JavaScript Developer's Guide",
        href: "https://docs.oracle.com/en/database/oracle/oracle-database/23/mlejs/overview-multilingual-engine-javascript.html#GUID-6AEC4D40-BE51-4DC6-9B8E-22396B5B16DD",
      },
      {
        title: "Get started with property graphs in Oracle Database 23c Free – Developer Release",
        href: "https://blogs.oracle.com/database/post/get-started-with-property-graphs-in-oracle-database-23c-free-developer-release",
      },
    ],

    "cybersecurity-as-a-business-challenge": [
      {
        title: "Top Cybersecurity Statistics for 2024",
        href: "https://www.cobalt.io/blog/cybersecurity-statistics-2024",
      },
      {
        title: "2024 Cybersecurity Landscape – 50 Critical Statistics for Security Leaders",
        href: "https://www.kiteworks.com/cybersecurity-risk-management/2024-cybersecurity-landscape-50-critical-statistics/",
      },
    ],
  };

  return (
    <div className={`body-wrapper ${styles.topOffset}`}>
      {/* HERO */}
      <section className={styles.hero}>
        <picture className={styles.heroPicture}>
          {/* Mobile first */}
          <source media="(max-width: 768px)" srcSet="/banners/MobileBanner.gif" />
          {/* Desktop */}
          <source media="(min-width: 769px)" srcSet="/banners/Blog page Banner.gif" />
          {/* Fallback */}
          <Image
            src="/banners/Blog page Banner.gif"
            alt="Let’s Connect"
            fill
            className={styles.heroImg}
            priority
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </picture>
      </section>

      {/* MAIN LAYOUT (client-side controls which featured list is shown) */}
      <BlogsLayoutClient
        posts={posts}
        apiUrl={API_URL}
        featuredConfig={{ default: defaultFeatured, perPost: perPostFeatured }}
      />
    </div>
  );
}

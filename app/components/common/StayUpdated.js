"use client";
import { useRouter } from "next/navigation";
import styles from "./StayUpdated.module.css";

const blogPosts = [
  {
    id: 1,
    date: "JAN 6, 2025",
    title: "Why Personal Data Privacy Is a Key Part of Cybersecurity Strategy",
    excerpt:
      "Can Cybersecurity Exist Without Data Privacy? Firewalls stop intrusions. Antivirus blocks malware. Encryption guards files.",
    image: "/blogs/blog-1.webp",
    slug: "#",
  },
  {
    id: 2,
    date: "JAN 6, 2025",
    title: "The Anatomy of a Phishing Email: How to Spot and Avoid Scams",
    excerpt:
      "That email notification pops up. It's from a brand you know, telling you to update your account details immediately.",
    image: "/blogs/blog-2.webp",
    slug: "#",
  },
  {
    id: 3,
    date: "JAN 6, 2025",
    title: "Modern IT Security, Data Privacy, and Cyber Security",
    excerpt:
      "Digital systems are designed to protect the most sensitive data from criminals. Loss of privacy, loss of money and damage to reputation.",
    image: "/blogs/blog-3.webp",
    slug: "#",
  },
];

export default function StayUpdated() {
  const router = useRouter();

  return (
    <section className={styles.stayUpdatedContainer}>
      <div className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title} data-aos="fade-right">
            Stay Updated with Our Tips & Service News!
          </h2>
        </div>
        <div className={styles.headerRight} data-aos="fade-left">
          <h4 className={styles.blogTitle}>Our Blog</h4>
          <p className={styles.blogDescription}>
            Stay informed with our latest tips, service updates, and expert
            advice on maintaining your IT infrastructure.
          </p>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.postsContainer} data-aos="fade-up">
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImageContainer}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postContent}>
              <span className={styles.postDate}>{post.date}</span>
              <h4 className={styles.postTitle}>{post.title}</h4>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <hr className={styles.postDivider} />
              <button
                className={styles.readMore}
                onClick={() => router.push(post.slug)}
              >
                Read More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

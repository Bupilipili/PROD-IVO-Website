"use client";
import { useRouter } from "next/navigation";
import { dmSans } from "@/app/layout";
import styles from "./SolutionSection.module.css";

export default function SolutionSection({
  title,
  text,
  imageUrl,
  redirectUrl,
  reverse = false,
}) {
  const router = useRouter();
  return (
    <section
      className={styles.solutionSection}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <div className={styles.leftSection}>
        <h2 data-aos="fade-up">{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className={styles.textSection}
          data-aos="fade-up"
        />
        <button
          onClick={() => router.push(redirectUrl)}
          className={`${dmSans.className} main-button`}
          data-aos="fade-up"
          aria-label={title}
        >
          Learn More
        </button>
      </div>
      <div className={styles.imageSection}>
        <img src={imageUrl} alt={title} data-aos="fade-up" />
      </div>
    </section>
  );
}

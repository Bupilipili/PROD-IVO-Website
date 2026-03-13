"use client";
import { useRouter } from "next/navigation";
import { dmSans } from "@/app/layout";
import styles from "./SolutionContentSection.module.css";

export default function SolutionContentSection({
  subtitle,
  title,
  description,
  solutionsTitle,
  solutions,
  image,
  bottomDescription,
  reverse = false,
}) {
  const router = useRouter();

  return (
    <section
      className={styles.sectionContainer}
      style={{ backgroundColor: reverse ? "var(--white)" : "var(--grey-01)" }}
    >
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      {solutionsTitle && (
        <h4 className={styles.solutionsTitle}>{solutionsTitle}</h4>
      )}

      <div
        className={styles.contentGrid}
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className={styles.solutionsList}>
          {solutions?.map((item, index) => (
            <div key={index} className={styles.solutionItem}>
              <div className={styles.iconWrapper}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L3 7V12C3 17.25 6.75 22 12 23C17.25 22 21 17.25 21 12V7L12 2Z"
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className={styles.solutionText}>{item}</span>
            </div>
          ))}
        </div>
        {image && (
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} />
          </div>
        )}
      </div>

      {bottomDescription && (
        <p className={styles.bottomDescription}>{bottomDescription}</p>
      )}

      <button
        onClick={() => router.push("/contact")}
        className={`${dmSans.className} ${styles.ctaButton}`}
      >
        Let&apos;s Talk
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
    </section>
  );
}

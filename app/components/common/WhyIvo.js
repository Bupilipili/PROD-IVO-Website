"use client";
import { useRouter } from "next/navigation";
import { dmSans } from "@/app/layout";
import styles from "./WhyIvo.module.css";

export default function WhyIvo({ subtitle, title, description, cards }) {
  const router = useRouter();
  return (
    <section className={styles.whyIvoContainer}>
      <div className={styles.contentWrapper}>
        <h5 className={styles.subtitle} data-aos="fade-right">
          {subtitle}
        </h5>
        <h2 className={styles.title} data-aos="fade-up">
          {title}
        </h2>
        {description && (
          <p className={styles.description} data-aos="fade-up">
            {description}
          </p>
        )}
        <div className={styles.cardsContainer} data-aos="fade-up">
          {cards?.map((card, index) => (
            <div key={index} className={styles.card}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/contact")}
          className={`${dmSans.className} ${styles.ctaButton}`}
          data-aos="fade-up"
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
      </div>
    </section>
  );
}

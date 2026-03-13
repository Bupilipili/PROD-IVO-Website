"use client";
import styles from "./BestService.module.css";

export default function BestService({ title, description }) {
  return (
    <section className={styles.bestServiceContainer}>
      <h2 className={styles.title} data-aos="fade-up">
        {title || "We Always Provide The Best Service"}
      </h2>
      <p className={styles.description} data-aos="fade-up">
        {description}
      </p>
      <div className={styles.logosContainer} data-aos="fade-up">
        <div className={styles.logoCard}>
          <img src="/certifications/iso-9001.webp" alt="ISO 9001 Certification" />
        </div>
        <div className={styles.logoCard}>
          <img src="/certifications/iso-9001-badge.webp" alt="ISO 9001 Badge" />
        </div>
        <div className={styles.logoCard}>
          <img src="/certifications/iso-27001.webp" alt="ISO 27001 Certification" />
        </div>
        <div className={styles.logoCard}>
          <img src="/certifications/iso-27001-badge.webp" alt="ISO 27001 Badge" />
        </div>
        <div className={styles.logoCard}>
          <img src="/certifications/hl7.webp" alt="HL7 International" />
        </div>
      </div>
    </section>
  );
}

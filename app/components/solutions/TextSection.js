"use client";
import styles from "./TextSection.module.css";

export default function TextSection({ title, description }) {
  return (
    <section className={styles.textSection}>
      {title && <h5 data-aos="fade-up">{title}</h5>}
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        data-aos="fade-up"
      />
    </section>
  );
}

import { infoData } from "../../../data/aboutUs";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={styles.infoSectionContainer}>
      <img
        className={styles.infoSectionImage}
        data-aos="fade-up"
        src="/about/about_01.webp"
        alt="About Us"
      />
      <div className={styles.rightSection}>
        {infoData.map((info) => (
          <div
            key={info.title}
            className={styles.infoSectionTextElement}
            data-aos="fade-up"
          >
            <h2 className={styles.infoSectionHeader}>{info.title}</h2>
            <p className={styles.infoSectionDescription}>{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import Heading from "./Heading";
import styles from "./PageTitleSection.module.css";

export default function PageTitleSection({
  title,
  subtitle,
  subtext,
  titleWidth,
}) {
  return (
    <section className={styles.pageTitleSection}>
      <h5 data-aos="fade-up">{subtitle}</h5>
      <Heading style={{ maxWidth: titleWidth, zIndex: "100" }}>{title}</Heading>
      <p data-aos="fade-up">{subtext}</p>
      <img
        src="/shapes/home-ellipse-1.svg"
        alt=""
        className={styles.ellipse1}
        data-aos="fade-down"
      />
      <img
        src="/shapes/home-ellipse-2.svg"
        alt=""
        className={styles.ellipse2}
        data-aos="fade-up"
      />
      <img
        src="/shapes/home-ellipse-3.svg"
        alt=""
        className={styles.ellipse3}
        data-aos="fade-left"
      />
    </section>
  );
}

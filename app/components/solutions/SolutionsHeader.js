import styles from "./SolutionsHeader.module.css";

export default function SolutionsHeader({ title }) {
  return (
    <section className={styles.solutionHeader}>
      <h5 data-aos="fade-up">About</h5>
      <h1 data-aos="fade-up">{title}</h1>
      <img
        src="/shapes/ellipse-1.svg"
        alt=""
        className={styles.ellipse1}
        data-aos="fade-down"
      />
      <img
        src="/shapes/ellipse-2.svg"
        alt=""
        className={styles.ellipse2}
        data-aos="fade-up"
      />
      <img
        src="/shapes/ellipse-3.svg"
        alt=""
        className={styles.ellipse3}
        data-aos="fade-up"
      />
    </section>
  );
}

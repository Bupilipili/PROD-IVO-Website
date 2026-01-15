import styles from "./Heading.module.css";

export default function Heading({ children, style = {} }) {
  return (
    <h1 className={styles.heading} style={style} data-aos="fade-up">
      {children}
    </h1>
  );
}

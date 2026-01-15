import styles from "./CardWImage.module.css";

export default function CardWImage({ src, alt, text, header }) {
  return (
    <div className={styles.cardContainer} data-aos="fade-up">
      <img src={src} alt={alt} />
      <div className={styles.textContainer}>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

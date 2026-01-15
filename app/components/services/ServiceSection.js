import styles from "./ServiceSection.module.css";

export default function ServiceSection({ title, imageUrl, points, bgColor }) {
  return (
    <section className={styles.serviceSection}>
      <h2 data-aos="fade-up">{title}</h2>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} data-aos="fade-up" />
        </div>
        <div className={styles.pointsContainer}>
          {points?.map((point) => (
            <div
              key={point.id}
              className={`${styles.point} point`}
              data-aos="fade-up"
            >
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .point {
          background: var(--white);
          transition: all 0.4s ease;
        }
        .point:hover {
          background: ${bgColor};
        }
        @media (max-width: 768px) {
          .point {
            background: ${bgColor};
          }
        }
      `}</style>
    </section>
  );
}

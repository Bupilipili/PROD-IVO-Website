import styles from "./ServicesPoints.module.css";

export default function ServicesPoints() {
  return (
    <section className={styles.solutionPoints}>
      <h2 className={styles.title} data-aos="fade-right">
        Our Service Process for Seamless Delivery
      </h2>
      <div className={styles.pointsContainer}>
        {servicePoints.map((data, index) => (
          <div
            key={data.id}
            className={styles.point}
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 300}
          >
            <h2>{index + 1}</h2>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <img
        src="/shapes/service-ellipse-1.svg"
        alt=""
        className={styles.ellipse1}
        data-aos="fade-down"
      />
      <img
        src="/shapes/service-ellipse-2.svg"
        alt=""
        className={styles.ellipse2}
        data-aos="fade-up"
      />
      <img
        src="/shapes/service-ellipse-3.svg"
        alt=""
        className={styles.ellipse3}
        data-aos="fade-up"
        data-aos-offset={0}
      />
    </section>
  );
}

const servicePoints = [
  {
    id: "1",
    title: "Needs Assessment",
    text: "We conduct comprehensive business assessments to determine the best solutions for your needs.",
  },
  {
    id: "2",
    title: "Solution Design and Implementation",
    text: "We design and implement custom solutions tailored to your specific needs.",
  },
  {
    id: "3",
    title: "Monitoring and Support",
    text: "Our experts provide ongoing monitoring and support to ensure your systems run smoothly and efficiently.",
  },
];

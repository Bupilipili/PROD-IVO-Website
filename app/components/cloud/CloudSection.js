import styles from "./CloudSection.module.css";

export default function CloudSection({ key, data }) {
  return (
    <section className={styles.cloudSection} key={key}>
      <img src={data.img} alt={data.title} data-aos='fade-up' />
      <div data-aos='fade-up'>
        <h2 className={styles.titleSection}>{data.title}</h2>
        {data.description.split("\n").map((line, index) => (
          <p key={index} className={styles.descriptionSection}>
            {line}
            <br />
          </p>
        ))}
      </div>
    </section>
  );
}

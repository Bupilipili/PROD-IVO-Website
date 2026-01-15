import ContactForm from "./ContactForm";
import styles from "./hero.module.css";

export default function ContactHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer} data-aos="fade-right">
        <h5>CONTACT</h5>
        <h2>Let&apos;s start a project together</h2>
        <p>
          We see an interconnected world where technology has the power to bring
          together people, data and things For businesses, connection matters
          now more than ever and we strive to help you continue ot operate and
          adapt the way you work. Let us know how we can help you.
        </p>
      </div>
      <div
        className={styles.formContainer}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <ContactForm />
      </div>
    </div>
  );
}

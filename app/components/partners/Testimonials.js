import { testimonials } from "@/data/testimonialData";
import Heading from "../common/Heading";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <div className={styles.testimonialContainer}>
      <Heading>
        See What <span>Our Clients</span> Say About Us
      </Heading>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <h5>{testimonial.name}</h5>
            <p className={styles.position}>
              {testimonial.position}, {testimonial.company}
            </p>
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

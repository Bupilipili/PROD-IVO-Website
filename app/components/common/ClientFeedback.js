"use client";
import { useState } from "react";
import styles from "./ClientFeedback.module.css";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Business Man",
    rating: 4,
    review:
      "Excellent service! The team was punctual, thorough, and delivered outstanding results. Highly recommend for anyone needing a reliable and detailed IT solutions partner.",
    image: "/testimonials/testimonial-1.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "IT Director",
    rating: 5,
    review:
      "IVO Solutions transformed our infrastructure completely. Their expertise in cloud solutions and cybersecurity gave us the confidence to scale our operations securely.",
    image: "/testimonials/testimonial-2.webp",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    rating: 5,
    review:
      "The team at IVO Solutions demonstrated exceptional technical knowledge and professionalism. They delivered our project on time and exceeded our expectations.",
    image: "/testimonials/testimonial-3.webp",
  },
];

export default function ClientFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className={styles.feedbackContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title} data-aos="fade-right">
          Feedback from our clients
        </h2>
        <p className={styles.description} data-aos="fade-up">
          Read testimonials from our satisfied clients. See how our services
          have made a difference in their businesses.
        </p>
        <div className={styles.navigation} data-aos="fade-up">
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonActive}`}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.rightSection} data-aos="fade-left">
        <div className={styles.testimonialCard}>
          <div className={styles.cardHeader}>
            <div className={styles.avatar}>
              <img src={current.image} alt={current.name} />
            </div>
            <div className={styles.cardInfo}>
              <h4 className={styles.clientName}>{current.name}</h4>
              <p className={styles.clientRole}>{current.role}</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < current.rating
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <span className={styles.quoteIcon}>&ldquo;</span>
          </div>
          <p className={styles.reviewText}>{current.review}</p>
        </div>
      </div>
    </section>
  );
}

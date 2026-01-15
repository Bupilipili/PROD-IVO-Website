"use client";
import Link from "next/link";
import Heading from "./Heading";
import { dmSans } from "@/app/layout";
import styles from "./WorkTogether.module.css";

export default function WorkTogether() {
  return (
    <section className={styles.workTogetherContainer}>
      <Heading>
        Let&apos;s Work <span>Together</span>
      </Heading>
      <p data-aos="fade-up">
        Have any idea or project for in your mind call us or schedule a
        appointment.
      </p>
      <Link href="/contact">
        <button
          className={`${dmSans.className} main-button`}
          data-aos="fade-up"
        >
          Let&apos;s Talk
        </button>
      </Link>
    </section>
  );
}

"use client";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";
import { dmSans } from "@/app/layout";

export default function BackButton({ backUrl }) {
  const router = useRouter();
  return (
    <section className={styles.backButton} data-aos="fade-up">
      <button
        onClick={() => router.push(backUrl)}
        className={`${dmSans.className} outlined-button`}
      >
        <img src="/icons/arrow-left.svg" alt="" />
        Go Back
      </button>
    </section>
  );
}

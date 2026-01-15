"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (["/", "/portal/login"].includes(pathname)) {
    return null;
  }

  return (
    <button className={styles.whatsappButton} data-aos="fade-up">
      <Link href="https://wa.me/+2550743001236" target="_blank">
        <img src="/icons/whatsapp_blue.svg" alt="whatsapp icon" />
      </Link>
    </button>
  );
}

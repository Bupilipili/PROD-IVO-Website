"use client";

import LoginForm from "./LoginForm";
import { ArrowLeft as ArrowLeftIcon } from "react-feather";
import { useRouter } from "next/navigation";
import styles from "./LoginBanner.module.css";

export default function LoginBanner() {
  const router = useRouter();

  return (
    <div className={styles.loginBanner}>
      <button
        className={styles.backButton}
        onClick={() => router.replace("/")}
        aria-label="Back"
      >
        <ArrowLeftIcon size="1.6rem" />
      </button>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}

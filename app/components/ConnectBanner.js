// components/ConnectBanner.jsx
import Image from "next/image"
import styles from "./ConnectBanner.module.css"

export default function ConnectBanner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/banners/Connect.png"     // your “Let’s Connect” hero graphic
        alt="Connect banner"
        fill
        className={styles.image}
        priority
      />
    </div>
  )
}

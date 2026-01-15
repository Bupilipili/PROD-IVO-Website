import styles from "./BlogContent.module.css";
import { dmSans } from "@/app/layout";

export default function BlogContent({ content }) {
  return (
    <div
      className={`${dmSans.className} ${styles.blogContent}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

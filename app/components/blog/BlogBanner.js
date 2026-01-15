import Link from "next/link";
import styles from "./BlogBanner.module.css";

export default function BlogBanner(props) {
  return (
    <div className={styles.blogBannerContainer}>
      <img src={props.imageURL} alt={props.Title} />
      <h3>{props.Title}</h3>
      <p>
        <Link href={props.AuthorPortfolioLink} target="_blank">
          {props.Author}
        </Link>
        , {props.PublishedDate}
      </p>
    </div>
  );
}

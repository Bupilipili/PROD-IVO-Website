import Link from "next/link";
import styles from "./BlogSection.module.css";

export default function BlogSection({ blogData }) {
  console.log(blogData);
  return (
    <div className={styles.blogSectionContainer}>
      {blogData &&
        blogData?.map((blog) => (
          <div className={styles.blog} key={blog.id}>
            <Link href={`/blog?slug=${blog.slug}`}>
              <img src={blog.imageURL} alt={blog.Title} />
              <h3>{blog.Title}</h3>
            </Link>
            <p>
              <Link href={blog.AuthorPortfolioLink}>{blog.Author}</Link>,{" "}
              {blog.PublishedDate}
            </p>
            <Link className={styles.readMore} href={`/blog?slug=${blog.slug}`}>
              Read More
            </Link>
          </div>
        ))}
    </div>
  );
}

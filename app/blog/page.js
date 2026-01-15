"use client";
import { useCallback, useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { getSingleBlog } from "../../api/blogs";
import Loader from "@/app/components/blog/Loader";
import BackButton from "../components/common/BackButton";
import BlogContent from "../components/blog/BlogContent";
import WorkTogether from "../components/common/WorkTogether";
import BlogBanner from "../components/blog/BlogBanner";

export default function BlogPage() {
  const [blogData, setBlogData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const fetchBlog = useCallback(async () => {
    setLoading(true);
    const blogSlug = searchParams.get("slug");
    console.log(blogSlug);
    const data = await getSingleBlog(blogSlug);
    if (!data) {
      redirect("/");
    } else {
      setBlogData(data);
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  if (isLoading) {
    return (
      <div className="blogs-loader">
        <Loader />
      </div>
    );
  }

  return (
    <main className="body-wrapper">
      <BackButton backUrl="/blogs" />
      {/* <BackButton backUrl="/" /> */}
      <BlogBanner {...blogData} />
      <BlogContent content={blogData?.Content} />
      <WorkTogether />
    </main>
  );
}

import PocketBase from "pocketbase";
import {
  NEXT_PUBLIC_PB_EMAIL,
  NEXT_PUBLIC_PB_PASSWORD,
  NEXT_PUBLIC_PB_URL,
} from "@/constants";

const pb = new PocketBase(NEXT_PUBLIC_PB_URL);

function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(inputDate);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

function getImageUrl(record) {
  return `${NEXT_PUBLIC_PB_URL}/api/files/${record.collectionId}/${record.id}/${record.FeaturedImage}`;
}

export default async function getAllBlogsData() {
  if (pb && pb.authStore && !pb.authStore.isValid)
    await pb.admins.authWithPassword(
      NEXT_PUBLIC_PB_EMAIL,
      NEXT_PUBLIC_PB_PASSWORD
    );
  const records = await pb.collection("Blogs").getFullList();
  records.forEach((record) => {
    record.PublishedDate = formatDate(record.PublishedDate);
    record.imageURL = getImageUrl(record);
  });

  records.sort((a, b) => {
    return new Date(b.PublishedDate) - new Date(a.PublishedDate);
  });
  return records;
}

export async function getSingleBlog(blogSlug) {
  if (pb && pb.authStore && !pb.authStore.isValid)
    await pb.admins.authWithPassword(
      NEXT_PUBLIC_PB_EMAIL,
      NEXT_PUBLIC_PB_PASSWORD
    );
  const record = await pb
    .collection("Blogs")
    .getFirstListItem(`slug="${blogSlug}"`);
  return {
    ...record,
    PublishedDate: formatDate(record.PublishedDate),
    imageURL: getImageUrl(record),
  };
}

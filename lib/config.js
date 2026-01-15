// lib/config.js
const raw = process.env.NEXT_PUBLIC_API_URL;

// fail fast with a helpful message if it’s missing or malformed
if (!raw || !/^https?:\/\/.+/i.test(raw)) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is missing or invalid. Set it in .env.local, e.g. NEXT_PUBLIC_API_URL=http://154.72.86.58:4000"
  );
}

// normalize (remove a trailing slash)
export const API_URL = raw.replace(/\/$/, "");

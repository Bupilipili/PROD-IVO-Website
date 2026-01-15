// app/components/MarkdownClient.js

"use client";

import ReactMarkdown from "react‑markdown";
import remarkGfm    from "remark-gfm";

export default function MarkdownClient({ content }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

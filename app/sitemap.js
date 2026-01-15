export default function sitemap() {
  return [
    {
      url: "https://www.ivosolutions.co.tz/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.ivosolutions.co.tz/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://www.ivosolutions.co.tz/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: "https://www.ivosolutions.co.tz/blogs",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: "https://www.ivosolutions.co.tz/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

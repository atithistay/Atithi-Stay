import samplePG from "./samplePg";

const baseUrl = "https://atithistaymumbai.com";

export default function sitemap() {
  let today = new Date();
  const lastModified = new Date(today.getFullYear(), today.getMonth(), 1)
    .toISOString()
    .split("T")[0];

  const fifteenthOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 15)
    .toISOString()
    .split("T")[0];

  const firstOfThisYear = new Date(today.getFullYear(), 0, 1)
    .toISOString()
    .split("T")[0];

  const pgEntries = samplePG.map((pg) => ({
    url: `${baseUrl}/pg/${pg._id}`,
    lastModified: fifteenthOfThisMonth,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about#connectus`,
      lastModified: firstOfThisYear,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about#ourteam`,
      lastModified: firstOfThisYear,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...pgEntries,
  ];
}

// The base URL of your website
const baseURL = "https://www.prismolix.com";

// Fetches data from a given WordPress API endpoint
async function fetchData(apiPath) {
  try {
    const response = await fetch(
      `https://api.prismolix.com/wp-json/wp/v2/${apiPath}?per_page=100`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch ${apiPath}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
}

export default async function sitemap() {
  // Fetch all dynamic content in parallel
  const [posts, projects, services] = await Promise.all([
    fetchData("service"),
    fetchData("portfolio"),
    fetchData("posts"),
  ]);

  // Create URLs for each dynamic content type
  const postEntries = posts.map(({ slug, modified }) => ({
    url: `${baseURL}/blogs/${slug}`,
    lastModified: new Date(modified),
  }));

  const projectEntries = projects.map(({ slug, modified }) => ({
    url: `${baseURL}/projects/${slug}`,
    lastModified: new Date(modified),
  }));

  const serviceEntries = services.map(({ slug, modified }) => ({
    url: `${baseURL}/services/${slug}`,
    lastModified: new Date(modified),
  }));

  // Define your static routes
  const staticRoutes = [
    { url: baseURL, lastModified: new Date(), priority: 1.0 },
    { url: `${baseURL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseURL}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseURL}/projects`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseURL}/blogs`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseURL}/howItWorks`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseURL}/contact`, lastModified: new Date(), priority: 0.8 },
  ];

  // Combine and return all sitemap entries
  return [
    ...staticRoutes,
    ...postEntries,
    ...projectEntries,
    ...serviceEntries,
  ];
}

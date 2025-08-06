// Fetch all portfolio items (case studies)
export const fetchAllBlogs = async () => {
  try {
    const response = await fetch(
      "https://prismolix.wasmer.app/wp-json/wp/v2/portfolio?_embed&per_page=10",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch portfolio:", response.status);
      return [];
    }

    const portfolio = await response.json();
    return portfolio;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return [];
  }
};

// Fetch a single portfolio item by slug
export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://prismolix.wasmer.app/wp-json/wp/v2/portfolio?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch portfolio item:", response.status);
      return null;
    }

    const portfolio = await response.json();
    return portfolio.length > 0 ? portfolio[0] : null;
  } catch (error) {
    console.error("Error fetching portfolio item:", error);
    return null;
  }
};

// Helper function to extract dynamic content from portfolio
export const extractBlogData = (portfolio) => {
  // Extract categories and tags
  const categories = portfolio._embedded?.['wp:term']?.[0] || [];
  const tags = portfolio._embedded?.['wp:term']?.[1] || [];
  
  // Extract ACF fields (these are the structured data fields)
  const acf = portfolio.acf || {};
  
  // Use ACF fields if available, otherwise fallback to content parsing
  const clientType = acf.client_type || "Creative Agency";
  const servicesProvided = acf.services_provided || "UI/UX Design, Dev (Headless WordPress)";
  const challenge = acf.challenge || "Agency struggling to keep up with demand — high-volume landing pages, inconsistent freelance help, and slipping deadlines";
  
  return {
    id: portfolio.id,
    title: portfolio.title?.rendered || "Portfolio Title",
    content: portfolio.content?.rendered || "",
    excerpt: portfolio.excerpt?.rendered || "",
    slug: portfolio.slug,
    featuredImage: portfolio._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    clientType,
    challenge,
    servicesProvided,
    tags: tags.map(tag => tag.name),
    categories: categories.map(cat => cat.name),
    date: portfolio.date
  };
};

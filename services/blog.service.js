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
  // Challenge description (supports alternate ACF keys)
  const portfolioChallengesRaw = acf.portfolio_challanges || acf.portfolio_challenges || null;
  let challenge = acf.challenge || "";
  let challengePoints = [];
  if (!challenge && portfolioChallengesRaw) {
    if (typeof portfolioChallengesRaw === 'string') {
      challenge = portfolioChallengesRaw;
    } else if (Array.isArray(portfolioChallengesRaw)) {
      // If it's an array, assume it's a list of points
      challengePoints = portfolioChallengesRaw
        .map((item) => (typeof item === 'string' ? item : item?.point || item?.title || item?.text))
        .filter(Boolean);
    } else if (typeof portfolioChallengesRaw === 'object') {
      // Try common shapes
      challenge = portfolioChallengesRaw.description || portfolioChallengesRaw.text || challenge;
      const pts =
        portfolioChallengesRaw.points ||
        portfolioChallengesRaw.key_points ||
        portfolioChallengesRaw.items ||
        [];
      if (Array.isArray(pts)) {
        challengePoints = pts
          .map((p) => (typeof p === 'string' ? p : p?.point || p?.title || p?.text))
          .filter(Boolean);
      }
    }
  }
  if (!challenge) {
    challenge = "Agency struggling to keep up with demand — high-volume landing pages, inconsistent freelance help, and slipping deadlines";
  }
  const industry = acf.industry || (categories[0]?.name ?? "Case Study");
  const startDate = acf.start_date || null;
  const endDate = acf.end_date || null;

  // Gallery: normalize to array of items with type image|video and url/thumbnail
  const gallery = Array.isArray(acf.gallery)
    ? acf.gallery.map((item) => {
        const mime = item?.mime_type || item?.type;
        const isVideo = (mime || "").includes("video");
        const url = item?.url || item?.sizes?.medium_large || item?.sizes?.large;
        const thumb = item?.sizes?.thumbnail || url;
        return {
          type: isVideo ? "video" : "image",
          url: typeof url === 'string' ? url.replace('http://', 'https://') : url,
          thumbnail: typeof thumb === 'string' ? thumb.replace('http://', 'https://') : thumb,
          width: item?.width,
          height: item?.height,
          title: item?.title || "",
        };
      })
    : [];

  // Technologies used: { name, imageUrl }
  const technologiesUsed = Array.isArray(acf.technologies_used)
    ? acf.technologies_used.map((tech) => ({
        name: tech?.technologies_name || "",
        imageUrl: tech?.technologies_image?.url
          ? tech.technologies_image.url.replace('http://', 'https://')
          : null,
        width: tech?.technologies_image?.width || 24,
        height: tech?.technologies_image?.height || 24,
      }))
    : [];

  // Methods used: array of strings
  const methodsUsed = Array.isArray(acf.methods_used)
    ? acf.methods_used.map((m) => m?.method_used).filter(Boolean)
    : [];

  // Process: array of { number, title, description }
  const process = Array.isArray(acf.process)
    ? acf.process.map((p, idx) => ({
        number: String(idx + 1).padStart(2, '0'),
        title: p?.title || "",
        description: p?.description || "",
      }))
    : [];

  const description = acf.description || "";
  const keyPoints = Array.isArray(acf.key_points)
    ? acf.key_points.map((kp) => kp?.point).filter(Boolean)
    : [];
  
  return {
    id: portfolio.id,
    title: portfolio.title?.rendered || "Portfolio Title",
    content: portfolio.content?.rendered || "",
    excerpt: portfolio.excerpt?.rendered || "",
    slug: portfolio.slug,
    featuredImage: portfolio._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    clientType,
    challenge,
    challengePoints,
    servicesProvided,
    tags: tags.map(tag => tag.name),
    categories: categories.map(cat => cat.name),
    date: portfolio.date,
    industry,
    startDate,
    endDate,
    gallery,
    technologiesUsed,
    methodsUsed,
    process,
    description,
    keyPoints,
  };
};

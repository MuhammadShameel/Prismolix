// Fetch all services
export const fetchAllServices = async () => {
  try {
    const response = await fetch(
      "https://prismolix.wasmer.app/wp-json/wp/v2/service?_embed&per_page=10",
      {
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

// Fetch a single service by its slug
export const fetchServiceBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://prismolix.wasmer.app/wp-json/wp/v2/service?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) return null;
    const services = await response.json();
    return services.length > 0 ? services[0] : null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

// Helper function to extract and format service data
export const extractServiceData = (service) => {
  if (!service) return null;

  const acf = service.acf || {};

  // CORRECTED: Mapped to the exact field names from your JSON data
  return {
    id: service.id,
    slug: service.slug,
    title: service.title?.rendered || "Untitled Service",
    content: service.content?.rendered || "",
    featuredImage:
      service._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,

    // ACF Fields
    duration: acf.duration || "",
    startingPrice: acf.starting_price || "",
    secondTitle: acf.second_title || "",
    secondParagraph: acf.second_paragraph || "",

    keyPoints: Array.isArray(acf.key_points)
      ? acf.key_points.map((item) => item.point).filter(Boolean)
      : [],

    deliverables: Array.isArray(acf.deliver_cards) // Corrected from 'what_we_deliver'
      ? acf.deliver_cards.map((item) => ({
          title: item.title || "",
          content: item.content || "",
          keyPoints: Array.isArray(item.key_points)
            ? item.key_points.map((subItem) => subItem.points).filter(Boolean)
            : [],
        }))
      : [],

    whyChooseUs: {
      title: acf.title || "", // This is the title for the "Why Choose Us" section
      cards: Array.isArray(acf.service_detail_cards) // Corrected from nested object
        ? acf.service_detail_cards.map((card) => ({
            title: card.title || "",
            paragraph: card.paragraph || "",
          }))
        : [],
    },
  };
};

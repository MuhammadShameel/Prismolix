// Fetch all blog posts
export const fetchAllPosts = async () => {
  try {
    const response = await fetch(
      "https://api.prismolix.com/wp-json/wp/v2/posts?_embed&per_page=10",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch posts:", response.status);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch a single blog post by its slug
export const fetchPostById = async (slug) => {
  try {
    const response = await fetch(
      `https://api.prismolix.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 },
      }
    );
    console.log("Fetching post with slug:", slug);

    if (!response.ok) {
      console.error("Failed to fetch post:", response.status);
      return null;
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

// Helper function to extract and format the essential blog data
export const extractPostData = (post) => {
  if (!post) return null;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || "Untitled Post",
    excerpt: post.excerpt?.rendered || "",
    content: post.content?.rendered || "",
    date: post.date,
    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  };
};

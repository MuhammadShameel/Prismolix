import React from "react";
import Image from "next/image";
import Link from "next/link";

import Shape from "../../public/assets/images/blogShape.png";
import CallSchedule from "../components/CallSchedule";
import { fetchAllPosts } from "../../services/blog.service"; // <-- UPDATED IMPORT
import FooterMarquee from "../components/FooterMarquee";

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const metadata = {
  title: "Prismolix Blog • Agency Growth, Design Tips, Dev Trends",
  description:
    "Read insights, best practices & trends for agency growth—from design & development to project management & UX strategy. Stay ahead with expert tips from Prismolix.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Prismolix Blog • Agency Growth, Design Tips, Dev Trends",
    description:
      "Read insights, best practices & trends for agency growth—from design & development to project management & UX strategy. Stay ahead with expert tips from Prismolix.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prismolix Blog • Agency Growth, Design Tips, Dev Trends",
    description:
      "Read insights, best practices & trends for agency growth—from design & development to project management & UX strategy. Stay ahead with expert tips from Prismolix.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

// Convert the component to an async Server Component
const BlogsPage = async () => {
  // Fetch the blog posts from your new service
  const posts = await fetchAllPosts();

  return (
    <div className="relative">
      {/* ... Your Hero Section and other static content ... */}
      <Image
        className="absolute w-full h-auto top-0 right-0 -z-1"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={Shape}
        alt="Abstract 3D hero image"
        className="absolute right-0 top-0"
      />
      <section className="relative lg:hero-section pt-[350px] overflow-hidden">
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            <span className="fs-26 color-primary-dark">[Our Blog]</span>
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Insights That Power{" "}
              <span className="text-overlay text-white px-2">Agencies</span>
            </h1>
            <p className="text-base max-w-3xl">
              We don’t just build for agencies — we share what we learn along
              the way.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-5 md:px-4 px-3 my-lg !mb-0">
        <div className="container mx-auto">
          {/* Main flex container: column on mobile, row on large screens */}
          <div className="overflow-hidden rounded-3xl bg-light-purple flex flex-col lg:items-center gap-0 lg:flex-row lg:gap-12">
            {/* Image Column */}
            <div className="lg:w-2/6">
              <Image
                src="/assets/images/section-shape.png"
                alt="Abstract 3D shape"
                width={590}
                height={590} // Use dimensions for a 1:1 aspect ratio
                className="h-auto w-full max-w-md lg:max-w-none"
              />
            </div>

            {/* Text Content Column */}
            <div className="w-full lg:w-4/6 p-5 sm:p-8 md:p-12 lg:p-16">
              <span className="font-medium color-primary-dark fs-26 md:text-xl">
                [Prismolix Blog]
              </span>

              <h2 className="mt-2 mb-4 font-bold leading-tight ">
                Ideas, Systems, and Stories That Drive Growth Agency Growth
                Shouldn't Mean Burnout
              </h2>

              <p className="mb-4 md:text-lg">
                The Prismolix Blog is where agency owners, creative directors,
                and growth teams find practical advice on scaling design and
                development. We cover white-label execution strategies, UX/UI
                best practices, tech stack deep-dives, and leadership lessons —
                all written with one goal: to help you focus on growth while we
                handle the heavy lifting.
              </p>

              <button className="btn btn-primary mt-2 w-full sm:w-auto sm:self-start">
                Let's Talk Scalability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="fs-26 color-primary-dark">[Blogs]</span>
            <h2 className="lg:leading-20 leading-10 tracking-tight max-w-2xl text-center">
              From the Prismolix Journal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Map over the fetched posts */}
            {posts.map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/assets/images/blogFeature.png";

              return (
                <div
                  key={post.id}
                  className="relative flex flex-col bg-light-purple rounded-[30px] lg:p-8 md:p-7 p-5 overflow-hidden"
                >
                  <Image
                    src={featuredImage}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover mb-6 rounded-[20px]"
                    alt={post.title.rendered}
                  />
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <span className="bg-white px-2.5 py-[7px] rounded-full text-sm">
                        {formatDate(post.date)}
                      </span>
                      <h4
                        className="mt-4 font-bold"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                      <div
                        className="mt-2 line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </div>
                    <div className="pt-5 mt-auto">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="font-bold color-primary-dark"
                      >
                        <p>Continue Reading</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallSchedule />
      <FooterMarquee />
    </div>
  );
};

export default BlogsPage;

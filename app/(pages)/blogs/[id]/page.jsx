import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../../../../public/assets/images/blog-detail-bg.png";
import CallSchedule from "../../../components/CallSchedule";
import {
  fetchPostById,
  extractPostData,
} from "../../../../services/blog.service";
import * as cheerio from "cheerio";
import "../../../styles/content.css";
import FooterMarquee from "../../../components/FooterMarquee";
import { notFound } from "next/navigation";

const generateTOCAndContent = (htmlContent) => {
  if (!htmlContent) {
    return { toc: [], content: "" };
  }
  const $ = cheerio.load(htmlContent);
  const toc = [];

  $("h2, h3").each((_, element) => {
    const title = $(element).text();
    const id = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    $(element).attr("id", id);
    toc.push({
      id: `#${id}`,
      title: title,
      tag: element.tagName,
    });
  });

  return { toc, content: $.html() };
};

const page = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const post = await fetchPostById(id);
  if (!post) {
    notFound();
  }
  // Extract the data
  const blogData = extractPostData(post);

  // Generate ToC and get the modified content with IDs
  const { toc, content } = generateTOCAndContent(blogData.content);

  return (
    <div>
      <section className="lg:px-5 md:px-4 px-3 my-lg !mb-0">
        <div className="container mx-auto">
          <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
            <div className="absolute inset-0 z-[-1]">
              <Image
                src={bgImg}
                alt="A modern turntable playing a record"
                fill
                style={{ objectFit: "cover" }}
                quality={90}
                priority
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
              <span className="fs-26  color-primary-dark">[Blog Detail]</span>
              <h1
                className="text-center leading-[95%] max-w-5xl"
                dangerouslySetInnerHTML={{ __html: blogData.title }}
              />

              <div
                className="text-center max-w-4xl"
                dangerouslySetInnerHTML={{ __html: blogData.excerpt }}
              />
            </div>
          </div>
        </div>
      </section>
      <main className="container mx-auto lg:px-5 md:px-4 px-3 ">
        {/* Blog Post Hero Image */}
        <div className="mb-8 md:mb-12">
          <Image
            src={blogData.featuredImage || "/assets/images/blogDetail.png"}
            alt={blogData.title}
            width={1200}
            height={600}
            unoptimized={true}
            priority
            className="w-full max-h-[800px] h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Main Layout: Table of Contents + Article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          {/* Table of Contents (Sticky Sidebar) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 h-fit mb-8 lg:mb-0">
            <h4 className="text-xl font-bold  mb-4">Table of Content</h4>
            <nav>
              <ul className="space-y-2 lg:border-r border-gray-300 pr-4 lg:h-100">
                {toc.map((item, index) => (
                  <li
                    key={`${item.id}-${index}`} // Key is now guaranteed to be unique
                    className="border-b last:border-b-0 border-gray-300 pb-2"
                  >
                    <Link
                      href={item.id}
                      className="block font-medium hover:text-purple-700 transition-colors duration-200 border-l-2 border-transparent hover:border-purple-600 pl-4"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Blog Article Content */}
          <article className="lg:col-span-9">
            <div className="prose prose-lg max-w-none prose-indigo">
              {/* <h1>{blogPost.title}</h1> */}

              <section
                // key={section.id}
                // id={section.id.substring(1)}
                className="scroll-mt-24 lg:mb-0 mb-5"
              >
                <div
                  className="article-content prose prose-lg max-w-none prose-h2:scroll-mt-24 prose-h3:scroll-mt-24"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                {/* <h4>{section.title}</h4>
                <p key={index}>{paragraph}</p> */}
              </section>
            </div>
          </article>
        </div>
      </main>
      <CallSchedule />
      <FooterMarquee />
    </div>
  );
};

export default page;

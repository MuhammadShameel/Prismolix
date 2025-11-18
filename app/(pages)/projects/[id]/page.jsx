import React from "react";
import Image from "next/image";
import {
  fetchBlogBySlug,
  extractBlogData,
} from "../../../../services/projects.service.js";
import {
  formatStringEncoding,
  replaceHTMLtags,
} from "../../../../helper/helper.js";

// Import components
import CaseStudySlider from "../../../components/CaseStudySlider"; // Import the new client component
import FooterMarquee from "../../../components/FooterMarquee.jsx";
import ToolsMarquee from "../../../components/ToolsMarquee.jsx";
import CallSchedule from "../../../components/CallSchedule.jsx";

// Import static assets
import bgImg from "../../../../public/assets/images/blog-detail-bg.png";

export async function generateMetadata({ params }) {
  const { id: slug } = await params;
  const portfolioData = await fetchBlogBySlug(slug);
  const project = portfolioData;

  if (!project) return {};

  return {
    title: formatStringEncoding(project.title.rendered),
    description: formatStringEncoding(
      replaceHTMLtags(project.excerpt.rendered)
    ),
    openGraph: {
      title: formatStringEncoding(project.title.rendered),
      description: formatStringEncoding(
        replaceHTMLtags(project.excerpt.rendered)
      ),
      // images: project.acf?.blog_slider_images?.length
      //   ? project.acf.blog_slider_images.map((img) => ({ url: img }))
      //   : undefined,
    },
  };
}

// Helper functions (can remain in this file)
const formatMonthYear = (input) => {
  if (!input) return "—";
  const normalized = input.includes("/")
    ? input.split("/").reverse().join("-")
    : input;
  const date = new Date(normalized);
  if (isNaN(date)) return input;
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
};

const diffInMonths = (start, end) => {
  if (!start || !end) return "—";
  const s = new Date(
    start.includes("/") ? start.split("/").reverse().join("-") : start
  );
  const e = new Date(
    end.includes("/") ? end.split("/").reverse().join("-") : end
  );
  if (isNaN(s) || isNaN(e)) return "—";
  const months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (months <= 0) return "< 1 Month";
  return months === 1 ? "1 Month" : `${months} Months`;
};

// The page is now an async Server Component
const Page = async ({ params }) => {
  const { id } = await params;
  const slug = id;
  let data = null;

  try {
    const portfolio = await fetchBlogBySlug(slug);
    if (!portfolio) throw new Error("Portfolio not found");
    data = extractBlogData(portfolio);
  } catch (err) {
    error = "Failed to load project data.";
    console.error(err);
  }

  // if (error) {
  //   return (
  //     <section className="text-center my-lg">
  //       <h1>Error</h1>
  //       <p>{error}</p>
  //     </section>
  //   );
  // }

  if (!data) {
    return (
      <section className="text-center my-lg">
        <h1>Project Not Found</h1>
        <p>The requested case study could not be found.</p>
      </section>
    );
  }
  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src={bgImg}
              alt="A modern turntable playing a record"
              fill 
              style={{ objectFit: "cover" }}
              quality={90}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
            <span className="fs-26  color-primary-dark">[Case Study]</span>
            <h1 className="text-center leading-[95%]">{data.title || "—"}</h1>
            <span
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: data.excerpt || data.content || "",
              }}
            />
          </div>
        </div>

        <CaseStudySlider
          gallery={data.gallery}
          featuredImage={data.featuredImage}
          title={data.title}
        />

        <div className="flex flex-col gap-5 mt-2.5">
          <div className="flex gap-1.5 mt-5 flex-wrap">
            {data?.tags?.length ? (
              data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-light-purple lg:px-5 md:px-4 px-3 py-2.5 rounded-full "
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="bg-light-purple px-5 py-2.5 rounded-full">
                Case Study
              </span>
            )}
          </div>

          <div className="bg-light-purple flex lg:flex-row flex-col lg:gap-7 gap-4 lg:px-10 md:px-7 px-5 py-6 rounded-[20px]">
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium fs-26">Category</span>
              <p>{data.industry || data.categories?.[0] || "—"}</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium fs-26">Time Taken</span>
              <p>{diffInMonths(data.startDate, data.endDate)}</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium fs-26">Start Date</span>
              <p>{formatMonthYear(data?.startDate)}</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium fs-26">Completed Date</span>
              <p>{formatMonthYear(data?.endDate)}</p>
            </div>
          </div>

          <div className="bg-light-purple flex lg:flex-row flex-col lg:items-center lg:px-10 md:px-7 px-5 py-6 rounded-[20px] lg:gap-10 gap-3">
            <span className="font-medium fs-26 ">Technologies Used</span>
            <ul className="flex lg:gap-10 gap-2.5">
              {(data?.technologiesUsed && data.technologiesUsed.length > 0
                ? data.technologiesUsed
                : [{ imageUrl: null }]
              ).map((tech, idx) => (
                <li
                  key={idx}
                  className="border-black/25 border p-3 rounded-full"
                >
                  {tech.imageUrl ? (
                    <div className="img-wrapper w-6 h-6">
                      <Image
                        src={tech.imageUrl}
                        alt={tech.name || "Tech"}
                        className="h-full w-full object-contain"
                        width={20}
                        height={20}
                      />
                    </div>
                  ) : (
                    <span className="block w-5 h-5 bg-black/40 rounded" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-light-purple flex flex-col lg:px-10 md:px-7 px-5 py-6 rounded-[20px] gap-12">
            <span className="font-medium fs-26 ">Methods Used</span>
            <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-[20px]">
              {(data?.methodsUsed?.length ? data.methodsUsed : ["—"]).map(
                (method, idx) => (
                  <div key={idx} className="lg:w-4/12 w-12/12">
                    <p className="font-medium w-full text-center py-2.5 scroll-px-24 rounded-full bg-[#C4B5FD] borer-r-2 border-gray-300 last:border-none">
                      {method}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-5">
            <div className="bg-light-purple lg:w-1/2 w-2/2 lg:px-10 md:px-7 px-5 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>The Challenge</h4>
              <p className="font-medium">{data?.description || "—"}</p>
              <ul className="flex flex-col">
                {(data?.keyPoints || []).map((kp, idx) => (
                  <li
                    key={idx}
                    className="flex lg:items-center gap-2.5 font-medium fs-26  border-b border-gray-400 last:border-none  py-5"
                  >
                    <div>
                      <svg
                        className="mt-1.5 w-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                      </svg>
                    </div>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 lg:px-10 md:px-7 px-5 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>Our Solution</h4>
              <p className="font-medium">{data?.description || "—"}</p>
              <ul className="flex flex-col">
                {(data?.keyPoints || []).map((kp, idx) => (
                  <li
                    key={idx}
                    className="flex lg:items-center gap-2.5 font-medium fs-26 border-b border-gray-400 last:border-none py-5"
                  >
                    <div>
                      <svg
                        className="mt-1.5 w-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                      </svg>
                    </div>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-lg">
        <div className="service-content flex flex-col items-center gap-5">
          <span className="fs-26 color-primary-dark">[The Process]</span>
          <h2 className="lg:leading-20 leading-10 tracking-tight max-w-2xl">
            What We Did
          </h2>
        </div>
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {(data?.process?.length ? data.process : []).map((step) => (
            <div
              key={step.number + step.title}
              className="relative justify-end flex flex-col bg-light-purple rounded-[30px] lg:p-8  p-5 overflow-hidden"
            >
              <p className="self-end big-number font-black z-0 select-none leading-tight">
                {step.number}
                <span className="color-primary-light">.</span>
              </p>
              <div className="flex flex-col h-full">
                <h4 className="mt-2">{step.title}</h4>
                <p className="text-sm ">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container mx-auto my-lg">
        <div className="service-content flex flex-col items-center gap-5">
          <span className="fs-26 color-primary-dark">[Tools]</span>
          <h2 className="lg:leading-20 leading-10 tracking-tight max-w-2xl text-center">
            Tools & Platforms We Use
          </h2>
        </div>
      </div> */}
      <ToolsMarquee />
      <CallSchedule />
      <FooterMarquee />
    </section>
  );
};

export default Page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../../../public/assets/images/blog-detail-bg.png";
import CallSchedule from "../../../app/components/CallSchedule";

const blogPost = {
  title: "Let's inspire the future with a free online academy",
  imageUrl: "/assets/images/blogDetail.png", // Replace with your image path in the /public folder
  tableOfContents: [
    { id: "#section-1", title: "The Foundation of Modern Learning" },
    { id: "#section-2", title: "Structuring the Curriculum" },
    { id: "#section-3", title: "Engaging Students with Technology" },
    { id: "#section-4", title: "Measuring Success and Iterating" },
    { id: "#section-5", title: "The Path Forward" },
  ],
  content: [
    {
      id: "section-1",
      title: "The Foundation of Modern Learning",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non enim quaero quid verum, sed quid cuique dicendum sit. Duo Reges: constructio interrete. Atqui reperies, inquit, in hoc quidem pertinacem; Quae cum dixisset, finem ille.",
        "Comprehensionem, inquit, physicis, si optandum sit, malim, quidquid intersit, quid quidquid. Igitur ne dolorem quidem. Quod equidem non opono, sit sane, inquam. Cur post Tarentum ad Archytam? Deinde prima illa, quae in congressu.",
      ],
    },
    {
      id: "section-2",
      title: "Structuring the Curriculum",
      paragraphs: [
        "Aenean id et, et id omittantur. Nec enim, omnes avaritias si aeque avaritias esse dixerimus, sequetur ut etiam aequas esse dicamus. Videamus animi partes, ne similiter hominis, cum appetitum laudibus.",
        "Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Quodsi ipsam honestatem undique per se laudabiliter.",
      ],
    },
    {
      id: "section-3",
      title: "Engaging Students with Technology",
      paragraphs: [
        "Curabitur et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.",
      ],
    },
    // Add more sections as needed to match the ToC
  ],
};

const page = () => {
  return (
    <div>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
            <div className="absolute inset-0 z-[-1]">
              <Image
                src={bgImg}
                alt="A modern turntable playing a record"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
              <span className="font-medium text-[26px]  color-primary-dark">
                [Blog Detail]
              </span>
              <h1 className="text-center leading-[95%] max-w-5xl">
                Creative Insights & Smart Solutions
              </h1>
              <p className="text-center max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                non ex rhoncus, fringilla felis quis, malesuada ante. Aenean id
                efficitur leo, vel lobortis massa. Sed non nisl at neque finibus
                luctus in eu justo. Curabitur et ligula feugiat, consectetur
                felis id, tempus justo. Proin consequat libero ante, eu pharetra
                tortor consequat a. Duis eget dictum nulla.
              </p>
            </div>
          </div>
        </div>
      </section>
      <main className="container mx-auto lg:px-5 md:px-4 px-3 my-lg">
        {/* Blog Post Hero Image */}
        <div className="mb-8 md:mb-12">
          <Image
            src={blogPost.imageUrl}
            alt="Blog post hero image"
            width={1200}
            height={600}
            unoptimized={true}
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
                {blogPost.tableOfContents.map((item) => (
                  <li
                    key={item.id}
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

              {blogPost.content.map((section) => (
                <section
                  key={section.id}
                  id={section.id.substring(1)}
                  className="scroll-mt-24 lg:mb-0 mb-5"
                >
                  <h4>{section.title}</h4>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <CallSchedule />
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/blogShape.png";
import CallSchedule from "../components/CallSchedule";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
  {
    id: 2,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
  {
    id: 3,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
  {
    id: 4,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
  {
    id: 5,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
  {
    id: 6,
    featureImage: "/assets/images/blogFeature.png",
    date: "12-12-2024",
    title: "Systems, retention strategies, and scaling insights.",
    excerpt:
      "Lorem ipsum di set. cosoi kasjp noic condpa akw. poap lkaoko . . .",
  },
];

const page = () => {
  return (
    <div className="relative">
      <Image
        className="absolute w-full h-auto top-0 right-0 z-0"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={Shape}
        alt="Abstract 3D hero image"
        // objectFit="contain"
        className="absolute right-0 top-0"
      />
      <section className="relative lg:pt-[295px] pt-[350px] overflow-hidden">
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <p className="font-medium text-[26px] color-primary-dark">
              [Our Blog]
            </p>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Insights That Power
              <span className="text-overlay text-white px-2">
                Agencies
              </span>{" "}
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-3xl">
              We don’t just build for agencies — we share what we learn along
              the way. From scaling delivery systems to mastering design
              workflows, our blog is your playbook for growing without burnout.
            </p>

            {/* Button Group */}
            <div className="flex items-center gap-4 mt-4">
              <button className="btn btn-primary">Book a Call</button>
              <button className="btn btn-outline">How it Works</button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-3xl bg-light-purple">
            <div className="flex flex-col items-center gap-0 lg:flex-row lg:gap-12">
              <div className="w-full lg:w-2/6 lg:flex-shrink-0">
                <Image
                  src="/assets/images/section-shape.png"
                  alt="Abstract 3D shape"
                  width={590}
                  height={590} // Use dimensions for a 1:1 aspect ratio
                  className="h-auto w-full max-w-md lg:max-w-none"
                />
              </div>

              <div className="flex w-full flex-col lg:w-4/6  p-6 sm:p-8 md:p-12 lg:p-16">
                <span className="font-medium color-primary-dark text-lg md:text-xl">
                  [Prismolix Blog]
                </span>

                <h2 className="mt-2 mb-4 font-bold text-3xl leading-tight">
                  Ideas, Systems, and Stories That Drive Growth
                </h2>

                <p className="mb-4 text-base md:text-lg">
                  The Prismolix Blog is where agency owners, creative directors,
                  and growth teams find practical advice on scaling design and
                  development. We cover white-label execution strategies, UX/UI
                  best practices, tech stack deep-dives, and leadership lessons
                  — all written with one goal: to help you focus on growth while
                  we handle the heavy lifting.
                </p>

                <button className="btn btn-primary mt-2 w-full sm:w-auto sm:self-start">
                  Let's Talk Scalability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="font-medium text-[26px] color-primary-dark">
              [Blogs]
            </span>
            <h2 className="lg:leading-20 leading-10 tracking-tight max-w-2xl text-center">
              From the Prismolix Journal
            </h2>
          </div>
          <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* Service Cards - Generated from the array */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="relative flex flex-col bg-light-purple rounded-[30px] p-8 overflow-hidden"
              >
                <Image
                  src={blog.featureImage}
                  width={100}
                  height={100}
                  unoptimized={true}
                  className="w-full h-60  object-cover mb-6 rounded-[20px]"
                  alt=""
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col ">
                  {/* Price section pushed to the bottom */}
                  <div className="mt-auto">
                    <div className="pb-5">
                      <p className="">
                        <span className="bg-white px-2.5 py-[7px] rounded-full">
                          {blog.date}
                        </span>
                      </p>
                      <h4 className="mt-2">{blog.title}</h4>
                      <p>{blog.excerpt}</p>
                    </div>

                    <div className="pt-5">
                      <Link
                        href={`blogs/${blog.id}`}
                        className="color-primary-dark"
                      >
                        <p> Continue Reading</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallSchedule />
    </div>
  );
};

export default page;

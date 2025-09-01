import React from "react";

const services = [
  {
    number: "01",
    timeframe: "1–2 weeks",
    title: "UI/UX Systems",
    price: "$2,000/mo",
  },
  {
    number: "02",
    timeframe: "2–3 weeks",
    title: "WordPress",
    price: "$3,000/mo",
  },
  {
    number: "03",
    timeframe: "2–4 weeks",
    title: "Shopify",
    price: "$3,000/mo",
  },
  {
    number: "04",
    timeframe: "4–8 weeks",
    title: "App Development",
    price: "Custom",
  },
  {
    number: "05",
    timeframe: "Ongoing",
    title: "Graphic Design",
    price: "$1,500/mo",
  },
];

const Services = () => {
  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="service-content flex flex-col items-center mx-auto gap-5 max-w-4xl">
          <span className="fs-26 color-primary-dark">[Services]</span>
          <h2 className="lg:leading-20 leading-10 tracking-tight">
            What We Build
          </h2>
          <p className="color-dark-cards-bg text-center">
            Whether it’s a landing page sprint, a headless eCommerce build, or
            full-stack app design — we’ve got you covered.
          </p>
        </div>
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {/* Service Cards - Generated from the array */}
          {services.map((service) => (
            <div
              key={service.number}
              className="card relative flex flex-col bg-light-purple rounded-[30px] lg:p-8 md:p-7 p-5 overflow-hidden"
            >
              {/* Giant background number */}
              <p className="self-end !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                {service.number}
                <span className="color-primary-light">.</span>
              </p>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Price section pushed to the bottom */}
                <div className="mt-auto">
                  <div className="gradient-line pb-5">
                    <span className="bg-white px-2.5 py-[7px] rounded-full">
                      {service.timeframe}
                    </span>
                    <h4 className="mt-2.5 leading-[45px]">{service.title}</h4>
                  </div>

                  <div className="pt-5">
                    <p>Starting from:</p>
                    <h3 className="service-price color-primary-dark">
                      {service.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "Each Service Includes" Card */}
          <div className="flex flex-col bg-primary rounded-3xl lg:p-8 md:p-7 p-5 text-white">
            <h4 className="text-3xl font-bold">Each Service includes:</h4>
            {/* MODIFICATION HERE: Changed list-inside to list-outside and added padding */}
            <ul className="list-disc list-outside space-y-3 mt-6 text-base text-purple-100 flex-grow sm:text-lg md:text-xl lg:text-[22px] pl-5">
              <li>1 dedicated point of contact</li>
              <li>Weekly sprints with milestones</li>
              <li>Shared boards for progress tracking</li>
              <li>Unlimited revisions within scope</li>
            </ul>
            <button className="w-full btn btn-secondary hover:bg-violet-100 transition-colors mt-6">
              Build Your Stack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

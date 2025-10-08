import React from "react";
import HeroSection from "./HeroSection";
import ProblemSolution from "./ProblemSolution";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactSection";
import CallSchedule from "./CallSchedule";
import FooterMarquee from "../components/FooterMarquee";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.prismolix.com/#organization",
      name: "Prismolix",
      url: "https://www.prismolix.com",
      logo: "https://www.prismolix.com/path-to-your-logo.png",
      description:
        "Prismolix helps creative and digital agencies scale faster. We deliver UI/UX, web, app & Shopify design and development — while you focus on growth.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+12312341234",
        contactType: "customer support",
        areaServed: "PK",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/prismolix",
        "https://www.linkedin.com/company/prismolix",
        "https://www.instagram.com/prismolix",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahria Town, Phase 8",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        postalCode: "XXXXXX",
        addressCountry: "PK",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.prismolix.com/#website",
      url: "https://www.prismolix.com",
      name: "Prismolix",
      publisher: {
        "@id": "https://www.prismolix.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.prismolix.com/#webpage",
      url: "https://www.prismolix.com/",
      name: "Prismolix — UI/UX, Web & App Development for Agencies",
      isPartOf: {
        "@id": "https://www.prismolix.com/#website",
      },
      about: {
        "@id": "https://www.prismolix.com/#organization",
      },
      inLanguage: "en",
    },
  ],
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection />
      <ProblemSolution />
      <Services />
      <Testimonial />
      <ContactSection />
      <CallSchedule />
      <FooterMarquee />
    </>
  );
};

export default Home;

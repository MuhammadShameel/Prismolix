
import localFont from "next/font/local";
import "./styles/globals.css";


const satoshi = localFont({
  src: [
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Bold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const birkenNue = localFont({
  src: [
    {
      path: "../public/assets/fonts/birken-nue/BirkenNue-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/assets/fonts/birken-nue/BirkenNue-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/assets/fonts/birken-nue/BirkenNue-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/fonts/birken-nue/BirkenNue-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/assets/fonts/birken-nue/BirkenNue-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-birkenNue",
  display: "swap",
});

export const metadata = {
  title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
  description:
    "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
    description:
      "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
    images:
      "https://api.prismolix.com/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
    description:
      "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
    images:
      "https://api.prismolix.com/wp-content/uploads/2025/08/blogDetail.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${birkenNue.variable}`}>
        {children}
      </body>
    </html>
  );
}

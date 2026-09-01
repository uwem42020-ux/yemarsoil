import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Yemars Oil and Gas | Energy Solutions",
    template: "%s | Yemars Oil and Gas",
  },
  description:
    "Yemars Oil and Gas provides reliable energy solutions, petroleum products, and industrial services. Contact us for your energy needs.",
  keywords: ["Yemars Oil and Gas", "oil and gas", "petroleum", "energy", "Yemars"],
  metadataBase: new URL("https://yemars.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yemars Oil and Gas",
    description: "Reliable energy and petroleum solutions.",
    url: "https://yemars.com",
    siteName: "Yemars Oil and Gas",
    images: [
      {
        url: "/yemarslogo-og.png",
        width: 1200,
        height: 630,
        alt: "Yemars Oil and Gas Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yemars Oil and Gas",
    description: "Reliable energy and petroleum solutions.",
    images: ["/yemarslogo-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yemars Oil and Gas",
  url: "https://yemars.com",
  logo: "https://yemars.com/yemarslogo.png",
  image: "https://yemars.com/yemarslogo-og.png",
  description: "Yemars Oil and Gas provides engineering, procurement, and construction services for the oil, gas, and power industries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Revival Land City, Lagasa Road Eputu, Ibeju Lekki",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2347065851461",
    contactType: "customer service",
    email: "info@yemars.com",
  },
  sameAs: [
    // Add your social media URLs when available
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
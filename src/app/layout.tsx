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
        url: "/yemarslogo.png",           // Absolute URL: https://yemars.com/yemarslogo.png
        width: 600,                        // Set these to match your logo's actual dimensions
        height: 300,                       // (If your logo is 200x100, change to 200,100)
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
    images: ["/yemarslogo.png"],           // Same image for Twitter cards
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
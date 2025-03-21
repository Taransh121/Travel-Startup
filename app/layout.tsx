import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head for SEO & Metadata
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Metadata Object for SEO
export const metadata: Metadata = {
  title: "Tirtha Yatra - Experience Divine Journeys",
  description:
    "Seamless pilgrimage experiences with VIP Darshan, comfortable travel, and personalized services. Explore our Prayagraj, Varanasi, and Ayodhya packages.",
  authors: [{ name: "tirthayatrik.com", url: "https://tirthayatrik.com" }],
  metadataBase: new URL("https://tirthayatrik.com"),
  openGraph: {
    title: "Tirtha Yatra - Experience Divine Journeys",
    description:
      "Book your seamless pilgrimage with VIP Darshan, experienced guides, and premium accommodations.",
    url: "https://tirthayatrik.com",
    type: "website",
  },
  twitter: {
    title: "Tirtha Yatra - Experience Divine Journeys",
    description:
      "Join us for a sacred pilgrimage with VIP Darshan, guided tours, and luxurious stays.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Tirtha Yatra, Pilgrimage Tours, VIP Darshan, Prayagraj, Varanasi, Ayodhya, Religious Travel, Hindu Pilgrimage, Holy Dip, Spiritual Journey"
        />
        <meta name="author" content="tirthayatrik.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={String(metadata.openGraph?.url)} />
        <meta name="twitter:title" content={String(metadata.twitter?.title)} />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description}
        />
        <link rel="canonical" href="https://tirthayatrik.com" />
      </Head>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}

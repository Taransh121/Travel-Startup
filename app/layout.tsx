import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tirthayatrik - Your trusted pilgrimage partner",
  description:
    "Embark on a divine journey with Tirthayatrik. Experience VIP Darshan, guided spiritual tours, and seamless travel arrangements to India's holiest destinations.",
  authors: [{ name: "Tirthayatrik", url: "https://tirthayatrik.com" }],
  metadataBase: new URL("https://tirthayatrik.com"),
  openGraph: {
    title: "Tirthayatrik - Your Trusted Pilgrimage Partner",
    description:
      "Plan your spiritual journey with Tirthayatrik. Book VIP darshan, guided tours, and comfortable travel for a divine experience.",
    url: "https://tirthayatrik.com",
    type: "website",
    images: [
      {
        url: "https://www.tirthayatrik.com/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tirthayatrik Logo",
      },
    ],
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
    content="Tirthayatrik, Pilgrimage Tours, VIP Darshan, Religious Travel, Spiritual Journeys, Hindu Temples, Holy Travel, Varanasi, Ayodhya, Prayagraj"
  />
  <meta name="author" content="Tirthayatrik" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tirthayatrik.com" />
  <meta property="og:image" content="https://www.tirthayatrik.com/images/logo/logo.jpg" />
  <meta property="og:site_name" content="Tirthayatrik" />  {/* 👈 Add This */}
  
  <meta name="twitter:title" content="Tirthayatrik - Your Trusted Pilgrimage Partner" />
  <meta name="twitter:description" content="Join our sacred pilgrimage tours with VIP access and experienced guides." />
  <meta name="twitter:image" content="https://www.tirthayatrik.com/images/logo/logo.jpg" />
  
  <link rel="canonical" href="https://tirthayatrik.com" />
  {/* Favicon */}
  <link rel="icon" href="https://www.tirthayatrik.com/images/logo/logo.jpg" sizes="any" />
  <link rel="apple-touch-icon" href="https://www.tirthayatrik.com/images/logo/logo.jpg" />
</Head>

      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}

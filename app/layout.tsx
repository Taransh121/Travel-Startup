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
  title: "Tirtha yatrik - Your Trusted Pilgrimage Partner",
  description:

    "Embark on a divine journey with Tirtha yatrik. Experience VIP Darshan, guided spiritual tours, and seamless travel arrangements to India's holiest destinations.",
  authors: [{ name: "Tirtha yatrik", url: "https://Tirtha yatrik.com" }],

  metadataBase: new URL("https://Tirtha yatrik.com"),
  openGraph: {
    title: "Tirtha yatrik - Your Trusted Pilgrimage Partner",
    description:

      "Plan your spiritual journey with Tirtha yatrik. Book VIP Darshan, guided tours, and comfortable travel for a divine experience.",

    url: "https://Tirtha yatrik.com",
    type: "website",
  },
  twitter: {
    title: "Tirtha yatrik - Your Trusted Pilgrimage Partner",
    description:
      "Join our sacred pilgrimage tours with VIP access and experienced guides.",
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
          content="Tirtha yatrik, Pilgrimage Tours, VIP Darshan, Religious Travel, Spiritual Journeys, Hindu Temples, Holy Travel, Varanasi, Ayodhya, Prayagraj"
        />

        <meta name="author" content="Tirtha yatrik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Tirtha yatrik.com" />
        <meta name="twitter:title" content="Tirtha yatrik - Your Trusted Pilgrimage Partner" />
        <meta name="twitter:description" content="Join our sacred pilgrimage tours with VIP access and experienced guides." />
        <link rel="canonical" href="https://Tirtha yatrik.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

      </Head>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}

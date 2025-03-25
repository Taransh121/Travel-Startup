import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tirthayatrik - Your Trusted Pilgrimage Partner",
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
    siteName: "Tirthayatrik",
    // images: [
    //   {
    //     url: "https://www.tirthayatrik.com/images/logo/logo.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Tirthayatrik Logo",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirthayatrik - Your Trusted Pilgrimage Partner",
    description:
      "Join our sacred pilgrimage tours with VIP access and experienced guides.",
    images: ["https://www.tirthayatrik.com/images/logo/logo.jpg"],
  },
  alternates: {
    canonical: "https://tirthayatrik.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
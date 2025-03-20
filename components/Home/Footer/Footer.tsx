import Link from "next/link";
import Image from "next/image";
import { footerMetadata } from "./metadata";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <title>{footerMetadata.title}</title>
        <meta name="description" content={footerMetadata.description} />
        <meta name="keywords" content={footerMetadata.keywords.join(", ")} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={footerMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={footerMetadata.openGraph.description}
        />
        <meta property="og:url" content={footerMetadata.openGraph.url} />
        <meta
          property="og:image"
          content={footerMetadata.openGraph.images[0].url}
        />
        <meta property="og:type" content={footerMetadata.openGraph.type} />
      </Head>
      <footer
        className="text-gray-300 text-sm py-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/footer/footer-bg.jpg')" }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-white">Tirthayatrik</h2>
              <p className="mt-2 leading-relaxed">
                Discover the spiritual side of India with Tirthayatrik. <br />
                <b>Plan your next pilgrimage</b> with ease and explore
                <br />
                divine destinations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/tours"
                    className="hover:text-white transition-colors"
                  >
                    Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pooja"
                    className="hover:text-white transition-colors"
                  >
                    Pooja&apos;s We Offer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/live-darshan"
                    className="hover:text-white transition-colors"
                  >
                    Live Darshan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <p className="mt-2">
                <strong>Phone:</strong> +91-9277341677
              </p>
              <p className="mt-2">
                <strong>Email:</strong> tirthayatrik@gmail.com
              </p>
              <p className="mt-2">
                <strong>Instagram:</strong> @tirthayatrik
              </p>
              <div className="mt-3">
                {/* <p>
                <strong>Scan to Chat on WhatsApp:</strong>
              </p> */}
                <div className="w-24 h-24 relative mt-2">
                  <Image
                    src="/images/footer/footer-qr.png"
                    alt="Footer QR Code"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

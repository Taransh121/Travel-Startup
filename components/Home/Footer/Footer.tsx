import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Teerthyatrik - Your Spiritual Travel Guide</title>
        <meta
          name="description"
          content="Teerthyatrik - Explore spiritual destinations with ease. Book pilgrimage tours, discover sacred sites, and plan your next holy journey."
        />
        <meta
          name="keywords"
          content="Teerthyatrik, pilgrimage, spiritual tours, religious travel, India tourism, temples, holy places, travel packages"
        />
        <meta name="author" content="Teerthyatrik Team" />
        <meta name="robots" content="index, follow" />
      </Head>

      <footer
        className="text-gray-300 text-sm py-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/footer/footer-bg.jpg')" }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-4">
            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-white">Teerthyatrik</h2>
              <p className="mt-2 leading-relaxed">
                Discover the spiritual side of India with Teerthyatrik. <br />
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
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/pooja" className="hover:text-white transition-colors">
                    Pooja's We Offer
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <p className="mt-2">📞 Phone: +91 98765 43210</p>
              <div className="mt-3">
                <p><strong>Scan to Chat on WhatsApp:</strong></p>
                <div className="w-24 h-24 relative mt-2">
                  {/* <Image
                    src="/images/footer/whatsapp-qr.png"
                    alt="WhatsApp QR Code"
                    fill
                    className="object-contain"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 mt-4">
            <p>© {new Date().getFullYear()} Ministry of Tourism, Government of India</p>
            <div className="mt-2 md:mt-0 flex space-x-4">
              <Link href="/" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

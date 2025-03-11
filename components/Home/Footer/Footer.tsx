import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Teerthyatrik - Your Spiritual Travel Guide</title>
        <meta name="description" content="Teerthyatrik - Explore spiritual destinations with ease. Book pilgrimage tours, discover sacred sites, and plan your next holy journey." />
        <meta name="keywords" content="Teerthyatrik, pilgrimage, spiritual tours, religious travel, India tourism, temples, holy places, travel packages" />
        <meta name="author" content="Teerthyatrik Team" />
        <meta name="robots" content="index, follow" />
      </Head>

      <footer className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: "url('/images/footer/footer.jpg')" }}>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo & About Teerthyatrik */}
            <div>
              <h2 className="text-3xl font-bold tracking-wide">Teerthyatrik</h2>
              <p className="text-gray-300 mt-2">
                Discover the spiritual side of India with Teerthyatrik. Book your next pilgrimage with us and explore divine destinations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/attractions" className="hover:text-gray-300">Attractions</Link></li>
                <li><Link href="/experiences" className="hover:text-gray-300">Experiences</Link></li>
                <li><Link href="/festivals" className="hover:text-gray-300">Festivals & Events</Link></li>
                <li><Link href="/faqs" className="hover:text-gray-300">FAQs</Link></li>
                <li><Link href="/incredible-india" className="hover:text-gray-300">Incredible India Hub</Link></li>
              </ul>
            </div>

            {/* Newsletter & QR Code */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300">Sign up for exciting news, events, and travel ideas.</p>
              <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Subscribe Now
              </button>
              <h3 className="text-2xl font-semibold mt-6">Scan to Chat</h3>
              <Image 
                src="/images/footer/qrcodes.jpg" 
                alt="Scan this QR code to chat with Teerthyatrik customer support" 
                width={100} 
                height={100} 
                priority 
              />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-600 pt-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Ministry of Tourism, Government of India</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/terms" className="text-sm hover:text-gray-300">Terms of Use</Link>
              <span>|</span>
              <Link href="/privacy" className="text-sm hover:text-gray-300">Privacy Policy</Link>
              <span>|</span>
              <Link href="/contact" className="text-sm hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

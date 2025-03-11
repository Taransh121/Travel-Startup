// ✅ Navbar Links
export const navLinks = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/tours", label: "Destination" },
  { id: 3, url: "/pooja", label: "Pooja" },
  { id: 4, url: "/about", label: "About" },
  { id: 5, url: "/blog", label: "Blog" },
];

// ✅ Destination Data
export type Destination = {
  title: string;
  price: string;
  imageUrl: string;
};

export const destinationCombinations: Destination[] = [
  { title: "Prayagraj", price: "Starting ₹12,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi", price: "Starting ₹15,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Vindhyachal", price: "Starting ₹10,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Ayodhya", price: "Starting ₹14,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Varanasi", price: "Starting ₹18,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Ayodhya", price: "Starting ₹20,000", imageUrl: "/images/tourImg/varanasi.jpg" },
];

//Special Pooja Packages
export type Pooja = {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
};

export const poojaPackages: Pooja[]= [
  { title: "Rudrabhishek Pooja", price: "₹5,500", description: "A powerful Shiva pooja for health, prosperity, and success.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Maha Mrityunjaya Jaap", price: "₹7,000", description: "A sacred pooja for longevity and protection from untimely death.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Navagraha Shanti Pooja", price: "₹6,500", description: "A ritual to reduce the negative effects of planetary positions.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Ram Janmabhoomi Special Pooja", price: "₹8,500", description: "Dedicated to Lord Rama for spiritual growth and blessings.", imageUrl: "/images/pooja/pooja.jpg" },
];

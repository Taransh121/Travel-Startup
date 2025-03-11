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
  // ✅ Single Destination Tours
  { title: "Prayagraj Tour", price: "Starting ₹12,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi Tour", price: "Starting ₹15,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Vindhyachal Tour", price: "Starting ₹10,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Ayodhya Tour", price: "Starting ₹14,000", imageUrl: "/images/tourImg/varanasi.jpg" },

  // ✅ Two-Destination Tours
  { title: "Prayagraj → Varanasi", price: "Starting ₹18,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Ayodhya", price: "Starting ₹20,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Vindhyachal", price: "Starting ₹16,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi → Ayodhya", price: "Starting ₹21,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi → Vindhyachal", price: "Starting ₹17,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Ayodhya → Vindhyachal", price: "Starting ₹18,500", imageUrl: "/images/tourImg/varanasi.jpg" },

  // ✅ Three-Destination Itineraries
  { title: "Prayagraj → Varanasi → Ayodhya", price: "Starting ₹25,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Vindhyachal → Ayodhya", price: "Starting ₹24,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi → Prayagraj → Ayodhya", price: "Starting ₹26,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Ayodhya → Prayagraj → Varanasi", price: "Starting ₹27,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Vindhyachal → Prayagraj → Varanasi", price: "Starting ₹23,500", imageUrl: "/images/tourImg/varanasi.jpg" },

  // ✅ Four-Destination Complete Pilgrimage Tour
  { title: "Prayagraj → Varanasi → Vindhyachal → Ayodhya", price: "Starting ₹30,000", imageUrl: "/images/tourImg/varanasi.jpg" },
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

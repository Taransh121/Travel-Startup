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
  // ✅ Four-Destination Complete Pilgrimage Tour
  { title: "Prayagraj → Vindhyachal → Varanasi → Ayodhya", price: "Starting ₹30,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-varanasi-Ayodhya.jpg" },

  // ✅ Three-Destination Itineraries
  { title: "Prayagraj → Vindhyachal → Varanasi", price: "Starting ₹25,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-Varanasi_.jpg" },
  { title: "Prayagraj → Vindhyachal → Ayodhya", price: "Starting ₹24,500", imageUrl: "/images/tourImg/Prayagraj-Varanasi-Ayodhya_.jpg" },

  // ✅ Two-Destination Tours
  { title: "Prayagraj → Vindhyachal", price: "Starting ₹16,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal_.jpg" },
  { title: "Prayagraj → Varanasi", price: "Starting ₹18,000", imageUrl: "/images/tourImg/Prayagraj-Varanasi_.jpg" },
  { title: "Prayagraj → Ayodhya", price: "Starting ₹20,000", imageUrl: "/images/tourImg/Prayagraj-Ayodhya_.jpg" },

  // ✅ Single Destination Tours
  { title: "Prayagraj Tour", price: "Starting ₹12,000", imageUrl: "/images/tourImg/Prayagraj_.jpg" },
  { title: "Vindhyachal Tour", price: "Starting ₹10,500", imageUrl: "/images/tourImg/Vindhyachal_.jpg" },
  { title: "Varanasi Tour", price: "Starting ₹15,000", imageUrl: "/images/tourImg/Varanasi.jpg" },
  { title: "Ayodhya Tour", price: "Starting ₹14,000", imageUrl: "/images/tourImg/ayodhya.jpg" },
];



export type Pooja = {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
};

export const poojaPackages: Pooja[] = [
  { 
    title: "Nau Grah Pooja", 
    price: "₹5,000", 
    description: "A special planetary pooja to balance cosmic influences.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Special Devi Pooja at Vindhyachal", 
    price: "₹7,500", 
    description: "A sacred offering to Devi Maa for divine blessings.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Devi Shringar at Vindhyachal", 
    price: "₹6,000", 
    description: "A divine ritual to adorn the Goddess with sacred offerings.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Rudrabhishek at Kashi Vishwanath", 
    price: "₹9,000", 
    description: "A powerful Shiva pooja at the holiest Jyotirlinga.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Kaal Sarp Dosh Nivaran Pooja at Nag Vasuki, Prayagraj", 
    price: "₹11,000", 
    description: "A remedial pooja for Kaal Sarp Dosh, ensuring peace and prosperity.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Rudrabhishek at Triveni Sangam", 
    price: "₹8,500", 
    description: "A sacred Lord Shiva pooja at the holy confluence of three rivers.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Sat Chandi Pooja at Vindhyachal", 
    price: "₹12,000", 
    description: "A grand Chandi path for protection and fulfillment of desires.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Navgrah Shanti Path at Prayagraj/Vindhyachal", 
    price: "₹6,500", 
    description: "A pooja to pacify planetary doshas and bring harmony.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "10 Mahavidya Pooja at Prayagraj/Vindhyachal", 
    price: "₹15,000", 
    description: "A special tantric pooja invoking the ten powerful Mahavidyas.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Maa Vindhyavasini Devi Sahasra Archana at Vindhyachal", 
    price: "₹10,000", 
    description: "A thousand-name recitation of Devi Maa for divine grace.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
  { 
    title: "Mahamrityunjay Jaap at Prayagraj", 
    price: "₹7,000", 
    description: "A sacred chant for longevity, protection, and spiritual upliftment.", 
    imageUrl: "/images/pooja/pooja.jpg" 
  },
];

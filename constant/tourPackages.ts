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
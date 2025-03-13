// ✅ Destination Data
export type Destination = {
    title: string;
    price: string;
    imageUrl: string;
  };
  
  export const destinationCombinations: Destination[] = [
    // ✅ Four-Destination Complete Pilgrimage Tour
    { title: "Prayagraj → Vindhyachal → Varanasi → Ayodhya", price: "30,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-Varanasi-Ayodhya_2.jpg" },
  
    // ✅ Three-Destination Itineraries
    { title: "Prayagraj → Vindhyachal → Varanasi", price: "25,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-Ayodhya_2.jpg" },
    { title: "Prayagraj → Vindhyachal → Ayodhya", price: "24,500", imageUrl: "/images/tourImg/Prayagraj-Varanasi-Ayodhya_2.jpg" },
  
    // ✅ Two-Destination Tours
    { title: "Prayagraj → Vindhyachal", price: "16,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal_2.jpg" },
    { title: "Prayagraj → Varanasi", price: "18,000", imageUrl: "/images/tourImg/Prayagraj-Varanasi_2.jpg" },
    { title: "Prayagraj → Ayodhya", price: "20,000", imageUrl: "/images/tourImg/Prayagraj-Ayodhya_2.jpg" },
  
    // ✅ Single Destination Tours
    { title: "Prayagraj Tour", price: "12,000", imageUrl: "/images/tourImg/Prayagraj_2.jpg" },
    { title: "Vindhyachal Tour", price: "10,500", imageUrl: "/images/tourImg/Vindhyachal_2.jpg" },
    { title: "Varanasi Tour", price: "15,000", imageUrl: "/images/tourImg/Varanasi_2.jpg" },
    { title: "Ayodhya Tour", price: "14,000", imageUrl: "/images/tourImg/Ayodhya_2.jpg" },
  ];
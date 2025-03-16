// ✅ Destination Data
export type Destination = {
    title: string;
    slug: string;
    price: string;
    imageUrl: string;
  };
  
  export const destinationCombinations: Destination[] = [
    { title: "Prayagraj → Vindhyachal → Varanasi → Ayodhya", slug: "prayagraj-vindhyachal-ayodhya-varanasi", price: "30,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-Varanasi-Ayodhya_2.jpg" },
    { title: "Prayagraj → Vindhyachal → Varanasi", slug: "prayagraj-vindhyachal-varanasi", price: "25,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal-Varanasi_2.jpg" },
    { title: "Prayagraj → Vindhyachal → Ayodhya", slug: "prayagraj-vindhyachal-ayodhya", price: "24,500", imageUrl: "/images/tourImg/Prayagraj-Varanasi-Ayodhya_2.jpg" },
    { title: "Prayagraj → Vindhyachal", slug: "prayagraj-vindhyachal", price: "16,000", imageUrl: "/images/tourImg/Prayagraj-Vindhyachal_2.jpg" },
    { title: "Prayagraj → Varanasi", slug: "prayagraj-varanasi", price: "18,000", imageUrl: "/images/tourImg/Prayagraj-Varanasi_2.jpg" },
    { title: "Prayagraj → Ayodhya", slug: "prayagraj-ayodhya", price: "20,000", imageUrl: "/images/tourImg/Prayagraj-Ayodhya_2.jpg" },
    { title: "Prayagraj Tour", slug: "prayagraj", price: "12,000", imageUrl: "/images/tourImg/Prayagraj_2.jpg" },
    { title: "Vindhyachal Tour", slug: "vindhyachal", price: "10,500", imageUrl: "/images/tourImg/Vindhyachal_2.jpg" },
    { title: "Varanasi Tour", slug: "varanasi", price: "15,000", imageUrl: "/images/tourImg/Varanasi_2.jpg" },
    { title: "Ayodhya Tour", slug: "ayodhya", price: "14,000", imageUrl: "/images/tourImg/Ayodhya_2.jpg" },
  ];
  
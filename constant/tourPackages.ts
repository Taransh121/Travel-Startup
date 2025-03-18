export type Destination = {
  title: string;
  slug: string;
  images: string[];
  price: string;
};

export const destinationCombinations: Destination[] = [
  {
    title: "Prayagraj → Vindhyachal → Varanasi → Ayodhya",
    slug: "prayagraj-vindhyachal-ayodhya-varanasi",
    images: ["/images/tourCard/varanasi.jpg"],
    price: "30,000",
  },
  {
    title: "Prayagraj → Vindhyachal → Varanasi",
    slug: "prayagraj-vindhyachal-varanasi",
    images: ["/images/tourCard/prayagraj_vindhyachal_varanasi.jpg"],
    price: "25,000",
  },
  {
    title: "Prayagraj → Vindhyachal → Ayodhya",
    slug: "prayagraj-vindhyachal-ayodhya",
    images: ["/images/tourCard/prayagraj_vindhyachal_ayodhya.jpg"],
    price: "24,500",
  },
  {
    title: "Prayagraj → Vindhyachal",
    slug: "prayagraj-vindhyachal",
    images: ["/images/tourCard/prayagraj_vindhyachal.jpg"],
    price: "16,000",
  },
  {
    title: "Prayagraj → Varanasi",
    slug: "prayagraj-varanasi",
    images: ["/images/tourCard/prayagraj_varanasi_card.jpg"],
    price: "18,000",
  },
  {
    title: "Prayagraj → Ayodhya",
    slug: "prayagraj-ayodhya",
    images: ["/images/tourCard/prayagraj_ayodhya_card.jpg"],
    price: "20,000",
  },
  {
    title: "Prayagraj Tour",
    slug: "prayagraj",
    images: ["/images/tourCard/prayagrajCard.jpg"],
    price: "12,000",
  },
  {
    title: "Vindhyachal Tour",
    slug: "vindhyachal",
    images: ["/images/tourCard/vindhyachal.jpg"],
    price: "10,500",
  },
  {
    title: "Varanasi Tour",
    slug: "varanasi",
    images: ["/images/tourCard/varanasi.jpg"],
    price: "15,000",
  },
  {
    title: "Ayodhya Tour",
    slug: "ayodhya",
    images: ["/images/tourCard/ayodhya_card.jpg"],
    price: "14,000",
  },
];

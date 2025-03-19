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
    price: "9,499",
  },
  {
    title: "Prayagraj → Vindhyachal → Varanasi",
    slug: "prayagraj-vindhyachal-varanasi",
    images: ["/images/tourCard/prayagraj_vindhyachal_varanasi.jpg"],
    price: "6,499",
  },
  {
    title: "Prayagraj → Ayodhya → Varanasi",
    slug: "prayagraj-ayodhya-varanasi",
    images: ["/images/tourCard/prayagraj_ayodhya_varanasi.jpg"],
    price: "8,499",
  },
  {
    title: "Prayagraj → Vindhyachal → Ayodhya",
    slug: "prayagraj-vindhyachal-ayodhya",
    images: ["/images/tourCard/prayagraj_vindhyachal_ayodhya.jpg"],
    price: "6,499",
  },
  {
    title: "Prayagraj → Vindhyachal",
    slug: "prayagraj-vindhyachal",
    images: ["/images/tourCard/pv4.jpg"],
    price: "4,799",
  },
  {
    title: "Prayagraj → Varanasi",
    slug: "prayagraj-varanasi",
    images: ["/images/tourCard/pv6.jpg"],
    price: "4,499",
  },
  {
    title: "Prayagraj → Ayodhya",
    slug: "prayagraj-ayodhya",
    images: ["/images/tourCard/prayagraj_ayodhya_card.jpg"],
    price: "4,499",
  },
  {
    title: "Prayagraj Tour",
    slug: "prayagraj",
    images: ["/images/tourCard/prayagrajCard.jpg"],
    price: "2,699",
  },
  {
    title: "Vindhyachal Tour",
    slug: "vindhyachal",
    images: ["/images/tourCard/vindhyachal.jpg"],
    price: "1,799",
  },
  {
    title: "Varanasi Tour",
    slug: "varanasi",
    images: ["/images/tourCard/v1.jpg"],
    price: "2,499",
  },
  {
    title: "Ayodhya Tour",
    slug: "ayodhya",
    images: ["/images/tourCard/ayodhya_card.jpg"],
    price: "2,599",
  },
];

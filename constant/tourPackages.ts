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
    price: "7,949",
  },
  {
    title: "Prayagraj → Vindhyachal → Varanasi",
    slug: "prayagraj-vindhyachal-varanasi",
    images: ["/images/tourCard/prayagraj_vindhyachal_varanasi.jpg"],
    price: "5,799",
  },
  {
    title: "Prayagraj → Ayodhya → Varanasi",
    slug: "prayagraj-ayodhya-varanasi",
    images: ["/images/tourCard/prayagraj_ayodhya_varanasi.jpg"],
    price: "7,299",
  },
  {
    title: "Prayagraj → Vindhyachal → Ayodhya",
    slug: "prayagraj-vindhyachal-ayodhya",
    images: ["/images/tourCard/prayagraj_vindhyachal_ayodhya.jpg"],
    price: "5,999",
  },
  {
    title: "Prayagraj → Vindhyachal",
    slug: "prayagraj-vindhyachal",
    images: ["/images/tourCard/pv4.jpg"],
    price: "3,799",
  },
  {
    title: "Prayagraj → Varanasi",
    slug: "prayagraj-varanasi",
    images: ["/images/tourCard/pv6.jpg"],
    price: "4,099",
  },
  {
    title: "Prayagraj → Ayodhya",
    slug: "prayagraj-ayodhya",
    images: ["/images/tourCard/prayagraj_ayodhya_card.jpg"],
    price: "3,799",
  },
  {
    title: "Prayagraj",
    slug: "prayagraj",
    images: ["/images/tourCard/prayagrajCard.jpg"],
    price: "2,299",
  },
  {
    title: "Vindhyachal",
    slug: "vindhyachal",
    images: ["/images/tourCard/vindhyachal.jpg"],
    price: "1,650",
  },
  {
    title: "Varanasi",
    slug: "varanasi",
    images: ["/images/tourCard/v1.jpg"],
    price: "1,999",
  },
  {
    title: "Ayodhya",
    slug: "ayodhya",
    images: ["/images/tourCard/ayodhya_card.jpg"],
    price: "1,899",
  },
];

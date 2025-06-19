// src/Data/TourDatas.ts

export interface TourDataItem {
  id: number;
  title: string;
  header: string;
  description: string;
  imageUrl: string;
}

const TourDatas: TourDataItem[] = [
  {
    id: 1,
    title: "Dubai 500$",
    header: "Lorem ipsum",
    description: "Morеm ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "./src/assets/Dubai.svg",
  },
  {
    id: 2,
    title: "Mist 300$",
    header: "Lorem ipsum",
    description: "Morеm ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "./src/assets/Egypt.svg",
  },
  {
    id: 3,
    title: "Turkiya 550$",
    header: "Lorem ipsum",
    description: "Morеm ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "./src/assets/Turkey.svg",
  },
];

export default TourDatas;

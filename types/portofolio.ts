import { StaticImageData } from "next/image";

interface PortofolioProps {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  paket: string;
}

export default PortofolioProps;

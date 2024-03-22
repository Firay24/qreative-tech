import { StaticImageData } from "next/image";

interface PortofolioProps {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  paket: string;
  logo: StaticImageData;
  details: string[];
  features: string[];
  demoImg: StaticImageData[];
  techImg: StaticImageData[];
  demoLink: string;
}

export default PortofolioProps;

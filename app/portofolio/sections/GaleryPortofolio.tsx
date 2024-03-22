import PortoImg1 from "@/assets/porto1.png";
import PortoImg2 from "@/assets/porto2.png";
import PortoImg3 from "@/assets/porto3.png";
import PortoImg4 from "@/assets/porto4.png";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

const GaleryPortofolio = ({
  imagesList,
}: {
  imagesList: StaticImageData[];
}) => {
  // const imagesList = [PortoImg1, PortoImg2, PortoImg3, PortoImg4];
  return (
    <Marquee className="marquee">
      {imagesList &&
        imagesList.map((image: StaticImageData, index: number) => (
          <div key={index} className="imageContainer">
            <Image
              src={image}
              alt="image portofolio"
              objectFit="contain"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ))}
    </Marquee>
  );
};

export default GaleryPortofolio;

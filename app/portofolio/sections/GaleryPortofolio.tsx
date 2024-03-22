import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

const GaleryPortofolio = ({
  imagesList,
}: {
  imagesList: StaticImageData[];
}) => {
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

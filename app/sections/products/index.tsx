"use client";
import { Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPortofolio from "./cardPortofolio";
import { portofolios } from "../data";
import PortofolioProps from "@/types/portofolio";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowLeft className="arrows" style={{ color: "white" }} />
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight className="arrows" style={{ color: "white" }} />
    </div>
  );
}

const ProductSections = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <Stack marginBottom={50} overflow="hidden" marginY={8} id="product">
      <Stack padding={5}>
        {/* heading */}
        <Stack textAlign="center">
          <Heading as="h2" size="xl" fontWeight="medium">
            Produk Kami
          </Heading>
          <Text>Intip sebagian dari proyek-proyek website terbaik kami</Text>
        </Stack>

        {/* body content */}
        <Stack
          zIndex={10}
          paddingX={{ base: 0, md: 8 }}
          marginTop={{ base: 0, md: 8 }}
        >
          <Slider {...settings}>
            {portofolios.map((item: PortofolioProps, index: number) => (
              <CardPortofolio key={index} {...item} />
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductSections;

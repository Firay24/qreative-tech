"use client";
import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPortofolio from "./cardPortofolio";
import { portofolios } from "../data";
import PortofolioProps from "@/types/portofolio";

const ProductSections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Stack marginBottom={50}>
      <Stack padding={5}>
        {/* heading */}
        <Stack textAlign="center">
          <Heading as="h2" size="xl" fontWeight="medium">
            Produk Kami
          </Heading>
          <Text>Intip sebagian dari proyek-proyek website terbaik kami</Text>
        </Stack>

        {/* body content */}
        <Slider {...settings}>
          {portofolios.map((item: PortofolioProps, index: number) => (
            <CardPortofolio key={index} {...item} />
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
};

export default ProductSections;

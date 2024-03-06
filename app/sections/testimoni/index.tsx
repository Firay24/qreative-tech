"use client";
import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import LineImg from "@/assets/line.png";
import Image from "next/image";
import ItemTestimoni from "./itemTestimoni";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonies } from "../data";
import TestimoniProps from "@/types/testimoni";

const TestimoniSections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Stack marginTop={5} position="relative" paddingBottom={8} paddingTop={10}>
      <Stack position="absolute" top="40%">
        <Image src={LineImg} alt="line img" />
      </Stack>
      <Stack padding={5} textAlign="center" gap={{ base: 8, md: 12 }}>
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          fontWeight="semibold"
          color="primary.dark"
        >
          What our clients say
        </Heading>
        <Stack>
          <Slider {...settings}>
            {testimonies.map((item: TestimoniProps, index: number) => (
              <ItemTestimoni key={index} {...item} />
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestimoniSections;

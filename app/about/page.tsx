import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeroSections from "../sections/hero";
import AccordionVision from "./sections/accordionVision";
import Image from "next/image";
import AboutImg from "@/assets/about.png";

const AboutMe = () => {
  return (
    <Stack alignItems="center">
      <HeroSections />
      <AccordionVision />
      <Stack width="80%">
        <Image src={AboutImg} alt="image about me" />
      </Stack>
    </Stack>
  );
};

export default AboutMe;

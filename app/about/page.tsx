import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeroSections from "../about/sections/hero";
import AccordionVision from "./sections/accordionVision";
import Image from "next/image";
import AboutImg from "@/assets/about.png";

const AboutMe = () => {
  return (
    <Stack alignItems="center">
      <HeroSections />
      <Flex
        paddingX={{ base: 0, md: 3 }}
        direction={{ base: "column", md: "row" }}
        width="full"
        alignItems="center"
      >
        <Stack width="full">
          <AccordionVision />
        </Stack>
        <Stack width="60%">
          <Image src={AboutImg} alt="image about me" />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default AboutMe;

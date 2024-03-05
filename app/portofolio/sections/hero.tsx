import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import bgImg from "@/assets/bg.png";
import IdekeenImg from "@/assets/logo/idekeen.jpg";
import { FaStar } from "react-icons/fa6";

const HeroSections = () => {
  return (
    <Stack position="relative" id="home">
      <Stack
        zIndex={50}
        paddingX={5}
        gap={5}
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <Stack width="60%">
          <Image
            src={IdekeenImg}
            alt="logo image"
            style={{ borderRadius: "10%" }}
          />
        </Stack>
        <Stack textAlign="center" alignItems="center">
          <HStack color="yellow.200" justifyContent="center">
            {[...Array(5)].map((_, index: number) => (
              <FaStar key={index} />
            ))}
          </HStack>
          <Heading as="h1" size="xl" color="primary.dark">
            Idekeen: Landing Page
          </Heading>
          <Text fontSize="18px" fontWeight="semibold" color="yellow.700">
            Basic Web
          </Text>
        </Stack>
      </Stack>
      <Stack overflow="hidden" zIndex={10}>
        <Image
          src={bgImg}
          alt="background"
          objectFit="cover"
          objectPosition="center"
          fill
        />
      </Stack>
    </Stack>
  );
};

export default HeroSections;

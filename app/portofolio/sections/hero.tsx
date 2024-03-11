"use client";
import {
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import bgImg from "@/assets/bg.png";
import IdekeenImg from "@/assets/logo/idekeen.jpg";
import { FaStar } from "react-icons/fa6";

const HeroSections = ({ title, paket }: { title: string; paket: string }) => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  return (
    <Stack position="relative" id="home">
      <Flex
        zIndex={50}
        paddingX={{ base: 5, md: 14 }}
        gap={5}
        alignItems={{ base: "center", md: "end" }}
        justifyContent={{ base: "center", md: "space-between" }}
        paddingY={10}
        direction={{ base: "column", md: "row" }}
        position={{ base: "relative", md: "absolute" }}
        top={{ base: 0, md: "40%" }}
      >
        <Flex
          alignItems={{ base: "center", md: "end" }}
          gap={5}
          direction={{ base: "column", md: "row" }}
        >
          <Stack width={{ base: "60%", md: "15%" }}>
            <Image
              src={IdekeenImg}
              alt="logo image"
              style={{ borderRadius: "10%" }}
            />
          </Stack>
          <Stack
            textAlign={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "start" }}
            paddingBottom={{ base: 0, md: 4 }}
          >
            {isMobile ? (
              <HStack color="yellow.200" justifyContent="center">
                {[...Array(5)].map((_, index: number) => (
                  <FaStar key={index} />
                ))}
              </HStack>
            ) : null}
            <Stack>
              <Heading as="h1" size="xl" color="primary.dark">
                {title}
              </Heading>
              <Text fontSize="18px" fontWeight="semibold" color="yellow.700">
                {paket}
              </Text>
            </Stack>
          </Stack>
        </Flex>
        {!isMobile ? (
          <HStack
            height={14}
            color="primary.yellow"
            justifyContent="center"
            alignItems="start"
            paddingBottom={20}
          >
            {[...Array(5)].map((_, index: number) => (
              <FaStar key={index} />
            ))}
          </HStack>
        ) : null}
      </Flex>
      <Stack overflow="hidden" zIndex={10} height={{ base: "auto", md: 200 }}>
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

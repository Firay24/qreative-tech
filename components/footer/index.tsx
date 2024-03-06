"use client";
import {
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  return (
    <Stack bgColor="primary.yellow" marginTop={5} alignItems="center">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        width={"full"}
        paddingX={{ base: 5, md: 12 }}
        paddingY={5}
      >
        <Stack alignItems="center">
          <Image src={LogoImg} alt="logo" />
          {isMobile ? (
            <Text fontSize="14px">Copyright © 2024 Templates</Text>
          ) : null}
        </Stack>
        <Stack textAlign="center">
          <Text fontWeight="semibold">Layanan Lain</Text>
          <HStack gap={1} fontSize="14px">
            <Text _hover={{ color: "white" }}>
              <Link href="#">Jasa design Grafis</Link>
            </Text>
            <Text>|</Text>
            <Text _hover={{ color: "white" }}>
              <Link href="#">Jasa logo</Link>
            </Text>
            <Text>|</Text>
            <Text _hover={{ color: "white" }}>
              <Link href="#"> UI/UX Design</Link>
            </Text>
          </HStack>
        </Stack>
        {!isMobile ? (
          <Text fontSize="14px">Copyright © 2024 Templates</Text>
        ) : null}
      </Flex>
    </Stack>
  );
};

export default Footer;

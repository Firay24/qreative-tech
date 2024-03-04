import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack bgColor="primary.yellow" marginTop={5} alignItems="center">
      <Stack padding={5} alignItems="center" gap={4}>
        <Stack alignItems="center">
          <Image src={LogoImg} alt="logo" />
          <Text fontSize="14px">Copyright © 2024 Templates</Text>
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
      </Stack>
    </Stack>
  );
};

export default Footer;

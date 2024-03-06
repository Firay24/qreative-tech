import { HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AbaoutImg from "@/assets/aboutme.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import CatImg from "@/assets/cat.png";

const AboutSections = () => {
  return (
    <Stack bgColor="#FBFBFB" position="relative" marginTop={14}>
      <Stack
        position="absolute"
        top={-36}
        maxWidth="full"
        left={{ base: "20%", md: "50%" }}
      >
        <Image src={CatImg} alt="cat image" />
      </Stack>
      <Stack paddingX={5} paddingY={16} gap={8}>
        <Image src={AbaoutImg} alt="image about" />
        <Stack gap={4}>
          <Heading as="h2" size="xl" fontWeight="semibold">
            Tentang Kami
          </Heading>
          <Text color="#555454">
            Qreative Tech merupakan sebuah digital agency spesialis yang
            menyediakan layananan pembuatan website kebutuhan industri,
            perusahaan maupun personal. Qreative Tech dimulai pada tahun 2024,
            walaupun terbilang masih dini, kami akan memberikan pelayanan
            semaksimal mungkin dengan evaluasi berkala agar kami tetap terus
            berkembang.
          </Text>
          <HStack marginTop={6} fontWeight="bold" color="primary.gray">
            <Text>Read More</Text>
            <IoIosArrowRoundForward />
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutSections;

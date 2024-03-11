import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AbaoutImg from "@/assets/aboutme.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import CatImg from "@/assets/cat.png";
import Link from "next/link";

const AboutSections = () => {
  return (
    <Stack bgColor="#FBFBFB" position="relative" marginTop={14} id="about">
      <Stack
        position="absolute"
        top={-36}
        maxWidth="full"
        left={{ base: "20%", md: "40%" }}
      >
        <Image src={CatImg} alt="cat image" />
      </Stack>
      <Flex
        paddingY={16}
        paddingX={{ base: 5, md: 12 }}
        gap={{ base: 8, md: 14 }}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        width="full"
      >
        <Stack width={{ base: "60%", md: "40%" }}>
          <Image src={AbaoutImg} alt="image about" width={2000} />
        </Stack>
        <Stack gap={{ base: 4, md: 8 }} width={{ base: "full", md: "60%" }}>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
          >
            Tentang Kami
          </Heading>
          <Text color="#555454" fontSize={{ base: "16px", md: "20px" }}>
            Qreative Tech merupakan sebuah digital agency spesialis yang
            menyediakan layananan pembuatan website kebutuhan industri,
            perusahaan maupun personal. Qreative Tech dimulai pada tahun 2024,
            walaupun terbilang masih dini, kami akan memberikan pelayanan
            semaksimal mungkin dengan evaluasi berkala agar kami tetap terus
            berkembang.
          </Text>
          <Link href="/about">
            <HStack
              marginTop={6}
              fontWeight="bold"
              color="primary.gray"
              fontSize={{ base: "16px", md: "20px" }}
              _hover={{ color: "primary.dark" }}
            >
              <Text>Read More</Text>
              <IoIosArrowRoundForward />
            </HStack>
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default AboutSections;

// library
import React from "react";
import Image from "next/image";

// background image
import bgImg from "../../assets/bg.png";
import heroImg from "@/assets/hero.png";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HeroSections = () => {
  return (
    <Stack position="relative" id="home">
      <Flex
        zIndex={50}
        paddingX={{ base: 10, md: 14 }}
        gap={2}
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          minHeight={{ base: "60vh", md: 0 }}
          justifyContent="center"
          gap={{ base: 3, md: 6 }}
          width={{ base: "auto", md: "80%" }}
        >
          <Text>Selamat datang di Qreative Tech</Text>
          <Stack>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#1E1E1E"
            >
              <span
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  paddingLeft: 0,
                  paddingRight: 10,
                  borderRadius: 10,
                  lineHeight: 1.5,
                }}
              >
                Buat website
              </span>{" "}
              Murah dan Berkualitas Disini
            </Heading>
            <Text width="90%" fontSize={{ base: "16px", md: "18px" }}>
              Permudah aktivitas bisnis dan organisasi Anda dengan solusi
              digital kami. Dapatkan{" "}
              <span style={{ fontWeight: "bold" }}>
                kemudahan, harga terjangkau
              </span>{" "}
              dan <span style={{ fontWeight: "bold" }}>kualitas unggul</span>{" "}
              untuk mengoptimalkan potensi bisnis Anda.
            </Text>
          </Stack>
          <Button
            marginTop={3}
            rightIcon={<IoArrowForwardCircleOutline />}
            colorScheme="red"
            width="fit-content"
            size={{ base: "md", md: "lg" }}
            rounded="full"
          >
            Pesan Sekarang
          </Button>
        </Stack>
        <Stack width={{ base: "80%", md: "60%" }}>
          <Image
            src={heroImg}
            alt="hero image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Stack>
      </Flex>
      <Stack overflowX="hidden" zIndex={10}>
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

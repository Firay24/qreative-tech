// library
import React from "react";
import Image from "next/image";

// background image
import bgImg from "../../assets/bg.png";
import heroImg from "@/assets/hero.png";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HeroSections = () => {
  return (
    <Stack position="relative">
      <Stack
        zIndex={5}
        paddingX={5}
        gap={2}
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Stack minHeight="60vh" justifyContent="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color="#1E1E1E">
            <span
              style={{
                backgroundColor: "white",
                padding: 2,
                paddingLeft: 0,
                paddingRight: 10,
                borderRadius: 10,
              }}
            >
              Buat website
            </span>{" "}
            Murah dan Berkualitas Disini
          </Heading>
          <Text>
            Permudah aktivitas bisnis dan organisasi Anda dengan solusi digital
            kami. Dapatkan{" "}
            <span style={{ fontWeight: "bold" }}>
              kemudahan, harga terjangkau
            </span>{" "}
            dan <span style={{ fontWeight: "bold" }}>kualitas unggul</span>{" "}
            untuk mengoptimalkan potensi bisnis Anda.
          </Text>
          <Button
            marginTop={3}
            rightIcon={<IoArrowForwardCircleOutline />}
            colorScheme="red"
            width="fit-content"
          >
            Pesan Sekarang
          </Button>
        </Stack>
        <Stack width="80%">
          <Image
            src={heroImg}
            alt="hero image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Stack>
      </Stack>
      <Stack overflow="hidden" zIndex={1}>
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

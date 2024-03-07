// library
import React from "react";
import Image from "next/image";

// background image
import bgImg from "@/assets/bg.png";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HeroSections = () => {
  return (
    <Stack position="relative" id="home" marginTop={{ base: "8%", md: "2%" }}>
      <Flex
        zIndex={50}
        paddingX={{ base: 5, md: 12 }}
        gap={{ base: 5, md: 14 }}
        paddingY={10}
        minHeight={{ base: 0, md: "88vh" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Stack width={{ base: "full", md: "40%" }} gap={{ base: 2, md: 5 }}>
          <Text
            fontWeight={{ base: "normal", md: "medium" }}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Selamat datang di Qreative Tech
          </Text>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#1E1E1E"
          >
            <span style={{ lineHeight: 1.1 }}>
              Jasa pembuatan website murah dan terpercaya
            </span>
          </Heading>
          <Button
            marginTop={3}
            rightIcon={<IoArrowForwardCircleOutline />}
            colorScheme="red"
            width="fit-content"
          >
            Pesan Sekarang
          </Button>
        </Stack>
        <Stack
          gap={3}
          width={{ base: "full", md: "60%" }}
          fontSize={{ base: "16px", md: "20px" }}
        >
          <Text>
            Selain layanan web builder, layanan lain yaitu jasa design flyer,
            logo, id card dan lain-lain yang berkaitan dengan digital promote
            atau branding. Jadi, Qreative Tech berfokus pada layanan{" "}
            <span style={{ fontWeight: "bold" }}>digital kreatif</span> dan{" "}
            <span style={{ fontWeight: "bold" }}>tech service</span>.
          </Text>
          <Text>
            Qreative Tech dimulai pada tahun 2024, walaupun terbilang masih
            dini, kami akan memberikan pelayanan semaksimal mungkin dengan{" "}
            <span style={{ fontWeight: "bold" }}>evaluasi berkala</span> agar
            kami tetap terus berkembang.
          </Text>
          <Text>
            Kami berkomitmen untuk menjaga{" "}
            <span style={{ fontWeight: "bold" }}>kualitas pelayanan</span>,
            menerima segala kritik maupun saran customer dan melakukan layanan
            dengan sepenuh hati kepada customer. Kami berharap layanan kami
            dapat membantu customer dan sesuai dengan yang customer harapkan.
          </Text>
        </Stack>
      </Flex>
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

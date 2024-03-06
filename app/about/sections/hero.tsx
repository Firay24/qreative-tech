// library
import React from "react";
import Image from "next/image";

// background image
import bgImg from "@/assets/bg.png";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
        minHeight={{ base: 0, md: "100vh" }}
      >
        <Stack justifyContent="center">
          <Text>Selamat datang di Qreative Tech</Text>
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="#1E1E1E"
            marginTop={2}
          >
            Jasa pembuatan website murah dan terpercaya
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
        <Stack gap={3}>
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

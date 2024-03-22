"use client";
import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CallActionSections = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bgColor="primary.yellow"
      marginTop={5}
      paddingY={{ base: 5, md: 10 }}
      paddingX={{ base: 10, md: 12 }}
      width="full"
    >
      <Stack width={{ base: "full", md: "50%" }}>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="white"
          textAlign={{ base: "center", md: "start" }}
        >
          Buat website mu sekarang atau konsultasi gratis
        </Text>
      </Stack>
      <Flex
        gap={4}
        marginTop={3}
        width={{ base: "full", md: "50%" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Button
          rounded="full"
          colorScheme="red"
          size={{ base: "md", md: "lg" }}
          width={{ base: "full", md: "80%" }}
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20Order%20Website%20%0ATerima%20Kasih",
              "_blank"
            );
          }}
        >
          Pesan Sekarang
        </Button>
        <Button
          size={{ base: "md", md: "lg" }}
          rounded="full"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20konsultasi%20terkait%20website%20saya%0ATerima%20Kasih",
              "_blank"
            );
          }}
          width={{ base: "full", md: "80%" }}
        >
          Konsultasi Gratis
        </Button>
      </Flex>
    </Flex>
  );
};

export default CallActionSections;

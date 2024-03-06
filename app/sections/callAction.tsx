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
      paddingX={{ base: 5, md: 12 }}
      width="full"
    >
      <Stack width={{ base: "full", md: "50%" }}>
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
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
          onClick={() => console.log("tes1")}
          size={{ base: "md", md: "lg" }}
          width={{ base: "full", md: "80%" }}
        >
          Pesan Sekarang
        </Button>
        <Button
          size={{ base: "md", md: "lg" }}
          rounded="full"
          onClick={() => console.log("tes2")}
          width={{ base: "full", md: "80%" }}
        >
          Konsultasi Gratis
        </Button>
      </Flex>
    </Flex>
  );
};

export default CallActionSections;

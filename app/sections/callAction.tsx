"use client";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CallActionSections = () => {
  return (
    <Stack bgColor="primary.yellow" padding={5} marginTop={5}>
      <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
        Buat website mu sekarang atau konsultasi gratis
      </Text>
      <Stack gap={4} marginTop={3}>
        <Button
          rounded="full"
          colorScheme="red"
          onClick={() => console.log("tes1")}
        >
          Pesan Sekarang
        </Button>
        <Button rounded="full" onClick={() => console.log("tes2")}>
          Konsultasi Gratis
        </Button>
      </Stack>
    </Stack>
  );
};

export default CallActionSections;

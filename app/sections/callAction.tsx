import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CallActionSections = () => {
  return (
    <Stack bgColor="primary.yellow" padding={5} marginTop={5}>
      <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
        Buat website mu sekarang atau konsultasi gratis
      </Text>
      <Stack gap={4} marginTop={3}>
        <Button rounded="full" colorScheme="red">
          Pesan Sekarang
        </Button>
        <Button rounded="full">Konsultasi Gratis</Button>
      </Stack>
    </Stack>
  );
};

export default CallActionSections;

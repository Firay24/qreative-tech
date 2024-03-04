import { HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import FormContact from "./formContact";

const ContactSections = () => {
  return (
    <Stack>
      <Stack padding={5} gap={3}>
        <Stack gap={1}>
          <Text>KONTAK KAMI</Text>
          <Heading as="h2" size="xl" fontWeight="semibold">
            Hubungi Kami Sekarang
          </Heading>
          <Text>
            layanan 24/7 dengan dukungan online 24 jam. Ramah, responsif, &
            komunikatif
          </Text>
        </Stack>
        <Stack marginTop={4} fontWeight="medium" gap={3}>
          <HStack>
            <GoMail />
            <Text>qreativetech@gmail.com</Text>
          </HStack>
          <HStack>
            <FiPhone />
            <Text>(+62) 85231796284</Text>
          </HStack>
          <HStack alignItems="start">
            <Stack paddingY={1}>
              <SlLocationPin />
            </Stack>
            <Stack gap={0}>
              <Text>Jawa Timur, Indonesia</Text>
              <Text>Banyuwangi, 68482</Text>
            </Stack>
          </HStack>
        </Stack>

        {/* form */}
        <Stack>
          <FormContact />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactSections;

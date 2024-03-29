"use client";
import {
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import FormContact from "./formContact";
import TitleImg from "@/assets/title.png";
import Image from "next/image";

const ContactSections = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  return (
    <Stack id="contact">
      {!isMobile ? (
        <Stack position="absolute" bottom={"3%"} left={10} width="auto">
          <Image src={TitleImg} alt="title logo image" />
        </Stack>
      ) : null}
      <Flex
        direction={{ base: "column", md: "row" }}
        paddingY={{ base: 5, md: 10 }}
        paddingX={{ base: 10, md: 20 }}
        gap={3}
      >
        {/* text content */}
        <Stack
          width={{ base: "full", md: "50%" }}
          marginLeft={{ base: 0, md: 10 }}
        >
          <Stack gap={1}>
            <Text>KONTAK KAMI</Text>
            <Heading as="h2" size="xl" fontWeight="semibold">
              Hubungi Kami Sekarang
            </Heading>
            <Text fontSize={{ base: "16px", md: "18px" }}>
              layanan 24/7 dengan dukungan online 24 jam. Ramah, responsif, &
              komunikatif
            </Text>
          </Stack>
          <Stack
            marginTop={4}
            fontWeight="medium"
            gap={3}
            fontSize={{ base: "16px", md: "20px" }}
          >
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
        </Stack>

        {/* form */}
        <Stack width={{ base: "full", md: "50%" }} alignItems="center">
          <FormContact />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ContactSections;

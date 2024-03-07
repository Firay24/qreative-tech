"use client";
import {
  AspectRatio,
  Button,
  Flex,
  HStack,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import GaleryPortofolio from "./GaleryPortofolio";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const TabsSections = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  return (
    <Stack minHeight="80vh" overflow="hidden" marginTop={{ base: 0, md: 24 }}>
      <Tabs paddingTop={10}>
        <TabList border="none" paddingX={{ base: 5, md: 14 }}>
          <Tab
            _selected={{ borderColor: "primary.dark", fontWeight: "semibold" }}
          >
            Deskripsi
          </Tab>
          <Tab
            _selected={{ borderColor: "primary.dark", fontWeight: "semibold" }}
          >
            Demo
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex
              direction={{ base: "column", md: "row" }}
              paddingX={{ base: 5, md: 14 }}
              paddingBottom={10}
              gap={{ base: 0, md: 10 }}
            >
              <Stack
                fontSize={{ base: "16px", md: "18px" }}
                width={{ base: "full", md: "70%" }}
                gap={3}
              >
                <Text>
                  Selain layanan web builder, layanan lain yaitu jasa design
                  flyer, logo, id card dan lain-lain yang berkaitan dengan
                  digital promote atau branding. Jadi, Qreative Tech berfokus
                  pada layanan digital kreatif dan tech service.
                </Text>
                <Text>
                  Qreative Tech dimulai pada tahun 2024, walaupun terbilang
                  masih dini, kami akan memberikan pelayanan semaksimal mungkin
                  dengan evaluasi berkala agar kami tetap terus berkembang.
                </Text>
              </Stack>
              <Stack
                marginTop={{ base: 4, md: 0 }}
                fontSize={{ base: "16px", md: "18px" }}
              >
                <Text fontWeight={"semibold"}>Berikut fitur pada sistem:</Text>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
              </Stack>
            </Flex>
            <Stack marginX={-5}>
              <GaleryPortofolio />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack
              paddingX={{ base: 0, md: 14 }}
              alignItems="center"
              marginTop={{ base: 2, md: 4 }}
            >
              <Stack width={{ base: "full", md: "70%" }}>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/eKdkigGYFpE?si=IpFbhhQRIlPI0ah8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </AspectRatio>
                <Stack
                  alignItems="center"
                  gap={{ base: 3, md: 6 }}
                  marginTop={6}
                >
                  <Heading as="h2" size={{ base: "md", md: "xl" }}>
                    Pesan Website seperti ini sekarang
                  </Heading>
                  <Flex gap={4} direction={{ base: "column", md: "row" }}>
                    <Button
                      rounded="full"
                      colorScheme="red"
                      rightIcon={<IoArrowForwardCircleOutline />}
                      size={{ base: "md", md: "lg" }}
                    >
                      Pesan Sekarang
                    </Button>
                    <Button rounded="full" size={{ base: "md", md: "lg" }}>
                      Konsultasi Dulu
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default TabsSections;

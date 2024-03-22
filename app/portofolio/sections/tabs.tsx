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
} from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import GaleryPortofolio from "./GaleryPortofolio";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const TabsSections = ({
  details,
  features,
  demoImg,
  techImg,
  demoLink,
  title,
}: {
  details: string[];
  features: string[];
  demoImg: StaticImageData[];
  techImg: StaticImageData[];
  demoLink: string;
  title: string;
}) => {
  return (
    <Stack minHeight="80vh" overflow="hidden" marginTop={{ base: 0, md: 24 }}>
      <Tabs paddingTop={10}>
        <TabList border="none" paddingX={{ base: 10, md: 14 }}>
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
                <Text>{details && details[0]}</Text>
                <Text>{details && details[1]}</Text>
              </Stack>
              <Stack
                marginTop={{ base: 4, md: 0 }}
                fontSize={{ base: "16px", md: "18px" }}
              >
                <Text fontWeight={"semibold"}>Berikut fitur pada sistem:</Text>
                {features &&
                  features.map((item: string, index: number) => (
                    <HStack key={index}>
                      <BsCheckCircleFill color="gray" />
                      <Text>{item}</Text>
                    </HStack>
                  ))}
              </Stack>
            </Flex>
            <Stack marginX={-5}>
              <GaleryPortofolio imagesList={demoImg && demoImg} />
            </Stack>
            <Stack marginTop={5}>
              <Flex width="full" gap={6} justifyContent="center" wrap="wrap">
                {techImg &&
                  techImg.map((item: StaticImageData, index: number) => (
                    <Stack
                      key={index}
                      width={200}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image src={item} alt="tech logo" />
                    </Stack>
                  ))}
              </Flex>
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
                    src={demoLink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    style={{ borderRadius: "10px" }}
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
                    <Link
                      href={`https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20Order%20Website%20Paket%20${
                        title === "Premium Middle"
                          ? "Premium"
                          : title === "Basic Web"
                          ? "Basic"
                          : "Platinum"
                      }%0ATerima%20Kasih`}
                    >
                      <Button
                        as="a"
                        rounded="full"
                        colorScheme="red"
                        rightIcon={<IoArrowForwardCircleOutline />}
                        size={{ base: "md", md: "lg" }}
                        target="_blank"
                        width={"full"}
                      >
                        Pesan Sekarang
                      </Button>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20konsultasi%20terkait%20website%20saya%0ATerima%20Kasih">
                      <Button
                        as="a"
                        rounded="full"
                        size={{ base: "md", md: "lg" }}
                        target="_blank"
                        width="full"
                      >
                        Konsultasi Dulu
                      </Button>
                    </Link>
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

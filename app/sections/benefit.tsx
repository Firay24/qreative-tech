"use client";

// library
import {
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

// assets
import Cat from "@/assets/cat.png";
import Trace from "@/assets/fit.png";

// data
import { benefits } from "./data";

const BenefitSection = () => {
  return (
    <Stack position="relative">
      {/* image */}
      <Stack
        position="absolute"
        width="100px"
        left={{ base: 5, md: "20%" }}
        top={{ base: "17%", md: 8 }}
      >
        <Image src={Cat} alt="cat" />
      </Stack>

      <Stack position="absolute" width="100px" bottom={64} right={1}>
        <Image src={Trace} alt="cat's trace" />
      </Stack>

      <Stack
        paddingY={{ base: 5, md: 10 }}
        paddingX={{ base: 10, md: 12 }}
        color="primary.dark"
        textAlign="center"
        gap={{ base: 2, md: 5 }}
        minHeight={{ base: 0, md: "60vh" }}
        justifyContent="center"
      >
        {/* heading */}
        <Stack>
          <Heading as="h2" size="xl" fontWeight="medium">
            Jasa Pembuatan{" "}
            <span style={{ fontWeight: "bold", color: "#EFA622" }}>
              Website
            </span>
          </Heading>
          <Text>
            Jangkau Lebih{" "}
            <span style={{ fontWeight: "bold" }}>Banyak Pelanggan</span> dengan
            Website Profesional Anda!
          </Text>
        </Stack>

        {/* benefit items */}
        <SimpleGrid
          marginTop={{ base: 5, md: 10 }}
          spacing={8}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {benefits.map(
            (
              item: { title: string; desc: string; icon: IconType },
              index: number
            ) => (
              <GridItem key={index}>
                <Stack alignItems="center">
                  <Icon
                    padding={3}
                    rounded="xl"
                    bgColor="primary.light"
                    width="fit-content"
                    fontSize="45px"
                    as={item.icon}
                  />
                  <Text fontWeight="semibold" fontSize="20px">
                    {item.title}
                  </Text>
                  <Text>{item.desc}</Text>
                </Stack>
              </GridItem>
            )
          )}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default BenefitSection;

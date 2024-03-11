import {
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardChart from "./cardChart";
import { services } from "../data";
import ChartProps from "@/types/chart";
import TitleImg from "@/assets/coin.png";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <Stack position="relative" id="service">
      <Stack position="absolute">
        <Image src={TitleImg} alt="coint img" />
      </Stack>
      <Stack
        paddingY={{ base: 5, md: 10 }}
        paddingX={{ base: 5, md: 12 }}
        textAlign="center"
        gap={6}
      >
        {/* heading */}
        <Stack>
          <Heading as="h2" size="xl" fontWeight="medium">
            <span style={{ fontWeight: "bold", color: "#EFA622" }}>
              Paket Layanan
            </span>{" "}
            untuk Anda
          </Heading>
          <Text>
            Harga bisa <span style={{ fontWeight: "bold" }}>nego</span> sesuai
            keinginan dan kebutuhan anda
          </Text>
        </Stack>

        {/* body content */}
        <Flex
          gap={4}
          direction={{ base: "column", md: "row" }}
          alignItems="stretch"
          wrap="wrap"
          width="full"
          justifyContent="center"
        >
          {services.map((item: ChartProps, index: number) => (
            <CardChart key={index} {...item} />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default ServicesSection;

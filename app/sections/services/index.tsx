import {
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
        paddingX={{ base: 10, md: 12 }}
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
          alignItems="flex-start"
          wrap="wrap"
          width="full"
          justifyContent="center"
        >
          {services.map((item: ChartProps, index: number) => (
            <CardChart key={index} {...item} />
          ))}
        </Flex>

        {/* adds on */}
        <Stack alignItems={"center"}>
          <Stack>
            <Heading as="h2" size="xl" fontWeight="medium">
              Optional Add-ons
            </Heading>
            <Text>
              <span style={{ fontWeight: "bold" }}>Layanan tambahan</span> yang
              mungkin Anda butuhkan
            </Text>
          </Stack>
          <Tabs variant="soft-rounded" colorScheme="yellow" marginTop={4}>
            <TabList>
              <Tab>Layanan Teknis</Tab>
              <Tab>Layanan non-Teknis</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesSection;

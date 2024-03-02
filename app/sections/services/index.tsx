import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import CardChart from "./cardChart";
import { services } from "../data";
import ChartProps from "@/types/chart";

const ServicesSection = () => {
  return (
    <Stack>
      <Stack padding={5} textAlign="center">
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
        <Stack>
          {services.map((item: ChartProps, index: number) => (
            <CardChart key={index} {...item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesSection;

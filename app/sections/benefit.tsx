"use client";

// library
import { Heading, Icon, Stack, Text } from "@chakra-ui/react";
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
    <Stack>
      {/* image */}
      <Stack position="absolute" width="100px" left={5}>
        <Image src={Cat} alt="cat" />
      </Stack>

      <Stack position="absolute" width="100px" bottom={64} right={1}>
        <Image src={Trace} alt="cat's trace" />
      </Stack>

      <Stack padding={5} color="primary.dark" textAlign="center">
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
        <Stack alignItems="center" marginTop={5} gap={8}>
          {benefits.map(
            (
              item: { title: string; desc: string; icon: IconType },
              index: number
            ) => (
              <Stack key={index} alignItems="center">
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
            )
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BenefitSection;

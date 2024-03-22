import ChartProps from "@/types/chart";
import { Button, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CardChart = ({ paket, price, desc, items, isMain }: ChartProps) => {
  return (
    <Stack
      bgColor="#FFFCF8"
      border="1px"
      borderColor="gray.300"
      rounded="xl"
      marginTop={5}
      height="auto"
      minWidth="290px"
    >
      <Stack
        alignItems="center"
        backgroundColor={isMain ? "primary.yellow" : "primary.grayDark"}
        roundedTop="xl"
        color={isMain ? "primary.dark" : "white"}
        paddingX={3}
        paddingY={8}
        gap={1}
      >
        <Text fontWeight="semibold" fontSize="20px">
          {paket}
        </Text>
        <Stack position="relative" width="fit-content">
          <Stack position="absolute" left={-10}>
            <Text fontStyle="italic" fontWeight="medium">
              start
            </Text>
          </Stack>
          <Text fontSize="40px" fontWeight="semibold">
            {price}
          </Text>
        </Stack>
        <Stack paddingX={6}>
          <Text fontWeight="medium" color={isMain ? "yellow.700" : "gray.400"}>
            {desc}
          </Text>
        </Stack>
      </Stack>

      <Stack height="full">
        <Stack marginY={6} paddingX={5} color="primary.gray" gap={4}>
          {items.map((item: string, index: number) => (
            <HStack key={index}>
              <FaCircleCheck />
              <Text color="primary.dark">{item}</Text>
            </HStack>
          ))}
        </Stack>
        <Spacer />
        <Stack paddingX={3} marginBottom={8}>
          <Link
            href={`https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20Order%20Website%20Paket%20${
              paket === "Premium Middle"
                ? "Premium"
                : paket === "Basic Web"
                ? "Basic"
                : "Platinum"
            }%0ATerima%20Kasih`}
          >
            <Button
              bgColor={isMain ? "primary.yellow" : "primary.grayDark"}
              _hover={{
                backgroundColor: isMain ? "yellow.500" : "gray.700",
              }}
              rounded="full"
              color={isMain ? "primary.dark" : "white"}
              as="a"
              target="_blank"
            >
              Get Started
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardChart;

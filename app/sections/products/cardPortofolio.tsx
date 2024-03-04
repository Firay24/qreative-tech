import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import PortofolioProps from "@/types/portofolio";

const CardPortofolio = ({ title, desc, img }: PortofolioProps) => {
  return (
    <Stack
      width="full"
      border="1px"
      borderColor="gray.300"
      gap={0}
      rounded="md"
      marginTop={4}
      position="relative"
      // minHeight="365px"
    >
      <HStack
        justifyContent="space-between"
        paddingX={3}
        paddingY={2}
        color="gray.400"
      >
        <BsThreeDots />
        <HStack>
          <MdKeyboardArrowLeft />
          <Text color="gray.600">
            <MdKeyboardArrowRight />
          </Text>
        </HStack>
      </HStack>
      <Stack>
        <Image src={img} alt="portofolio image" />
      </Stack>
      <Stack marginTop={3} paddingX={3} paddingBottom={5} roundedBottom="md">
        <Text fontSize="20px" fontWeight="semibold">
          {title}
        </Text>
        <Text color="primary.gray" fontWeight="medium">
          {desc}
        </Text>
        <HStack fontWeight="bold" color="primary.gray">
          <Text>Read more</Text>
          <GoArrowRight />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default CardPortofolio;

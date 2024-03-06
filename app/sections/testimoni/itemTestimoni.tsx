import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AvatarImg from "@/assets/avatar.png";
import { FaStar } from "react-icons/fa6";
import TestimoniProps from "@/types/testimoni";

const ItemTestimoni = ({ testimoni, name, role, img }: TestimoniProps) => {
  return (
    <Stack alignItems="center" gap={5} paddingBottom={5}>
      <HStack color="primary.yellow" fontSize={{ base: "16px", md: "18px" }}>
        {[...Array(5)].map((_, index: number) => (
          <FaStar key={index} />
        ))}
      </HStack>
      <Text
        fontWeight="medium"
        color="primary.gray"
        width={{ base: "full", md: "70%" }}
        fontSize={{ base: "16px", md: "20px" }}
      >
        {`"${testimoni}"`}
      </Text>
      <HStack gap={3}>
        <Avatar src={img.src} name="avatar" border="1px" />
        <Stack gap={0} textAlign="left">
          <Text fontWeight="semibold" fontSize={{ base: "16px", md: "18px" }}>
            {name}
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="primary.gray">
            {role}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default ItemTestimoni;

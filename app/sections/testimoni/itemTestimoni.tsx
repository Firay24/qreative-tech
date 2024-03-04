import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AvatarImg from "@/assets/avatar.png";
import { FaStar } from "react-icons/fa6";
import TestimoniProps from "@/types/testimoni";

const ItemTestimoni = ({ testimoni, name, role, img }: TestimoniProps) => {
  return (
    <Stack alignItems="center" gap={5}>
      <HStack color="primary.yellow">
        {[...Array(5)].map((_, index: number) => (
          <FaStar key={index} />
        ))}
      </HStack>
      <Text fontWeight="medium" color="primary.gray">
        {`"${testimoni}"`}
      </Text>
      <HStack gap={3}>
        <Avatar src={img.src} name="avatar" border="1px" />
        <Stack gap={0} textAlign="left">
          <Text fontWeight="semibold" fontSize="16px">
            {name}
          </Text>
          <Text fontSize="14px" color="primary.gray">
            {role}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default ItemTestimoni;

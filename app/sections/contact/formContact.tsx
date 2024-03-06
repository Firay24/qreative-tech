import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

const FormContact = () => {
  const fields = ["John Carter", "example@email.com", "6285231796284"];
  return (
    <Stack
      gap={5}
      bgColor="#F2F1FA"
      paddingX={4}
      paddingY={7}
      marginTop={5}
      rounded="xl"
      width={{ base: "full", md: "60%" }}
    >
      {fields.map((item: string, index: number) => (
        <Input
          key={index}
          variant="filled"
          placeholder={item}
          bgColor="white"
          rounded="full"
        />
      ))}
      <Textarea
        variant="filled"
        placeholder="Please type your message here..."
        bgColor="white"
        rounded="xl"
        rows={4}
      />
      <Stack marginTop={3}>
        <Button
          bgColor="primary.yellow"
          _hover={{ bgColor: "yellow.500" }}
          rounded="full"
          width="full"
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
};

export default FormContact;

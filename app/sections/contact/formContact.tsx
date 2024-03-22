"use client";
import convertToTitleCase from "@/utils/convertToTileCase";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const FormContact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
      <Input
        variant="filled"
        placeholder="John Carter"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        bgColor="white"
        rounded="full"
      />
      <Input
        variant="filled"
        placeholder="example@email.com"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        bgColor="white"
        rounded="full"
      />
      <Input
        variant="filled"
        placeholder="6285231796284"
        value={phone}
        onChange={(e: any) => setPhone(e.target.value)}
        bgColor="white"
        rounded="full"
      />
      <Textarea
        variant="filled"
        placeholder="Please type your message here..."
        bgColor="white"
        rounded="xl"
        rows={4}
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <Stack marginTop={3}>
        <Link
          href={`https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20${encodeURIComponent(
            convertToTitleCase(name)
          )}%0AEmail%3A%20${email}%0A${encodeURIComponent(
            message
          )}%0ATerima%20Kasih%22`}
          target="_blank"
        >
          <Button
            bgColor="primary.yellow"
            _hover={{ bgColor: "yellow.500" }}
            rounded="full"
            width="full"
          >
            Send Message
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default FormContact;

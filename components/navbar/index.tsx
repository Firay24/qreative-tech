"use client";

// library
import React, { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Fade,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

// assets
import LogoImg from "@/assets/logo.png";

// icons
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menus = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Service",
      path: "/service",
      isAccordion: true,
      childs: ["Basic Web", "Premium Middle", "Platinum Advance"],
    },
    {
      label: "Product",
      path: "/product",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <Stack
      alignItems="center"
      width="full"
      zIndex={100}
      position={"fixed"}
      top={0}
      minHeight="100vh"
      bgColor={isOpen ? "rgba(0, 0, 0, 0.62)" : ""}
      gap={0}
    >
      <HStack
        justifyContent="space-between"
        width="full"
        bgColor="primary.yellow"
        paddingX={4}
        paddingY={3}
      >
        <Stack width="45%">
          <Image
            src={LogoImg}
            alt="logo image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Stack>
        <IconButton
          variant="ghost"
          aria-label="menu"
          onClick={() => setIsOpen(!isOpen)}
          color="primary.dark"
          fontSize="32px"
        >
          {isOpen ? <IoMdClose /> : <IoIosMenu />}
        </IconButton>
      </HStack>

      {/* menu section */}
      <Fade in={isOpen}>
        <Stack
          left={0}
          width="full"
          position="fixed"
          bgColor="white"
          overflow="hidden"
          padding={6}
          gap={4}
        >
          {menus.map(
            (
              item: {
                label: string;
                path: string;
                isAccordion?: boolean;
                childs?: string[];
              },
              index: number
            ) =>
              !item.isAccordion ? (
                <Text
                  key={index}
                  fontWeight="medium"
                  color="primary.dark"
                  width="full"
                  textAlign="center"
                >
                  {item.label}
                </Text>
              ) : (
                <Accordion allowToggle>
                  <AccordionItem border="none">
                    <AccordionButton justifyContent="center" paddingY={0}>
                      <Text fontWeight="medium" color="primary.dark">
                        {item.label}
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel paddingBottom={0}>
                      <Stack gap={4}>
                        {item.childs?.map((menu: string, index: number) => (
                          <Text
                            key={index}
                            fontWeight="medium"
                            color="primary.dark"
                            width="full"
                            textAlign="center"
                          >
                            {menu}
                          </Text>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )
          )}
        </Stack>
      </Fade>
    </Stack>
  );
};

export default Navbar;

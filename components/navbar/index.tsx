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
  Button,
  Fade,
  HStack,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

// assets
import LogoImg from "@/assets/logo.png";

// icons
import { IoIosMenu, IoMdClose } from "react-icons/io";
import MenuList from "./menuList";
import { menus } from "../data";
import MenusProps from "@/types/menus";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownMenu from "./dropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  return (
    <Stack
      alignItems="center"
      width="full"
      zIndex={100}
      position={"fixed"}
      top={0}
      minHeight={isOpen ? "100vh" : 0}
      bgColor={isOpen ? "rgba(0, 0, 0, 0.62)" : ""}
      gap={0}
    >
      <HStack
        justifyContent="space-between"
        width="full"
        bgColor="primary.yellow"
        paddingX={{ base: 4, md: 6 }}
        paddingY={{ base: 3, md: 6 }}
      >
        <Stack width={{ base: "45%", md: "10%" }}>
          <Image
            src={LogoImg}
            alt="logo image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </Stack>

        {isMobile ? (
          <IconButton
            variant="ghost"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            color="primary.dark"
            fontSize="32px"
          >
            {isOpen ? <IoMdClose /> : <IoIosMenu />}
          </IconButton>
        ) : (
          <HStack gap={3}>
            {menus.map((item: MenusProps, index: number) => (
              <>
                {item.isAccordion && item.childs ? (
                  <DropDownMenu items={item.childs} label={item.label} />
                ) : (
                  <Link key={index} href={item.path}>
                    <Stack
                      paddingY={1}
                      paddingX={3}
                      _hover={{ bgColor: "white", rounded: "full" }}
                    >
                      <Text fontWeight="medium">{item.label}</Text>
                    </Stack>
                  </Link>
                )}
              </>
            ))}
          </HStack>
        )}
        {!isMobile ? (
          <Button
            rounded="full"
            bgColor="white"
            _hover={{ bgColor: "gray.50" }}
          >
            Cek Harga
          </Button>
        ) : null}
      </HStack>

      {/* menu section */}
      <MenuList isOpen={isOpen} />
    </Stack>
  );
};

export default Navbar;

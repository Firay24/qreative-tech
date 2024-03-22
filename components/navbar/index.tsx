"use client";

// library
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
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
import DropDownMenu from "./dropDown";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const location = usePathname();

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
        paddingX={{ base: 10, md: 14 }}
        paddingY={{ base: 3, md: 6 }}
      >
        <Stack width={{ base: "35%", md: "12%" }}>
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
          <HStack gap={3} cursor="pointer">
            {menus.map((item: MenusProps, index: number) => (
              <>
                {item.isAccordion && item.childs ? (
                  <DropDownMenu items={item.childs} label={item.label} />
                ) : location !== "/" ? (
                  <NextLink href={item.path}>
                    <Stack
                      paddingY={1}
                      paddingX={3}
                      _hover={{ bgColor: "white", rounded: "full" }}
                    >
                      <Text fontWeight="medium">{item.label}</Text>
                    </Stack>
                  </NextLink>
                ) : (
                  <Link
                    key={index}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                  >
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
          <Link to="service" smooth={true} duration={500} spy={true}>
            <Button
              rounded="full"
              bgColor="white"
              _hover={{ bgColor: "gray.50" }}
            >
              Cek Harga
            </Button>
          </Link>
        ) : null}
      </HStack>

      {/* menu section */}
      <MenuList isOpen={isOpen} />
    </Stack>
  );
};

export default Navbar;

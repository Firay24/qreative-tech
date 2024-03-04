"use client";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const ButtonScrollUp = () => {
  return (
    <Link to="home" smooth={true} duration={500} spy={true}>
      <IconButton
        aria-label="button scroll up"
        rounded="full"
        bgColor="primary.yellow"
        _hover={{ bgColor: "yellow.600" }}
      >
        <FaArrowUp />
      </IconButton>
    </Link>
  );
};

export default ButtonScrollUp;

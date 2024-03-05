import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeroSections from "../sections/hero";
import TabsSections from "../sections/tabs";
import GaleryPortofolio from "../sections/GaleryPortofolio";

const DetailPortofolioPage = () => {
  return (
    <Stack>
      <HeroSections />
      <TabsSections />
      <GaleryPortofolio />
    </Stack>
  );
};

export default DetailPortofolioPage;

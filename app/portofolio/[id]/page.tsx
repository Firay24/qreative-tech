import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeroSections from "../sections/hero";
import TabsSections from "../sections/tabs";

const DetailPortofolioPage = () => {
  return (
    <Stack>
      <HeroSections />
      <TabsSections />
    </Stack>
  );
};

export default DetailPortofolioPage;

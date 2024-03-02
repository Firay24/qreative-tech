import { Stack } from "@chakra-ui/react";
import HeroSections from "./sections/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <Stack zIndex={20}>
      <HeroSections />
    </Stack>
  );
}

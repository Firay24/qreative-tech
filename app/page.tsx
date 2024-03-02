import { Stack } from "@chakra-ui/react";
import HeroSections from "./sections/hero";
import BenefitSection from "./sections/benefit";
import ServicesSection from "./sections/services";
import CallActionSections from "./sections/callAction";

export default function Home() {
  return (
    <Stack zIndex={20}>
      <HeroSections />
      <BenefitSection />
      <ServicesSection />
      <CallActionSections />
    </Stack>
  );
}

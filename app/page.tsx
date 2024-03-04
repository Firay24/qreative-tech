import { Stack } from "@chakra-ui/react";
import HeroSections from "./sections/hero";
import BenefitSection from "./sections/benefit";
import ServicesSection from "./sections/services";
import CallActionSections from "./sections/callAction";
import ProductSections from "./sections/products";
import AboutSections from "./sections/about";
import TestimoniSections from "./sections/testimoni";
import ContactSections from "./sections/contact";
import ButtonScrollUp from "@/components/buttonScroll";

export default function Home() {
  return (
    <Stack zIndex={20}>
      <Stack position="fixed" bottom={5} right={5} zIndex={5}>
        <ButtonScrollUp />
      </Stack>
      <HeroSections />
      <BenefitSection />
      <ServicesSection />
      <CallActionSections />
      <ProductSections />
      <AboutSections />
      <TestimoniSections />
      <ContactSections />
    </Stack>
  );
}

import {
  AspectRatio,
  Button,
  HStack,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import GaleryPortofolio from "./GaleryPortofolio";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const TabsSections = () => {
  return (
    <Stack minHeight="80vh">
      <Tabs paddingTop={10}>
        <TabList border="none" paddingX={5}>
          <Tab
            _selected={{ borderColor: "primary.dark", fontWeight: "semibold" }}
          >
            Deskripsi
          </Tab>
          <Tab
            _selected={{ borderColor: "primary.dark", fontWeight: "semibold" }}
          >
            Demo
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack paddingX={5} paddingBottom={10}>
              <Text>
                Selain layanan web builder, layanan lain yaitu jasa design
                flyer, logo, id card dan lain-lain yang berkaitan dengan digital
                promote atau branding. Jadi, Qreative Tech berfokus pada layanan
                digital kreatif dan tech service.
              </Text>
              <Text>
                Qreative Tech dimulai pada tahun 2024, walaupun terbilang masih
                dini, kami akan memberikan pelayanan semaksimal mungkin dengan
                evaluasi berkala agar kami tetap terus berkembang.
              </Text>
              <Stack marginTop={4}>
                <Text fontWeight={"semibold"}>Berikut fitur pada sistem:</Text>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
                <HStack>
                  <BsCheckCircleFill color="gray" />
                  <Text>Design template basic</Text>
                </HStack>
              </Stack>
            </Stack>
            <Stack marginX={-5}>
              <GaleryPortofolio />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack width="full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/eKdkigGYFpE?si=IpFbhhQRIlPI0ah8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </AspectRatio>
              <Stack alignItems="center" gap={4} marginTop={6}>
                <Heading as="h2" size="md">
                  Pesan Website seperti ini sekarang
                </Heading>
                <Button
                  rounded="full"
                  colorScheme="red"
                  rightIcon={<IoArrowForwardCircleOutline />}
                >
                  Pesan Sekarang
                </Button>
                <Button rounded="full">Konsultasi Dulu</Button>
              </Stack>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default TabsSections;

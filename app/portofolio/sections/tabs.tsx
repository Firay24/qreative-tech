import {
  HStack,
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

const TabsSections = () => {
  return (
    <Stack paddingY={10} paddingX={5} minHeight="80vh">
      <Tabs>
        <TabList border="none">
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
            <Stack>
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
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default TabsSections;

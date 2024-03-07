"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const AccordionVision = () => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>([true, false, false]);

  const toggleExpanded = (index: number) => {
    setIsExpanded((prevState) => {
      const newState = Array(prevState.length).fill(false);
      const prevArray = [...prevState];
      newState[index] = !prevArray[index];
      return newState;
    });
  };

  return (
    <Stack paddingY={10} paddingX={5} width="100%">
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem border="none">
          <AccordionButton paddingY={3} onClick={() => toggleExpanded(0)}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Visi Kami
            </Box>
            {/* <AccordionIcon /> */}
            <Stack
              padding={1}
              bgColor={isExpanded[0] ? "primary.yellow" : "gray.200"}
              rounded="full"
              color={isExpanded[0] ? "white" : "primary.dark"}
            >
              {isExpanded[0] ? <FiX /> : <FiPlus />}
            </Stack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            Memudahkan bisnis UMKM, CV atau personal bisnis dalam proses
            operasional, management dan branding/promote produk bisnis berbasis
            digitalisasi. Upaya ini dilakukan sebagai bentuk partisipasi dalam
            mewujudkan percepatan transformasi digital Indonesia.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderBottom="none">
          <AccordionButton paddingY={3} onClick={() => toggleExpanded(1)}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Misi Kami
            </Box>
            <Stack
              padding={1}
              bgColor={isExpanded[1] ? "primary.yellow" : "gray.200"}
              rounded="full"
              color={isExpanded[1] ? "white" : "primary.dark"}
            >
              {isExpanded[1] ? <FiX /> : <FiPlus />}
            </Stack>
          </AccordionButton>
          <AccordionPanel paddingY={4}>
            <UnorderedList spacing={3}>
              <ListItem>
                Bekerja dengan berorientasi memudahkan customer dalam
                menjalankan bisnis
              </ListItem>
              <ListItem>
                Bekerja dengan berorientasi ingin terus berkembang
              </ListItem>
              <ListItem>
                Fokus terhadap kebutuhan dan kepuasan customer untuk memberikan
                hasil maksimal
              </ListItem>
              <ListItem>
                Menjunjung tinggi kejujuran, responbility dan bekerja dengan
                sepenuh hati
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderBottom="none">
          <AccordionButton paddingY={3} onClick={() => toggleExpanded(2)}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Value Kami
            </Box>
            <Stack
              padding={1}
              bgColor={isExpanded[2] ? "primary.yellow" : "gray.200"}
              rounded="full"
              color={isExpanded[2] ? "white" : "primary.dark"}
            >
              {isExpanded[2] ? <FiX /> : <FiPlus />}
            </Stack>
          </AccordionButton>
          <AccordionPanel paddingY={4}>
            <Stack gap={4}>
              <Stack>
                <Text fontWeight="semibold">Inovatif</Text>
                <Text>
                  Berusaha menciptakan fitur dan karya yang inovatif dan kreatif
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="semibold">Totalitas</Text>
                <Text>Menyelesaikan project secara maksimal</Text>
              </Stack>
              <Stack>
                <Text fontWeight="semibold">Responsive</Text>
                <Text>
                  Tim berusaha semaksimal mungkin mudah dihubungi ketika
                  customer membutuhkan kami maupun sekadar berkonsultasi
                </Text>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default AccordionVision;

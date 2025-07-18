import ChartProps, { ItemsProps } from "@/types/chart";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CardChart = ({ paket, price, desc, items, isMain }: ChartProps) => {
  return (
    <Stack
      bgColor="#FFFCF8"
      border="1px"
      borderColor="gray.300"
      rounded="xl"
      marginTop={5}
      height="auto"
      minHeight={"500px"}
      minWidth="290px"
      width="28%"
      justifyContent={"space-between"}
    >
      <Stack
        alignItems="center"
        backgroundColor={isMain ? "primary.yellow" : "primary.grayDark"}
        roundedTop="xl"
        color={isMain ? "primary.dark" : "white"}
        paddingX={3}
        paddingY={8}
        gap={1}
      >
        <Text fontWeight="semibold" fontSize={{ base: "18px", md: "20px" }}>
          {paket}
        </Text>
        <Stack position="relative" width="fit-content">
          <Stack position="absolute" left={-10}>
            <Text fontStyle="italic" fontWeight="medium">
              start
            </Text>
          </Stack>
          <Text fontSize={{ base: "35px", md: "40px" }} fontWeight="semibold">
            {price}
          </Text>
        </Stack>
        <Stack paddingX={6}>
          <Text
            fontWeight="medium"
            fontSize={{ base: "14px", md: "16px" }}
            color={isMain ? "yellow.700" : "gray.400"}
          >
            {desc}
          </Text>
        </Stack>
      </Stack>

      <Accordion allowToggle>
        {items.map((item: ItemsProps, index: number) => {
          const hasService = item.service && item.service.length > 0;

          return (
            <AccordionItem key={index} border="none">
              <AccordionButton
                cursor={hasService ? "pointer" : "default"}
                _hover={!hasService ? { bg: "transparent" } : undefined}
              >
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  width="full"
                  textAlign="start"
                >
                  <GridItem>
                    <p>{item.paket}</p>
                  </GridItem>
                  <GridItem>
                    <p>{`IDR ${item.price}`}</p>
                  </GridItem>
                </Grid>

                {hasService && <AccordionIcon />}
              </AccordionButton>

              {hasService && (
                <AccordionPanel>
                  <Stack marginY={6} paddingX={5} color="primary.gray" gap={4}>
                    {item.service.map((service: string, index: number) => (
                      <HStack key={index} textAlign="left">
                        <FaCircleCheck />
                        <Text color="primary.dark">{service}</Text>
                      </HStack>
                    ))}
                  </Stack>
                </AccordionPanel>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>

      <Stack height="full">
        {/* <Spacer /> */}
        <Stack paddingX={3} marginBottom={4}>
          <Link
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=6285231796284&text=Halo%20Admin%20Qreative%20Tech%0ASaya%3A%20%3CISI%20NAMA%20ANDA%3E%0AMau%20Order%20Website%20Paket%20${
              paket === "Premium Middle"
                ? "Premium"
                : paket === "Basic Web"
                ? "Basic"
                : "Platinum"
            }%0ATerima%20Kasih`}
          >
            <Button
              bgColor={isMain ? "primary.yellow" : "primary.grayDark"}
              _hover={{
                backgroundColor: isMain ? "yellow.500" : "gray.700",
              }}
              rounded="full"
              color={isMain ? "primary.dark" : "white"}
              width="full"
            >
              Get Started
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardChart;

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Fade,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { menus } from "../data";
import MenusProps from "@/types/menus";
import Link from "next/link";

const MenuList = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Fade in={isOpen}>
      {isOpen ? (
        <Stack
          left={0}
          width="full"
          position="fixed"
          bgColor="white"
          overflow="hidden"
          padding={6}
          gap={4}
        >
          {menus.map((item: MenusProps, index: number) =>
            !item.isAccordion ? (
              <Text
                key={index}
                fontWeight="medium"
                color="primary.dark"
                width="full"
                textAlign="center"
              >
                {item.label}
              </Text>
            ) : (
              <Accordion allowToggle key={index}>
                <AccordionItem border="none">
                  <AccordionButton justifyContent="center" paddingY={0}>
                    <Text fontWeight="medium" color="primary.dark">
                      {item.label}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel paddingBottom={0}>
                    <Stack gap={4}>
                      {item.childs?.map(
                        (
                          menu: { label: string; path: string },
                          index: number
                        ) => (
                          <Link href={menu.path}>
                            <Text
                              key={index}
                              fontWeight="medium"
                              color="primary.dark"
                              width="full"
                              textAlign="center"
                            >
                              {menu.label}
                            </Text>
                          </Link>
                        )
                      )}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          )}
        </Stack>
      ) : null}
    </Fade>
  );
};

export default MenuList;
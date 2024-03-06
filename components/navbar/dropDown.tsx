import { Stack, Text } from "@chakra-ui/react";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDownMenu = ({
  items,
  label,
}: {
  items: { label: string; path: string }[];
  label: string;
}) => {
  const menu = (
    <Menu>
      {items.map((item: { label: string; path: string }, index: number) => (
        <Menu.Item key={index}>
          <Link href={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Stack
        paddingY={1}
        paddingX={3}
        _hover={{ bgColor: "white", rounded: "full" }}
      >
        <Text fontWeight="medium" cursor={"pointer"}>
          <Space>
            {label}
            <IoIosArrowDown />
          </Space>
        </Text>
      </Stack>
    </Dropdown>
  );
};

export default DropDownMenu;

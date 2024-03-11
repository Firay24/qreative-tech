"use client";
import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeroSections from "../sections/hero";
import TabsSections from "../sections/tabs";
import { useParams } from "next/navigation";
import PortofolioProps from "@/types/portofolio";
import { portofolios } from "@/app/sections/data";

const DetailPortofolioPage = () => {
  const location = useParams();
  const [data, setData] = useState<PortofolioProps[]>([]);

  useEffect(() => {
    const portofolioById = portofolios.filter(
      (item: PortofolioProps) => item.id.toString() === location.id
    );
    if (portofolioById) {
      setData(portofolioById);
    }
  }, [location]);
  return (
    <Stack>
      <HeroSections {...data[0]} />
      <TabsSections />
    </Stack>
  );
};

export default DetailPortofolioPage;

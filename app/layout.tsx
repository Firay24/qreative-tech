import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Stack, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qreative Tech",
  description: "Jasa pembuatan website",
  icons: [{ rel: "icon", url: "./favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Stack>
            <Navbar />
            <Stack marginTop={16}>{children}</Stack>
            <Footer />
          </Stack>
        </Providers>
      </body>
    </html>
  );
}

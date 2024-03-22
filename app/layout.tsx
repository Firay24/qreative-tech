import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Stack, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
            <Stack marginTop={12}>{children}</Stack>
            <Footer />
          </Stack>
        </Providers>
      </body>
    </html>
  );
}

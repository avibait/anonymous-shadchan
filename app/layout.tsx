import React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat, Lora, Roboto } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "700"], // adjust weights as needed
});

const lora = Lora({
  subsets: ["latin"],
  // weight: ["400", "700"], // adjust weights as needed
});

const roboto = Roboto({
  // weight
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
});

export const metadata: Metadata = {
  title: "Anonymous Shadchan",
  description: "Everyone is a Shadchan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Providers>
          {/* <Navigation /> */}
          {/* <Navbar
            position="sticky"
            className="bg-white shadow flex justify-center h-16"
          >
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/about">
                  How it works
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar> */}
          {children}

          <footer className="flex items-center justify-center py-12">
            <p className="text-center">
              © {new Date().getFullYear()} Anonymous Shadchan.
              <br />
              All rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

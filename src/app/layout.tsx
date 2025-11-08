import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/Navbar";

const inter = Inter();

export const metadata: Metadata = {
  title: "Next Js Landing Page",
  description: "Created landing Page using Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Navbar />
        <AuroraBackground>{children}</AuroraBackground>
      </body>
    </html>
  );
}

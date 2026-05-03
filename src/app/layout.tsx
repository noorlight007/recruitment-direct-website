import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ButtonEffects from "@/components/ButtonEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recruitment Directory - AI-Powered Recruitment Solutions",
  description: "RD, an AI-powered recruitment solution for efficient talent acquisition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Providers>
          {children}
          <ButtonEffects />
        </Providers>
      </body>
    </html>
  );
}

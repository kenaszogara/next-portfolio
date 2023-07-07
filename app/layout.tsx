import Script from "next/script";
import { Metadata } from "next";
import configData from "@/config/config.json";
import "../styles/globals.scss";
import fonts from "@/fonts";

export const metadata: Metadata = {
  title: configData.title,
  description: configData.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black-900 text-white-900 ${fonts}`}>{children}</body>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
    </html>
  );
}

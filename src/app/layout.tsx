import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Prefetching TanStack Query with Next.js 15",
  description:
    "This project shows how to prefetch data with Next.js 15 and TanStack Query.",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

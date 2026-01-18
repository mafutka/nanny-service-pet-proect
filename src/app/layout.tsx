import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nanny service app",
  description: "Hire nanny for kids, expirienced nannies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

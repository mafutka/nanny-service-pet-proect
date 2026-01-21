import type { Metadata } from "next";
import {AuthProvider} from "@/context/AuthContext"
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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

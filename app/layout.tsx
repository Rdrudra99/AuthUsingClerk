import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTH PROCESS USING CLERK AUTHENTICATION",
  description: "AUTHENTICATION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen">
          <ClerkLoading>
            <div className="flex flex-col items-center text-center mt-32">
              Loading...
            </div>
            <Navbar />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="mx-36">
              <div className="flex flex-col items-center text-center">
                <Navbar />
                {children}
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

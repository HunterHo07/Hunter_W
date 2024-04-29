import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunter Task1",
  description: "W Task 1",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="flex justify-center">
  <Button> hunter button </Button>
</div>

        <Toaster
          toastOptions={{
            style: {
              textAlign: "center",
            },
          }}
        />
      </body>
    </html>
  );
}

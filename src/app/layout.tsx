import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "RisingSun - Admin",
  description: "Manage User Information",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

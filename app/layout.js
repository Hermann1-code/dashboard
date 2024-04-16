'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
      <body >{children}</body>
    </html>
    </ThemeProvider>
    
  );
}

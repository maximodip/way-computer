import type React from "react";

import "@/app/globals.css";
import {Inter} from "next/font/google";

import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/sections/Header";
import {Footer} from "@/sections/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Way Computer - Premium PC Components",
  description: "Your one-stop shop for high-quality PC components, peripherals, and custom builds.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={inter.className}>
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

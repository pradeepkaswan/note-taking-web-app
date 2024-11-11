import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

import "./globals.css";
import { ToastProvider } from "@/providers/ToastProvider";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen font-sans antialiased">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}

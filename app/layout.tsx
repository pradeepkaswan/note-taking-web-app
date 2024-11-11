import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

import { ToastProvider } from "@/providers/ToastProvider";
import "./globals.css";

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
      <body className="h-screen bg-neutral-100 font-sans antialiased dark:bg-neutral-800">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}

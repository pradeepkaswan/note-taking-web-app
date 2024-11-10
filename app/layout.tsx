import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// const notoSerif = Noto_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-dvh bg-neutral-100 antialiased dark:bg-neutral-700">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

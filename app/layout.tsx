import type { Metadata } from "next";

import { inter, noto_serif, source_code_pro } from "@/components/ui/fonts";
import { ToastProvider } from "@/providers/toast-provider";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${noto_serif.variable} ${source_code_pro.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`min-h-screen bg-neutral-100 antialiased dark:bg-neutral-800`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}

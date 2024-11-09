import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans antialiased">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

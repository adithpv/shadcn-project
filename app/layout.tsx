import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/Theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Dashboard Demo | Modern UI Components",
  description:
    "A beautiful dashboard demo built with Next.js and Shadcn UI components. Features modern design, dark mode support, and responsive layouts.",
  keywords: [
    "shadcn",
    "dashboard",
    "next.js",
    "ui components",
    "modern design",
    "dark mode",
  ],
  authors: [{ name: "Adith" }],
  openGraph: {
    title: "Shadcn Dashboard Demo",
    description:
      "Explore modern UI components with our interactive dashboard demo",
    type: "website",
    locale: "en_US",
    siteName: "Shadcn Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Dashboard Demo",
    description: "A showcase of modern UI components and dashboard design",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="pt-20">
              <Navbar />
              <div className="px-4">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

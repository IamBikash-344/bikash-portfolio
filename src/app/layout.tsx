import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Great_Vibes, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.seoTitle,
  description: profile.seoDescription,
  keywords: [
    "Bikash Khiling",
    "Full-Stack Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Kathmandu",
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    url: siteUrl,
    siteName: profile.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${script.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script src="/extension-guard.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f4" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.owner.name} | ${PORTFOLIO_DATA.owner.title}`,
  description: `${PORTFOLIO_DATA.owner.name} is a professional Flutter Mobile App Developer with 3+ years experience building production apps, including Balaji Astro Guide with 1M+ downloads on Google Play.`,
  authors: [{ name: PORTFOLIO_DATA.owner.name }],
  creator: PORTFOLIO_DATA.owner.name,
  keywords: [
    "Azaruddin Khan",
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Android Developer",
    "Clean Architecture",
    "Bloc",
    "Cubit",
    "Balaji Astro Guide",
    "Appic Softwares LLP",
    "Google Play",
  ],
  metadataBase: new URL("https://azaruddinkhan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${PORTFOLIO_DATA.owner.name} — ${PORTFOLIO_DATA.owner.title}`,
    description: PORTFOLIO_DATA.hero.intro,
    url: "https://azaruddinkhan.dev",
    siteName: `${PORTFOLIO_DATA.owner.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.owner.name} - ${PORTFOLIO_DATA.owner.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.owner.name} — ${PORTFOLIO_DATA.owner.title}`,
    description: PORTFOLIO_DATA.hero.intro,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.owner.name,
    jobTitle: PORTFOLIO_DATA.owner.title,
    description: PORTFOLIO_DATA.hero.intro,
    url: "https://azaruddinkhan.dev",
    email: PORTFOLIO_DATA.owner.email,
    telephone: PORTFOLIO_DATA.owner.phone,
    sameAs: [PORTFOLIO_DATA.owner.linkedinUrl],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Android",
      "Cross-Platform Mobile Development",
      "Clean Architecture",
      "Bloc",
      "Cubit",
      "Firebase",
      "REST APIs",
      "WebSockets",
      "Agora Calling",
      "In-App Purchases",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Appic Softwares LLP",
    },
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col antialiased selection:bg-[#111111] selection:text-[#f4f4f4] dark:selection:bg-[#f4f4f4] dark:selection:text-[#111111]"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

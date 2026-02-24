import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNav from "@/components/assignova/ConditionalNav";
import AssignovaNavigation from "@/components/assignova/AssignovaNavigation";
import AssignovaFooter from "@/components/assignova/AssignovaFooter";
import WhatsappButton from "@/components/WhatsappButtion";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Assignova - Best Website Design & Development Company in India",
    template: "%s | Assignova",
  },
  description:
    "Assignova is a leading website design and development company in India offering custom web development, eCommerce solutions, UI/UX design, API integrations, and digital transformation services for businesses in India and abroad.",

  keywords: [
    "Assignova",
    "Website Design Company in India",
    "Web Development Company",
    "Custom Website Development",
    "eCommerce Development",
    "UI UX Design",
    "API Integration Services",
    "Software Development Company",
    "Best Web Design Agency",
  ],

  authors: [{ name: "Assignova Team" }],
  creator: "Assignova",
  publisher: "Assignova",

  metadataBase: new URL("https://assignova.com"), // replace with your actual domain

  openGraph: {
    title: "Assignova - Best Website Design & Development Company in India",
    description: "We build modern, scalable and high-performance websites and applications for startups and enterprises worldwide.",
    url: "https://assignova.com",
    siteName: "Assignova",
    images: [
      {
        url: "/og-image.jpg", // add this image in public folder
        width: 1200,
        height: 630,
        alt: "Assignova - Website Design & Development Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assignova - Website Design & Development Company",
    description: "Custom websites, eCommerce platforms, UI/UX design & API integrations built for growth.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <NextTopLoader
          color="#3b82f6"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
          zIndex={1600}
          showAtBottom={false}
        />
        <ConditionalNav />
        <main className="min-h-screen">{children}</main>
        <WhatsappButton />
        <AssignovaFooter />
      </body>
    </html>
  );
}

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
        {/* Google Tag Manager */}
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WWMWMR5S');</script>
{/* <!-- End Google Tag Manager --> */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWMWMR5S"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
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

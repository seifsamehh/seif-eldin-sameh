import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Parallax } from "./parallax";
import Script from "next/script";
import PreLoader from "@/shared/PreLoader";
import Header from "@/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F1F1" },
    { media: "(prefers-color-scheme: dark)", color: "#181823" },
  ],
};
export const metadata: Metadata = {
  title: "Seif Eldin Sameh | MERN Stack Web Developer",
  description:
    "Welcome to my corner of the internet! I'm Seif Eldin Sameh, a seasoned MERN stack web developer with over 3 years of hands-on experience.",
  generator: "Next.js",
  metadataBase: new URL("https://seif-eldin-sameh.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: "Seif Eldin Sameh | MERN Stack Web Developer",
  referrer: "origin-when-cross-origin",
  keywords: [
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Web Developer",
    "JavaScript Developer",
    "React.js, Node.js, Express.js Developer",
    "Passionate Coder",
    "Problem Solver",
    "Innovative Thinker",
    "MERN Stack",
    "Front-End Development",
    "Back-End Development",
    "Responsive Design",
    "Version Control",
    "Project Management",
    "Code Optimization",
    "Computer Science Degree",
    "Certifications",
    "Hire Me",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-eldin-sameh.vercel.app/" },
  ],
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/maskable_icon.png",
        color: "#181823",
      },
      {
        rel: "icon",
        url: "/assets/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        url: "/assets/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "Seif Eldin Sameh | MERN Stack Web Developer",
    description:
      "Welcome to my corner of the internet! I'm Seif Eldin Sameh, a seasoned MERN stack web developer with over 3 years of hands-on experience.",
    url: "https://seif-eldin-sameh.vercel.app/",
    siteName: "Seif Eldin Sameh | MERN Stack Web Developer",
    images: [
      {
        url: "/assets/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Seif's Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seif Eldin Sameh | MERN Stack Web Developer",
    description:
      "Welcome to my corner of the internet! I'm Seif Eldin Sameh, a seasoned MERN stack web developer with over 3 years of hands-on experience.",
    creator: "@seiffsameh",
    images: ["/assets/maskable_icon.png"],
  },
  verification: {
    google: "google",
    other: {
      me: ["seiffsameh00@gmail.com", "https://seif-eldin-sameh.vercel.app/"],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
};

// structure data
interface WebsiteData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  favicon: string;
  address: {
    "@type": string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    email: string;
  };
  description?: string;
  foundingDate?: string;
  founders?: string[];
  employees?: number;
  industry?: string;
  socialMedia?: {
    github?: string;
    linkedin?: string;
  };
}

const website: WebsiteData = {
  "@context": "https://schema.org",
  "@type": "website",
  name: "Seif Eldin",
  url: "https://seif-eldin-sameh.vercel.app/",
  logo: "https://i.imgur.com/KBSQCIy.png",
  favicon: "https://i.imgur.com/KBSQCIy.png",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Cairo Governorate",
    postalCode: "11835",
    addressCountry: "Egypt",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201060865699",
    email: "seiffsameh00@gmail.com",
  },
  description:
    "Welcome to my corner of the internet! I'm Seif Eldin Sameh, a seasoned MERN stack web developer with over 3 years of hands-on experience.",
  foundingDate: "January 16, 2024",
  founders: ["Seif Eldin Sameh"],
  industry: "Technology",
  socialMedia: {
    github: "https://github.com/seifsamehh",
    linkedin: "https://www.linkedin.com/in/seif-eldin-sameh-81b8661b7/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no">
      <body className={inter.className}>
        <Providers>
          <PreLoader />
          <Parallax>
            <Header />
            {children}
          </Parallax>
        </Providers>
        <Script
          id="structure-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </body>
    </html>
  );
}

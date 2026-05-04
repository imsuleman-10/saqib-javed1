import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saqibjaved.dev"),
  title: {
    default: "Muhammad Saqib Javed — Expert Laravel Developer & Full-Stack Engineer",
    template: "%s | Muhammad Saqib Javed",
  },
  description:
    "Official portfolio of Muhammad Saqib Javed. A specialist Laravel Developer and Frontend Engineer based in Lahore, Pakistan. Expert in building scalable web applications, RESTful APIs, and AI integrations.",
  keywords: [
    "Saqib Javed", 
    "Muhammad Saqib Javed", 
    "Laravel Developer Lahore", 
    "Full Stack Developer Pakistan", 
    "UCP Software Engineering", 
    "React Developer", 
    "Next.js Expert", 
    "PHP Developer",
    "Yashfeen Education System",
    "Web Developer Lahore"
  ],
  authors: [{ name: "Muhammad Saqib Javed" }],
  creator: "Muhammad Saqib Javed",
  publisher: "Muhammad Saqib Javed",
  alternates: {
    canonical: "https://saqibjaved.dev",
  },
  icons: {
    icon: "/Gemini_Generated_Image_oq7blxoq7blxoq7b.png",
    apple: "/Gemini_Generated_Image_oq7blxoq7blxoq7b.png",
  },
  openGraph: {
    title: "Muhammad Saqib Javed | Laravel & Full-Stack Developer",
    description: "Building high-performance web applications with Laravel and React. Explore my projects and professional journey.",
    url: "https://saqibjaved.dev",
    siteName: "Muhammad Saqib Javed Portfolio",
    images: [
      {
        url: "/Gemini_Generated_Image_oq7blxoq7blxoq7b.png",
        width: 800,
        height: 800,
        alt: "Muhammad Saqib Javed — Laravel Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saqib Javed | Laravel & Full-Stack Developer",
    description: "Expert web developer specializing in Laravel, React, and AI-powered apps.",
    images: ["/Gemini_Generated_Image_oq7blxoq7blxoq7b.png"],
    creator: "@saqibjaved",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Saqib Javed",
  "alternateName": ["Saqib Javed", "M. Saqib Javed"],
  "url": "https://saqibjaved.dev",
  "image": "https://saqibjaved.dev/Gemini_Generated_Image_oq7blxoq7blxoq7b.png",
  "jobTitle": "Laravel Developer & Full-Stack Engineer",
  "description": "Muhammad Saqib Javed is a professional Laravel Developer and Frontend Engineer based in Lahore, Pakistan, specializing in high-performance web applications.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Central Punjab"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "Pakistan"
  },
  "sameAs": [
    "https://github.com/saqib-1030",
    "https://www.linkedin.com/in/muhammad-saqib-javed/",
    "https://wa.me/923491691260"
  ],
  "knowsAbout": ["Laravel", "PHP", "React", "Next.js", "MySQL", "Web Development", "Software Engineering"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <div className="page-glow" />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

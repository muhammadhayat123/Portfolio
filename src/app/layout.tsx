import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad | Software Engineer | AI & Backend Specialist",
  description:
    "Professional portfolio of Muhammad, a Software Engineer and AI Engineer specializing in FastAPI backends, LangGraph agents, RAG systems, and Docker cloud deployments.",
  keywords: [
    "Software Engineer Portfolio",
    "AI Engineer Portfolio",
    "Backend Developer Portfolio",
    "FastAPI Developer",
    "Next.js Developer",
    "LangChain Developer",
    "LangGraph Developer",
    "RAG Engineer",
    "AI Agent Developer",
    "DevOps Engineer",
    "Muhammad Portfolio",
  ],
  authors: [{ name: "Muhammad" }],
  creator: "Muhammad",
  openGraph: {
    title: "Muhammad | AI & Backend Engineer",
    description:
      "Building scalable software, intelligent AI systems, and cloud-native applications in Karachi, Pakistan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad | AI & Backend Engineer",
    description:
      "Building scalable software, intelligent AI systems, and cloud-native applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD metadata for search engine indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad",
    "jobTitle": "Software Engineer, AI Engineer, Backend Developer",
    "url": "https://muhammad.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "Pakistan"
    },
    "email": "muhammad.smiu@gmail.com",
    "telephone": "+923183608176",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sindh Madressatul Islam University"
    },
    "award": "Rising Star Award - Governor Sindh IT Initiative",
    "knowsAbout": [
      "FastAPI",
      "Next.js",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "MCP Servers",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

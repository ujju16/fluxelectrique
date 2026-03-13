import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Configuration des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO et Meta-données
export const metadata: Metadata = {
  title: "Flux Électrique | Réparation Électronique & Développement IoT",
  description: "Expertise en réparation de smartphones, électronique, installations électriques et développement d'applications Android/Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {/* Ici on pourra ajouter le <Header /> plus tard */}
        <main>{children}</main>
        {/* Ici on pourra ajouter le <Footer /> plus tard */}
      </body>
    </html>
  );
}
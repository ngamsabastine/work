import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Biness Research | High-Purity Peptides & Research Chemicals",
  description: "Biness Research provides laboratory-grade peptides and steroids for investigation. HPLC tested, COA available. For research use only.",
  keywords: ["peptides", "research chemicals", "laboratory supplies", "BPC-157", "Semaglutide", "quality peptides"],
  authors: [{ name: "Biness Research" }],
  openGraph: {
    title: "Biness Research | Premium Research Peptides",
    description: "High-purity laboratory investigation compounds with comprehensive COAs.",
    type: "website",
    locale: "en_US",
    siteName: "Biness Research",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-grid`}>
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

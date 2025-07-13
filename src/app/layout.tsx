import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ZeroBusy - AI Automation Agency | Streamline. Automate. Scale.",
  description: "ZeroBusy helps digital businesses save time through intelligent AI automation. From workflow automation to AI agents, chatbots, and ecommerce management - we streamline your operations.",
  keywords: "AI automation, workflow automation, AI agents, chatbots, ecommerce automation, business automation, digital automation",
  authors: [{ name: "ZeroBusy" }],
  openGraph: {
    title: "ZeroBusy - AI Automation Agency",
    description: "Streamline. Automate. Scale. We help digital businesses save time through intelligent AI automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroBusy - AI Automation Agency",
    description: "Streamline. Automate. Scale. We help digital businesses save time through intelligent AI automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

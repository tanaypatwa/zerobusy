import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: '%s | ZeroBusy',
    default: 'ZeroBusy | AI & Automation for Digital Businesses',
  },
  description:
    'We build intelligent AI automations to help digital businesses save time, reduce costs, and scale operations. Stop the busy work, focus on growth.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}

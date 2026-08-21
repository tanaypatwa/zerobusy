import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const siteTitle = 'ZeroBusy | AI & Automation for Digital Businesses';
const siteDescription =
  'We build intelligent AI automations to help digital businesses save time, reduce costs, and scale operations. Stop the busy work, focus on growth.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zerobusy.com'),
  title: {
    template: '%s | ZeroBusy',
    default: siteTitle,
  },
  description: siteDescription,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'ZeroBusy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
        <Analytics />
      </body>
    </html>
  );
}

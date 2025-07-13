import type { Metadata } from 'next';
import AboutClientPage from './AboutClientPage';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the ZeroBusy mission, our values, and how we are dedicated to helping entrepreneurs win back their time through smart automation.',
};

export default function AboutPage() {
  return <AboutClientPage />;
} 
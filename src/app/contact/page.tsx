import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ZeroBusy team today to schedule a free consultation and discover how AI automation can transform your business.',
};

export default function ContactPage() {
  return <ContactForm />;
} 
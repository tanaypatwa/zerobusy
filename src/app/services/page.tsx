import type { Metadata } from 'next';
import ServicesClientPage from './ServicesClientPage';

export const metadata: Metadata = {
  title: 'AI Automation Services',
  description: 'Explore our services: custom workflow automation, 24/7 AI agents, intelligent chatbots, and e-commerce optimization solutions.',
};

export default function ServicesPage() {
  return <ServicesClientPage />;
} 
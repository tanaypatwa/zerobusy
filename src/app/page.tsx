'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '@/components/Logo';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark mb-6 leading-tight"
          >
            <span className="block">Streamline.</span>
            <span className="block text-primary">Automate.</span>
            <span className="block text-accent">Scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We help digital businesses save time through intelligent AI automation. 
            Stop doing busy work and start focusing on what matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book a Free Call
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              View Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <p className="text-gray-500 mb-6">Trusted by digital businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder client logos */}
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Client 1</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Client 2</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Client 3</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Client 4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your business processes to save hours every day."
    },
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Deploy intelligent AI agents that work 24/7 to handle customer inquiries and business tasks."
    },
    {
      icon: "💬",
      title: "Chatbots",
      description: "Engage customers instantly with smart chatbots that provide support and drive conversions."
    },
    {
      icon: "🛒",
      title: "Ecommerce Automation",
      description: "Optimize your online store with automated inventory, orders, and customer management."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            AI Solutions That Take Your Business to the Next Level
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Analyze",
      description: "We assess your current workflows and identify automation opportunities."
    },
    {
      step: "02", 
      title: "Automate",
      description: "Our team builds and implements custom AI solutions tailored to your needs."
    },
    {
      step: "03",
      title: "Scale",
      description: "Watch your business grow as automation handles the work while you focus on strategy."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our simple, smart, and scalable process gets you automated fast
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Abbas Zaveri",
      company: "Founder, Hype Fly",
      text: "ZeroBusy helped us automate our supply and inventory order automation with the tools we already had. We’re saving 30+ hours a week on manual work, and our ops are finally running smooth without daily fire-fighting.",
      avatar: "AZ"
    },
    {
      name: "Veer Gidwani",
      company: "Online Coach",
      text: "As a solopreneur, I was overwhelmed. ZeroBusy set up AI systems to handle my DMs, schedule calls, and generate contracts — it’s like having a full-time assistant - I fired our admin manager and saved $18k a year after these systems were set up.",
      avatar: "VG"
    },
    {
      name: "Dr. Ajay Dudani",
      company: "Founder, Mumbai Retina Center",
      text: "ZeroBusy built custom automations that streamlined our appointment system and reporting. Patient wait times dropped drastically, and our backend now runs without manual errors.",
      avatar: "AD"
    },
    {
      name: "Amit Srivastava",
      company: "CTO, GetVantage",
      text: "We replaced messy, manual lead gen with a fully automated AI workflow that finds, filters, and reaches out to high-quality prospects — 24/7. Huge time and cost savings, thanks to ZeroBusy.",
      avatar: "AS"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real businesses, real results with AI automation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Automate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Book a free consultation call and discover how ZeroBusy can transform your business operations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="#" className="bg-white text-primary font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Book Your Free Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

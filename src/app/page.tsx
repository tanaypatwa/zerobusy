'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";

// Hero Section Component
const HeroSection = () => {
  const clients = [
    { href: "https://hypefly.co.in", src: "/clients/hypefly.webp", alt: "Hype Fly India", width: 120, height: 40 },
    { href: "https://veergidwanicoaching.com/42days/", src: "/clients/veer-gidwani.jpeg", alt: "Veer Gidwani", width: 80, height: 40 },
    { href: "https://getvantage.co", src: "/clients/getvantage.png", alt: "GetVantage", width: 150, height: 40 },
    { href: "https://mumbairetinacenter.com", src: "/clients/mumbai-retina-center.png", alt: "Mumbai Retina Center", width: 40, height: 40, name: "Mumbai Retina Center" },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-dark"
          >
            AI-powered automation that saves 15–30 hours per week
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-6 max-w-3xl px-4 text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            Cut busy work, reduce errors by up to 95%, and scale with 24/7 AI. We build practical automations for digital businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="https://calendar.app.google/uYHrdAiAqTZCC6qv9"
              id="hero-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg"
            >
              Get Your Free Automation Assessment
            </Link>
            <Link href="/services" className="text-primary hover:underline text-lg">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-8">Trusted by businesses like</p>
            <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
                <motion.div
                  className="flex items-center"
                  animate={{
                    x: ['0%', '-100%'],
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  {[...clients, ...clients].map((client, i) => (
                    <Link href={client.href} key={i} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center justify-center p-4 mx-4" style={{ minWidth: '160px' }}>
                      <Image
                        src={client.src}
                        alt={client.alt}
                        width={client.width}
                        height={client.height}
                        className="object-contain h-10 w-auto"
                      />
                      {client.name && (
                        <span className="text-sm font-medium text-gray-600 ml-2 whitespace-nowrap">{client.name}</span>
                      )}
                    </Link>
                  ))}
                </motion.div>
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
            </div>
            <p className="text-gray-500 font-medium text-center mt-4">+ and many more</p>
          </motion.div>
        </div>
      </div>
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

// Case Studies Section
const CaseStudiesSection = () => {
  const cases = [
    {
      client: 'Ecommerce Brand',
      problem: 'Manual follow-ups and abandoned carts',
      solution: 'Automated customer journeys',
      result: '+25% sales',
      quote: 'Automation recovered revenue we didn\'t know we were missing.'
    },
    {
      client: 'SaaS Company',
      problem: 'Hours lost to data entry',
      solution: 'Workflow automation',
      result: '15h saved weekly & 95% fewer errors',
      quote: 'Our team finally focuses on product, not spreadsheets.'
    },
    {
      client: 'Service Agency',
      problem: 'Leads lost after hours',
      solution: '24/7 AI agent',
      result: 'Round-the-clock qualification',
      quote: 'Clients get answers instantly, even at 2am.'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Proven results</h2>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {cases.map((c, i) => (
            <div key={i} className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-dark mb-2">{c.client}</h3>
              <p className="text-sm text-gray-600 mb-2">Problem: {c.problem}</p>
              <p className="text-sm text-gray-600 mb-2">Solution: {c.solution}</p>
              <p className="text-sm text-gray-600 mb-2">Results: {c.result}</p>
              <p className="text-gray-700 italic">"{c.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { step: '1', title: 'Discovery Call', description: 'Understand goals and current workflow.' },
    { step: '2', title: 'Strategy Development', description: 'Design a tailored automation roadmap.' },
    { step: '3', title: 'Implementation', description: 'Build and integrate your automations.' },
    { step: '4', title: 'Optimization', description: 'Monitor results and iterate for growth.' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Our Process
          </motion.h2>
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 md:flex-shrink text-center md:text-left"
            >
              <div className="mb-4 flex items-center justify-center md:justify-start">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">{step.step}</span>
                <h3 className="font-semibold text-dark">{step.title}</h3>
              </div>
              <p className="text-gray-600 md:ml-14">{step.description}</p>
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
      name: "Javier Villa",
      company: "CAO, Aidaddy.com",
      text: "ZeroBusy automated our proposal creation process end-to-end, reducing manual work by 80% and eliminating documentation errors. Their proactive improvements and clean implementation transformed our workflow efficiency.",
      avatar: "JV"
    },
    {
      name: "Abbas Zaveri",
      company: "Founder, Hype Fly",
      text: "ZB completely transformed our CRM and order flow - what used to take 40+ hours of manual chaos is now a smooth, fully automated system. They gave me back my peace of mind. No more dropped leads, missed updates, or delayed orders. Everything just works. ZB doesn't just automate - they think strategically and genuinely care about impact.",
      avatar: "AZ"
    },
    {
      name: "Veer Gidwani",
      company: "Online Coach",
      text: "As a solopreneur, my funnel was a mess of DMs and follow-ups. ZeroBusy built an AI system replaced my admin team (who were costing me $18k a year) and qualifies leads and books calls right in my inbox. It's like having a sales assistant that never sleeps, letting me focus entirely on coaching.",
      avatar: "VG"
    },
    {
      name: "Dr. Ajay Dudani",
      company: "Founder, Mumbai Retina Center",
      text: "Our patient management was chaotic. ZeroBusy built a custom automation that streamlined our appointment system from booking to reporting. Patient wait times have dropped, our backend runs without manual errors, and my staff can focus on patient care.",
      avatar: "AD"
    },
    {
      name: "Amit Srivastava",
      company: "CTO, GetVantage",
      text: "We needed to scale our deal flow without drowning in manual work. ZeroBusy built a fully automated AI workflow that finds, filters, and engages high-quality prospects 24/7. It's a huge time-saver and a core part of our growth engine now.",
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

        <div className="flex overflow-x-auto space-x-8 pb-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 bg-gray-50 p-8 rounded-2xl"
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
              <p className="text-gray-700 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
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
          <Link href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target="_blank" rel="noopener noreferrer" className="bg-white text-primary font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Your Free Automation Assessment
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
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

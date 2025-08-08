'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesClientPage = () => {
  const services = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    benefits: ['Save 15-30 hours per week', 'Up to 95% error reduction', '24/7 availability'],
    details: ['Data entry automation', 'Report generation', 'Email workflow automation', 'Task scheduling'],
  },
  {
    icon: '🤖',
    title: 'AI Agents',
    slug: 'ai-agents',
    benefits: ['24/7 availability', 'Instant response times', 'Consistent quality'],
    details: ['Customer inquiry handling', 'Lead qualification', 'Appointment scheduling'],
  },
  {
    icon: '💬',
    title: 'Chatbots',
    slug: 'chatbots',
    benefits: ['Increase conversion rates', 'Reduce support workload', 'Capture leads 24/7'],
    details: ['Website integration', 'FAQ automation', 'Product recommendations'],
  },
  {
    icon: '🛒',
    title: 'Ecommerce Automation',
    slug: 'ecommerce-automation',
    benefits: ['Up to 25% more sales', 'Reduce operational costs', 'Improve customer experience'],
    details: ['Inventory management', 'Abandoned cart recovery', 'Price optimization'],
  },
];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your business challenges and automation goals"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We create a custom automation roadmap for your business"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team builds and deploys your automation solutions"
    },
    {
      step: "04",
      title: "Optimization",
      description: "We monitor, refine, and improve your automations continuously"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-dark mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Transform your business with our comprehensive AI automation solutions.
            From workflow automation to intelligent agents, we&apos;ve got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target="_blank" className="btn-primary text-lg">
              Get Your Free Automation Assessment
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Or <Link href="/services" className="text-primary hover:underline">explore services</Link> to see more options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold text-dark mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>{b}
                    </li>
                  ))}
                </ul>
                <details className="mb-4">
                  <summary className="cursor-pointer text-primary">Show details</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    {service.details.map((d, i) => (
                      <li key={i} className="text-gray-600 list-disc">{d}</li>
                    ))}
                  </ul>
                </details>
                <div className="border-t border-gray-200 pt-6 text-right">
                  <Link href={`/services/${service.slug}`} className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A proven methodology that delivers results every time
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Automate Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">It&apos;s Time to Upgrade Your Operations</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Manual, repetitive tasks are silently costing your business more than just money—they&apos;re costing you time, growth opportunities, and competitive edge. AI-powered automation is no longer a luxury for large corporations; it&apos;s a vital tool for agile businesses ready to scale.
            </p>
            <Link href="/about" className="text-primary font-semibold hover:underline">
              Learn more about our mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesClientPage; 
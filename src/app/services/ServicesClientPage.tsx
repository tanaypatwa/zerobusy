'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesClientPage = () => {
  const services = [
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "Streamline your business processes and eliminate manual work",
      features: [
        "Data entry automation",
        "Report generation",
        "Email workflow automation",
        "Task scheduling and management",
        "Integration between tools",
        "Approval process automation"
      ],
      benefits: [
        "Save 15-30 hours per week",
        "Reduce errors by 95%",
        "Improve team productivity",
        "Scale operations efficiently"
      ],
      pricing: "Starting at $2,500"
    },
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Intelligent AI agents that work 24/7 to handle complex business tasks",
      features: [
        "Customer inquiry handling",
        "Lead qualification",
        "Appointment scheduling",
        "Data analysis and insights",
        "Content creation assistance",
        "Multi-language support"
      ],
      benefits: [
        "24/7 availability",
        "Instant response times",
        "Consistent quality",
        "Multilingual capabilities"
      ],
      pricing: "Starting at $3,500"
    },
    {
      icon: "💬",
      title: "Chatbots",
      description: "Smart chatbots that engage customers and drive conversions",
      features: [
        "Website integration",
        "FAQ automation",
        "Lead capture",
        "Product recommendations",
        "Order status updates",
        "Support ticket creation"
      ],
      benefits: [
        "Increase conversion rates",
        "Reduce support workload",
        "Capture leads 24/7",
        "Improve customer satisfaction"
      ],
      pricing: "Starting at $1,500"
    },
    {
      icon: "🛒",
      title: "Ecommerce Automation",
      description: "Optimize your online store with intelligent automation",
      features: [
        "Inventory management",
        "Order processing",
        "Customer segmentation",
        "Abandoned cart recovery",
        "Price optimization",
        "Review management"
      ],
      benefits: [
        "Increase sales by 25%",
        "Reduce operational costs",
        "Improve customer experience",
        "Scale without hiring"
      ],
      pricing: "Starting at $4,000"
    }
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
            From workflow automation to intelligent agents, we've got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </Link>
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
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark mb-3">Features Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-end items-center">
                    <Link href="/contact" className="btn-secondary">
                      Learn More
                    </Link>
                  </div>
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
    </div>
  );
};

export default ServicesClientPage; 
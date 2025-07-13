'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-dark mb-6"
            >
              About ZeroBusy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We&apos;re on a mission to eliminate busy work and help digital businesses 
              focus on what truly matters through intelligent AI automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ZeroBusy was born from a simple observation: too many talented business owners 
                were spending countless hours on repetitive tasks instead of growing their businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We saw entrepreneurs drowning in manual workflows, spending late nights on data entry, 
                and missing opportunities because they were stuck in the operational weeds.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That&apos;s when we decided to build ZeroBusy - to give business owners their time back 
                through intelligent automation that actually works.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To transform how digital businesses operate by making AI automation 
                  accessible, practical, and genuinely helpful for every entrepreneur.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Results-Focused",
                description: "We measure success by the time and money we save our clients, not by the complexity of our solutions."
              },
              {
                icon: "🚀",
                title: "Innovation First",
                description: "We stay ahead of the curve, always exploring new AI technologies to benefit our clients."
              },
              {
                icon: "🤝",
                title: "Partnership Mindset",
                description: "We're not just vendors - we're partners invested in your long-term success and growth."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
            >
              Why Choose ZeroBusy?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Practical AI, Not Hype",
                description: "We cut through the AI noise and deliver solutions that solve real business problems. No buzzwords, just results.",
                benefits: ["Proven track record", "Real ROI measurement", "Practical implementations"]
              },
              {
                title: "Digital Business Specialists",
                description: "We understand the unique challenges of digital businesses because we've been there. We speak your language.",
                benefits: ["Industry expertise", "Digital-first approach", "Scalable solutions"]
              },
              {
                title: "End-to-End Support",
                description: "From strategy to implementation to optimization, we're with you every step of the way.",
                benefits: ["Complete implementation", "Ongoing optimization", "24/7 support"]
              },
              {
                title: "Custom Solutions",
                description: "No two businesses are the same. We create tailored automation that fits your specific needs and workflows.",
                benefits: ["Personalized approach", "Flexible solutions", "Growth-ready architecture"]
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-dark mb-4">{reason.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how ZeroBusy can transform your business operations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target="_blank" rel="noopener noreferrer" 
              className="bg-white text-primary font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Schedule a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 
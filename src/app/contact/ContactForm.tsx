'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    company: '',
    phone: '',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // honeypot
    setStatus('sending');
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', company: '', phone: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form', err);
      setStatus('error');
    }
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready to transform your business with AI automation? 
            Let&apos;s discuss how we can help you streamline, automate, and scale.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-dark mb-6">Send us a message</h2>
              {status === 'success' ? (
                <div className="space-y-4 text-center">
                  <p className="text-lg text-gray-700">Thanks! We’ll respond within 24 hours. You can also book directly now.</p>
                  <Link href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                    Get Your Free Automation Assessment
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                    <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option value="">Select a service</option>
                      <option value="workflow-automation">Workflow Automation</option>
                      <option value="ai-agents">AI Agents</option>
                      <option value="chatbots">Chatbots</option>
                      <option value="ecommerce-automation">Ecommerce Automation</option>
                    </select>
                  </div>
                  <button type="button" onClick={() => setDetailsOpen(!detailsOpen)} className="text-primary underline">
                    {detailsOpen ? 'Hide extra details' : 'Add more details'}
                  </button>
                  {detailsOpen && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"></textarea>
                      </div>
                    </div>
                  )}
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
                  <button type="submit" className="w-full btn-primary text-lg py-4">
                    Send Message
                  </button>
                  {status === 'sending' && <p className="text-blue-500 mt-2 text-center">Sending...</p>}
                  {status === 'error' && <p className="text-red-600 mt-2 text-center">An error occurred.</p>}
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Let&apos;s talk about your automation needs</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Ready to eliminate busy work and focus on growing your business? 
                  We&apos;re here to help you discover the perfect automation solutions for your unique needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">Email Us</h3>
                    <p className="text-gray-600">automate@zerobusy.com</p>
                    <p className="text-sm text-gray-500 mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">Schedule a Call</h3>
                    <p className="text-gray-600">Book a free 30-minute consultation</p>
                    <a href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target='_blank' className='text-primary hover:underline'>Let&apos;s connect</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">Location</h3>
                    <p className="text-gray-600">Remote-first company</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-dark mb-2">Quick Response Guaranteed</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please mention it in your message and we&apos;ll prioritize your request.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a 
                  href="/services" 
                  className="btn-secondary text-lg px-8 py-4 inline-block"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does implementation take?",
                answer: "Most automation projects are completed within 2-6 weeks, depending on complexity. We'll provide a detailed timeline during our consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer 24/7 monitoring and support to ensure your automations run smoothly. We also provide training for your team."
              },
              {
                question: "What's included in the free consultation?",
                answer: "We'll analyze your current workflows, identify automation opportunities, and provide a custom roadmap with ROI projections."
              },
              {
                question: "Can you integrate with our existing tools?",
                answer: "Absolutely! We work with 1000+ tools and platforms. If we can't integrate directly, we'll build custom solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 
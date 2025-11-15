// ContactUs.tsx
"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const SriLankaMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  )
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our support team',
      details: '1-800-FOOD-EXP',
      subtext: 'Available 24/7',
      color: 'from-blue-500 to-cyan-500',
      link: 'tel:1-800-366-3397'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      description: 'Send us an email anytime',
      details: 'support@foodexpress.com',
      subtext: 'Response within 2 hours',
      color: 'from-green-500 to-emerald-500',
      link: 'mailto:support@foodexpress.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Instant messaging support',
      details: 'Available in app',
      subtext: 'Real-time assistance',
      color: 'from-purple-500 to-pink-500',
      link: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Our headquarters',
      details: '123 Galle Road, Colombo 03',
      subtext: 'Mon-Fri, 9AM-6PM',
      color: 'from-orange-500 to-amber-500',
      link: '#'
    }
  ];

  const faqQuickLinks = [
    {
      question: "How do I track my order?",
      link: "/track-order"
    },
    {
      question: "What is your refund policy?",
      link: "/refund-policy"
    },
    {
      question: "How do I apply a promo code?",
      link: "/promo-codes"
    },
    {
      question: "Do you deliver to my area?",
      link: "/delivery-areas"
    }
  ];

  // Don't render form until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section - Static during SSR */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're here to help! Get in touch with our team for any questions or concerns.
              </p>
              <div className="flex justify-center items-center space-x-2 text-lg text-gray-600">
                <span className="text-gray-900 hover:text-orange-600 cursor-pointer">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-orange-600 font-semibold">Contact Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading state for form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-12 bg-gray-200 rounded"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-12 bg-gray-200 rounded"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-32 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="h-48 bg-gray-200 rounded-2xl"></div>
                <div className="h-48 bg-gray-200 rounded-2xl"></div>
                <div className="h-48 bg-gray-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're here to help! Get in touch with our team for any questions or concerns.
            </p>
            
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={`bg-gradient-to-r ${method.color} rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer block`}
            >
              <div className="text-3xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-white/90 text-sm mb-3">{method.description}</p>
              <p className="font-semibold text-lg">{method.details}</p>
              <p className="text-white/80 text-sm mt-2">{method.subtext}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-500 text-lg mr-2">✅</span>
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 text-lg mr-2">❌</span>
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                      placeholder="Enter your email"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                      placeholder="Enter your phone number"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                      suppressHydrationWarning
                    >
                      <option value="">Select a subject</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="refund">Refund Request</option>
                      <option value="account">Account Help</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Help */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Help</h3>
              <div className="space-y-3">
                {faqQuickLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
                  >
                    <span className="text-orange-500 mr-3 group-hover:scale-110 transition-transform duration-200">→</span>
                    <span className="text-gray-700 group-hover:text-orange-600">{item.question}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-semibold">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="text-gray-600">Customer Support</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl mb-3">🚨</div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Support</h3>
                <p className="text-red-700 text-sm mb-4">
                  For urgent order issues that need immediate attention
                </p>
                <a
                  href="tel:1-800-FOOD-EXP"
                  className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sri Lanka Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us in Sri Lanka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're serving delicious food across major cities in Sri Lanka with fast delivery and great service
            </p>
          </div>
          
          <SriLankaMap />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Download our app for faster support, order tracking, and exclusive features!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              suppressHydrationWarning
            >
              Download App
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              suppressHydrationWarning
            >
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
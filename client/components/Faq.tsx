'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    // Ordering & Payment
    {
      id: 1,
      question: "How do I place an order?",
      answer: "You can place an order through our website or mobile app. Simply select your location, choose from available restaurants, add items to your cart, and proceed to checkout. You'll need to provide delivery address and payment information.",
      category: "ordering"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), digital wallets (Apple Pay, Google Pay), PayPal, and cash on delivery in selected areas.",
      category: "ordering"
    },
    {
      id: 3,
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 5 minutes of placing it. After that, the restaurant may have started preparing your food. For modifications or cancellations after this time, please contact our customer support immediately.",
      category: "ordering"
    },

    // Delivery
    {
      id: 4,
      question: "What are your delivery areas?",
      answer: "We currently deliver within major metropolitan areas and are continuously expanding. Enter your address on our website or app to check if we deliver to your location. We'll notify you when we expand to new areas!",
      category: "delivery"
    },
    {
      id: 5,
      question: "How long does delivery take?",
      answer: "Delivery times typically range from 15-45 minutes depending on your location, restaurant preparation time, and traffic conditions. You can track your order in real-time through our app.",
      category: "delivery"
    },
    {
      id: 6,
      question: "Is there a minimum order amount?",
      answer: "Yes, most restaurants have a minimum order amount ranging from $15 to $25. This helps ensure efficient delivery operations. The exact minimum will be shown during checkout.",
      category: "delivery"
    },
    {
      id: 7,
      question: "Do you deliver during bad weather?",
      answer: "We prioritize the safety of our delivery partners. During extreme weather conditions, delivery services may be temporarily suspended in affected areas. We'll notify you if this impacts your order.",
      category: "delivery"
    },

    // Account & Technical
    {
      id: 8,
      question: "How do I create an account?",
      answer: "Click on 'Sign Up' on our website or app. You can register using your email address, phone number, or social media accounts. Creating an account lets you save addresses, track orders, and access exclusive offers.",
      category: "account"
    },
    {
      id: 9,
      question: "I forgot my password. How can I reset it?",
      answer: "Click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a password reset link. The link will expire in 24 hours for security reasons.",
      category: "account"
    },
    {
      id: 10,
      question: "The app is not working properly. What should I do?",
      answer: "Try these steps: 1) Close and restart the app, 2) Check for app updates, 3) Clear app cache, 4) Restart your device. If issues persist, contact our technical support team with details about the problem.",
      category: "account"
    },

    // Food & Restaurants
    {
      id: 11,
      question: "How do you ensure food quality and safety?",
      answer: "We partner with certified restaurants that maintain high hygiene standards. Our delivery partners use thermal bags to maintain food temperature, and we have a quality assurance process to monitor restaurant performance.",
      category: "food"
    },
    {
      id: 12,
      question: "Can I see nutritional information?",
      answer: "Yes, many restaurants provide nutritional information for their menu items. Look for the nutrition icon next to items, or check the restaurant's details page. We're working with partners to expand this feature.",
      category: "food"
    },
    {
      id: 13,
      question: "What if I have food allergies?",
      answer: "Please check the menu item descriptions for allergen information. You can also add special instructions for the restaurant when ordering. For severe allergies, we recommend contacting the restaurant directly before ordering.",
      category: "food"
    },

    // Promotions & Loyalty
    {
      id: 14,
      question: "How do promo codes work?",
      answer: "Enter your promo code during checkout in the 'Promo Code' field. The discount will be applied to your order total if the code is valid and meets the terms. Some codes have minimum order values or specific restaurant restrictions.",
      category: "promotions"
    },
    {
      id: 15,
      question: "Do you have a loyalty program?",
      answer: "Yes! Our Food Express Rewards program gives you points for every order. Points can be redeemed for discounts and free delivery. You'll also get access to exclusive offers and early access to new features.",
      category: "promotions"
    },
    {
      id: 16,
      question: "How can I get free delivery?",
      answer: "Free delivery is available through our subscription plan, with certain promo codes, or on orders above a specific amount from participating restaurants. Check our promotions page for current offers.",
      category: "promotions"
    },

    // Support & Issues
    {
      id: 17,
      question: "What if my order is incorrect or missing items?",
      answer: "We're sorry for the inconvenience! Please contact our customer support within 30 minutes of delivery. Provide your order number and details of the issue. We'll investigate and make it right.",
      category: "support"
    },
    {
      id: 18,
      question: "How do I contact customer support?",
      answer: "You can reach us through: 1) Live chat in the app/website, 2) Email at support@foodexpress.com, 3) Phone at 1-800-FOOD-EXP (1-800-366-3397). Our support team is available 24/7.",
      category: "support"
    },
    {
      id: 19,
      question: "What is your refund policy?",
      answer: "Refunds are processed for incorrect orders, undelivered orders, or quality issues. Contact support within 2 hours of delivery. Refunds are typically processed within 5-7 business days to your original payment method.",
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'ordering', name: 'Ordering & Payment', icon: '🛒' },
    { id: 'delivery', name: 'Delivery', icon: '🚚' },
    { id: 'account', name: 'Account & Technical', icon: '👤' },
    { id: 'food', name: 'Food & Restaurants', icon: '🍕' },
    { id: 'promotions', name: 'Promotions & Loyalty', icon: '🎁' },
    { id: 'support', name: 'Support & Issues', icon: '💬' }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find quick answers to common questions about ordering, delivery, payments, and more.
            </p>
           
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
                }`}
              >
                <span className="text-2xl mb-2">{category.icon}</span>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400 text-2xl">🔍</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 text-orange-500 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">1-800-FOOD-EXP</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">support@foodexpress.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Available in app</p>
              <p className="text-sm text-gray-500">Instant help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
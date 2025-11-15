// Footer.tsx - Footer Section for Foodexpress
import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-inter relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-1 space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-white">
              Food<span className="text-orange-500">express</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering fresh, healthy, and delicious meals straight to your door. 
              Your lifestyle, our menu.
            </p>
            <div className="flex space-x-5">
              {/* Social Icons */}
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm6.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.87c-.885.39-1.83.65-2.825.77a4.9 4.9 0 002.163-2.72c-.95.56-2.005.97-3.127 1.18a4.9 4.9 0 00-8.36 4.47A13.9 13.9 0 011.67 3.9a4.9 4.9 0 001.523 6.54c-.8-.02-1.55-.24-2.22-.6v.06c0 2.7 1.92 4.95 4.47 5.46-.47.13-.97.2-1.48.2-.36 0-.71-.04-1.05-.1a4.9 4.9 0 004.56 3.4c-1.9 1.48-4.29 2.36-6.9 2.36-.45 0-.89-.03-1.33-.08a13.8 13.8 0 007.49 2.2c8.97 0 13.88-7.4 13.88-13.88 0-.21 0-.42-.02-.63a9.9 9.9 0 002.42-2.51z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Our Menu</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Mobile App</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-300">Track Order</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Foodie Lane, <br /> Flavor Town, FT 56789</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:support@foodexpress.com" className="hover:text-orange-500 transition-colors duration-300">
                  support@foodexpress.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Foodexpress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
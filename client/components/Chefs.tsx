"use client"

import Image from 'next/image'
import { useState } from 'react'


import chef1Image from '../public/asserts/chef1.jpg'
import chef2Image from '../public/asserts/chef2.jpeg' 
import chef3Image from '../public/asserts/chef3.jpeg' 
import chef4Image from '../public/asserts/chef4.jpeg' 

const chefsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Executive Chef",
    image: chef1Image, 
    experience: "15+ years",
    specialty: "Indian Cuisine",
    description: "Master of traditional Indian flavors with a modern twist.",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Sous Chef",
    image: chef2Image, 
    experience: "10+ years",
    specialty: "Fusion Cuisine",
    description: "Creative fusion dishes that blend Eastern and Western flavors.",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 3,
    name: "Arun Patel",
    designation: "Pastry Chef",
    image: chef3Image,
    experience: "12+ years",
    specialty: "Desserts & Bakery",
    description: "Artisan baker creating heavenly desserts and pastries.",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Meera Singh",
    designation: "Head Chef",
    image: chef4Image, 
    experience: "18+ years",
    specialty: "Continental Cuisine",
    description: "Expert in European culinary traditions with local influences.",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#"
    }
  }
]

const Chefs = () => {
  const [selectedChef, setSelectedChef] = useState<number | null>(null)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Decorations - Dark version */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Food Icons - Dark version */}
      <div className="absolute top-20 right-20 text-orange-900/20">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 text-amber-900/10">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-4c0-2.21-1.79-4-4-4S9 3.79 9 6H3v2h18V6zm-9-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm9 4H3v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Master{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Chefs
            </span>
          </h1>
          
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our talented team of culinary experts who bring passion, creativity, 
            and years of experience to every dish they create.
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefsData.map((chef) => (
            <div 
              key={chef.id}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800"
              onMouseEnter={() => setSelectedChef(chef.id)}
              onMouseLeave={() => setSelectedChef(null)}
            >
              {/* Chef Image */}
              <div className="relative h-80 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-4xl">👨‍🍳</div>
                  {<Image
                    src={chef.image} // This will now correctly use the imported image
                    alt={chef.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  /> }
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-3 py-2 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="font-poppins font-bold text-xs">{chef.experience}</div>
                    <div className="font-inter text-xs opacity-90">Exp</div>
                  </div>
                </div>

                {/* Overlay with Social Links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6 text-center">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {chef.name}
                </h3>
                <p className="font-poppins text-orange-400 font-semibold mb-3">
                  {chef.designation}
                </p>
                <p className="font-inter text-sm text-gray-300 mb-4">
                  {chef.specialty}
                </p>
                <p className="font-inter text-xs text-gray-400 leading-relaxed">
                  {chef.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  )
}

export default Chefs
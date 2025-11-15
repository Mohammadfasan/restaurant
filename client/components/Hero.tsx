import Image from 'next/image'
import fruitsImage from '../public/asserts/fruits.png'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 text-white p-8 md:p-16 min-h-screen flex items-center transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-16 w-full relative z-10'>
        
        <div className='flex-1 text-center lg:text-left space-y-12 order-2 lg:order-1'>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="font-poppins text-sm uppercase tracking-widest text-orange-400 font-medium">
                Premium Quality, Delivered Fresh
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="font-playfair text-gray-100 block mb-2 tracking-tight">For Your</span>
              <span className="font-playfair text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 hover:from-yellow-300 hover:via-orange-400 hover:to-red-500 transition-all duration-500 cursor-default animate-gradient">
                Taste.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-4 font-light">
              Explore a curated selection of fresh, diverse, and flavorful ingredients delivered 
              right to your door, ensuring health and vitality with every bite.
            </p>
          </div>

          <div className="space-y-10 pt-6">

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-orange-500/30 text-white px-16 py-5 rounded-2xl text-xl font-poppins font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Order Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
              
              <div className="font-inter text-xl text-gray-300 flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-2xl border border-gray-700/50">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="font-poppins font-semibold text-white">Delivery</span> 
                  <span className='font-poppins text-orange-400'>in 30 min</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 pt-8 border-t border-gray-700/30">
              
              <div className="text-center group cursor-pointer">
                <div className="font-playfair text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">500<span className='text-white'>+</span></div>
                <div className="font-inter text-gray-400 text-base tracking-wide mt-2 group-hover:text-gray-300 transition-colors duration-300">Happy Customers</div>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="font-playfair text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">50<span className='text-white'>+</span></div>
                <div className="font-inter text-gray-400 text-base tracking-wide mt-2 group-hover:text-gray-300 transition-colors duration-300">Food Items</div>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="font-playfair text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">4.9<span className='text-white'>/5</span></div>
                <div className="font-inter text-gray-400 text-base tracking-wide mt-2 group-hover:text-gray-300 transition-colors duration-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 relative flex justify-center order-1 lg:order-2'>
          <div className="relative p-8 max-w-lg w-full"> 
            <div className="relative">
              <Image
                src={fruitsImage}
                alt="Delicious Fresh Food Platter"
                width={700}
                height={700}
                className="max-w-full h-auto rounded-3xl  shadow-orange-500/20 transform transition duration-700 ease-in-out hover:scale-[1.02] rotate-1 "
                priority
              />
              
              {/* Enhanced Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-2xl font-poppins font-bold text-sm shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-300 group">
                <span className="group-hover:scale-105 transition-transform duration-300">Fresh Daily</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-poppins font-bold text-sm shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-300 group">
                <span className="group-hover:scale-105 transition-transform duration-300">Special Offer</span>
              </div>
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0 }}>
       <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1440 120" 
  preserveAspectRatio="none" 
  className="w-full h-24 md:h-32"
>
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#f9fafb" />
      <stop offset="100%" stopColor="#fffbeb" /> 
    </linearGradient>
  </defs>
  <path 
    d="M0,80 C360,20 720,100 1080,60 C1260,40 1440,80 1440,80 V120 H0 Z" 
    fill="url(#waveGradient)"
    fillOpacity="1"
  />
</svg>
      </div>
    </div>
  )
}

export default Hero
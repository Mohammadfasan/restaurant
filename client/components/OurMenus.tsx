// OurMenus.tsx - Image Left, Content Right
import Image from 'next/image'
import cheffImage from '../public/asserts/cheff.png'

const OurMenus = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100/40 rounded-full blur-2xl"></div>
      
      {/* Floating Food Icons */}
      <div className="absolute top-20 left-20 text-orange-300/30">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 text-amber-300/20">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-4c0-2.21-1.79-4-4-4S9 3.79 9 6H3v2h18V6zm-9-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm9 4H3v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image Section - LEFT SIDE */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={cheffImage}
                  alt="Professional Chef preparing healthy meal"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-gray-900">30 Min</div>
                    <div className="font-inter text-xs text-gray-600">Delivery</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-gray-900">100%</div>
                    <div className="font-inter text-xs text-gray-600">Organic</div>
                  </div>
                </div>
              </div>

              {/* Chef Experience Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="font-poppins font-bold text-sm">15+ Years</div>
                  <div className="font-inter text-xs opacity-90">Experience</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-orange-200/40 to-amber-200/30 rounded-full blur-2xl"></div>
          </div>

          {/* Text Content - RIGHT SIDE */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meal plans made for your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                  lifestyle
                </span>
              </h1>
              <p className="font-inter text-lg text-orange-600 font-semibold">
                Fresh • Healthy • Delicious
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Varius morbi enim nunc faucibus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. 
                Feugiat sed lectus vestibulum mattis ullamcorper velit. Etiam dignissim diam quis enim lobortis scelerisque.
              </p>
              
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nisi quis eleifend quam adipiscing vitae 
                proin sagittis nisi the over thinks for your rhoncus.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-inter text-gray-700">Customized meal plans based on your goals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-inter text-gray-700">Fresh ingredients delivered to your door</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-inter text-gray-700">Easy-to-follow recipes for all skill levels</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-10 py-4 rounded-2xl font-poppins font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 flex items-center gap-3">
                <span>View Our Menu</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            
          </div>
        </div>
      </div>

     
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
          fill="#000000ff"
          fillOpacity="1"
        />
      </svg>
      </div>
      {/* --- END ADDED SECTION --- */}

    </div>
  )
}

export default OurMenus
// MobileApps.tsx - Mobile Apps Download Section
import Image from 'next/image'
import mobileAppImage from '../public/asserts/foodapp.png'

const MobileApps = () => {
  return (
    // Updated background gradient
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-amber-50 relative overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full transform rotate-180" style={{ lineHeight: 0, zIndex: 1 }}>
       <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        className="w-full h-24 md:h-32"
      >
        <path 
          d="M0,80 C360,20 720,100 1080,60 C1260,40 1440,80 1440,80 V120 H0 Z" 
          fill="#000000ff" /* <-- CHANGE THIS to your site's previous section background color (e.g., #ffffff for white) */
          fillOpacity="1"
        />
      </svg>
      </div>
      {/* --- END ADDED SECTION --- */}

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Fruit Icons */}
      <div className="absolute top-20 right-20 text-orange-300/30">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 text-amber-300/20">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-4c0-2.21-1.79-4-4-4S9 3.79 9 6H3v2h18V6zm-9-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm9 4H3v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content - LEFT SIDE */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Mobile Apps
              </h2>
              
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Best Service to fulfill your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                  expectations
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac enim sollicitudin, 
                viverra est vel, volutpat orci. Maecenas at velit sodales, laoreet ligula eu, rutrum metus. 
                Donec lacus ligula, mollis sit amet nisi eu, posuere consectetur sapien.
              </p>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>

            {/* Download Section */}
            <div className="space-y-6">
              <h3 className="font-poppins text-2xl font-bold text-gray-900">
                Download FreshFruits Mobile App
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store Button */}
                <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-poppins font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-poppins font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.58.47-1 1.05-1h16.9c.58 0 1.05.42 1.05 1v17c0 .58-.47 1-1.05 1H4.05C3.47 21.5 3 21.08 3 20.5zm5.1-6.55l2.1 2.1 5.35-5.35-2.1-2.1-5.35 5.35zm-2.7-2.7L9.2 8.95 4.85 4.6 2.75 6.7l2.65 2.65z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

           
          </div>

          {/* Image Section - RIGHT SIDE */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Mobile App Image */}
              <div className="relative rounded-3xl ">
                <div className="w-full h-auto ">
                  {/* Placeholder for mobile app image */}
                  <div className="flex items-center justify-center ">
                    
                    { <Image
                      src={mobileAppImage}
                      alt="FreshFruits Mobile App"
                      width={300}
                      height={600}
                      className="w-200 h-200 "
                      priority
                    /> }
                  </div>
                </div>
                
                {/* Overlay Gradient */}
              </div>

              
              
            </div>

            {/* Background Decoration */}
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default MobileApps
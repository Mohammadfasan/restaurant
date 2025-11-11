// BuyRow.jsx - Light Background Version
const BuyRow = () => {
  const features = [
    {
      title: "Easy to Order",
      description: "Order your favorite meals in just a few clicks with our intuitive interface.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Best Food Quality",
      description: "We source the freshest local ingredients to ensure the highest quality in every dish.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Fastest Delivery",
      description: "Our efficient delivery network gets your food delivered hot and fresh, right on time.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100/40 rounded-full blur-2xl"></div>
      
      {/* Floating Food Icons */}
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 px-6 py-3 rounded-full shadow-sm mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="font-poppins text-sm uppercase tracking-widest text-orange-600 font-semibold">
              Why We're Different
            </p>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Difference</span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience culinary excellence with our unique approach to food delivery that prioritizes 
            quality, convenience, and your satisfaction above all else.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white transition-all duration-500 transform hover:-translate-y-3 border border-orange-100 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 relative overflow-hidden">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-2xl group-hover:from-orange-200 group-hover:to-amber-200 group-hover:scale-110 transition-all duration-300 border border-orange-200/50 shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="font-inter text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  {/* Animated Underline */}
                  <div className="mt-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full group-hover:w-24 transition-all duration-500 group-hover:from-orange-500 group-hover:to-amber-600"></div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-300/50 rounded-tl-2xl group-hover:border-orange-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-300/50 rounded-br-2xl group-hover:border-amber-500 transition-colors duration-300"></div>
              </div>

              {/* Floating Number */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="font-playfair text-white font-bold text-lg">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default BuyRow
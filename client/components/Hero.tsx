import Image from 'next/image'
import { Playfair_Display, Poppins, Open_Sans } from 'next/font/google'
import fruitsImage from '../public/asserts/fruits.png'

// Configure Google Fonts (Kept as is - they are well-chosen)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-playfair'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-open-sans'
})

const Hero = () => {
  return (
    <div className={`${playfair.variable} ${poppins.variable} ${openSans.variable} 
      bg-gray-950 text-white p-8 md:p-16 min-h-[90vh] flex items-center transition-colors duration-500`}>
      
      <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-16 w-full'>
        
        <div className='flex-1 text-center lg:text-left space-y-10 order-2 lg:order-1'>
          
          <div className="space-y-4">
            <p className="font-poppins text-sm uppercase tracking-widest text-orange-400">
                Premium Quality, Delivered Fresh
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none">
              <span className="font-playfair text-gray-200 block mb-2">For Your</span>
              <span className="font-playfair text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:from-yellow-300 hover:to-orange-600 transition duration-300 cursor-default">
                Taste.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-open-sans leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
              Explore a curated selection of fresh, diverse, and flavorful ingredients delivered 
              right to your door, ensuring health and vitality with every bite.
            </p>
          </div>

          <div className="space-y-8 pt-4">

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="group bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 text-white px-14 py-4 rounded-full text-xl font-poppins font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden">
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </button>
              
              <div className="font-poppins text-xl font-medium text-gray-300 flex items-center gap-2">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-ping-slow"></div>
                <span className="font-semibold text-white">Delivery</span> <span className='text-orange-400'>in 30 min</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 pt-6 border-t border-gray-800/50">
              
              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-orange-400">500<span className='text-white'>+</span></div>
                <div className="font-open-sans text-gray-400 text-sm tracking-wide">Happy Customers</div>
              </div>

              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-orange-400">50<span className='text-white'>+</span></div>
                <div className="font-open-sans text-gray-400 text-sm tracking-wide">Food Items</div>
              </div>

              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-orange-400">4.9<span className='text-white'>/5</span></div>
                <div className="font-open-sans text-gray-400 text-sm tracking-wide">Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 relative flex justify-center order-1 lg:order-2'>
          <div className="relative p-6 max-w-lg w-full"> 
            <Image
              src={fruitsImage}
              alt="Delicious Fresh Food Platter"
              width={700}
              height={700}
              className="max-w-full h-auto rounded-3xl shadow-2xl shadow-orange-500/30 transform transition duration-500 ease-in-out hover:scale-[1.03] rotate-1"
              priority
            />
            
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-poppins font-bold text-sm shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              Fresh Daily
            </div>
            <div className="absolute bottom-0 left-0 bg-red-600 text-white px-5 py-2 rounded-lg font-poppins font-bold text-sm shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              Special Offer
            </div>

             <div className="absolute -z-10 w-4/5 h-4/5 bg-orange-400/10 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
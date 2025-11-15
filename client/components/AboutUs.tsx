import React from 'react';
import Image from 'next/image';
import aboutImage from '../public/asserts/About.png';
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Chef Marco",
      role: "Head Chef",
      image: "👨‍🍳",
      description: "15+ years of culinary excellence"
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      image: "👩‍💼",
      description: "Ensuring smooth delivery operations"
    },
    {
      name: "Alex Rodriguez",
      role: "Customer Experience",
      image: "👨‍💻",
      description: "Dedicated to your satisfaction"
    }
  ];

  const stats: Stat[] = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Restaurant Partners" },
    { number: "15min", label: "Average Delivery Time" },
    { number: "24/7", label: "Customer Support" }
  ];

  const features: Feature[] = [
    {
      icon: "🚀",
      title: "Lightning Fast Delivery",
      description: "Get your food delivered in record time with our optimized delivery routes and dedicated riders."
    },
    {
      icon: "⭐",
      title: "Quality Guaranteed",
      description: "We partner with top-rated restaurants and ensure every meal meets our quality standards."
    },
    {
      icon: "💝",
      title: "Fresh & Hot",
      description: "Special thermal bags keep your food at perfect temperature throughout the journey."
    },
    {
      icon: "📱",
      title: "Easy to Order",
      description: "Simple, intuitive app and website make ordering your favorite food a breeze."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Breadcrumb Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Food Express
            </h1>
           
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={aboutImage}
              alt="Food Express Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong className="text-orange-600">Food Express</strong>, where culinary excellence meets lightning-fast delivery. 
              Founded in 2020, we started with a simple mission: to bring restaurant-quality meals 
              to your doorstep, faster and fresher than ever before.
            </p>

            <p>
              What began as a small local service has grown into a trusted platform connecting 
              food lovers with the best restaurants in town. We believe that great food should 
              be accessible to everyone, anytime - and we&apos;re here to make that happen.
            </p>

            <p>
              Our team of food enthusiasts, tech experts, and delivery professionals work 
              tirelessly to ensure every meal reaches you hot, fresh, and absolutely delicious.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Food Express?
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the Food Express difference today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
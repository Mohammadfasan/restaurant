import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Food Enthusiast",
      rating: 5,
      comment: "Food Express has completely changed my dining experience! The delivery is always lightning fast and the food arrives hot and fresh. Highly recommended!",
      image: "👩‍💼",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Busy Professional",
      rating: 5,
      comment: "As someone who works long hours, Food Express is a lifesaver. The app is easy to use and the delivery times are consistently accurate.",
      image: "👨‍💻",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Sarah Martinez",
      role: "Family Cook",
      rating: 4,
      comment: "Great variety of restaurants and the quality is always top-notch. My family loves trying new dishes through Food Express!",
      image: "👩‍👧‍👦",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Student",
      rating: 5,
      comment: "Affordable prices and amazing discounts. The customer support team is very helpful whenever I have questions about my order.",
      image: "👨‍🎓",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Health Conscious",
      rating: 5,
      comment: "I love that I can filter restaurants by dietary preferences. The nutritional information helps me make better choices.",
      image: "👩‍⚕️",
      date: "5 days ago"
    },
    {
      id: 6,
      name: "Robert Brown",
      role: "Frequent Customer",
      rating: 4,
      comment: "Been using Food Express for months now. The loyalty program is fantastic and the delivery partners are always polite and professional.",
      image: "👨‍💼",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read real reviews from our satisfied customers 
            who have experienced the Food Express difference.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Positive Feedback</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15min</div>
              <div className="text-gray-600">Avg. Response Time</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-orange-100"
            >
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Loved your Food Express experience? Share your story and help others discover 
            the best food delivery service in town!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Write a Review
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300">
              Download App
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by thousands of customers across the city
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">🍕</div>
            <div className="text-2xl font-bold text-gray-400">🍔</div>
            <div className="text-2xl font-bold text-gray-400">🍣</div>
            <div className="text-2xl font-bold text-gray-400">🥗</div>
            <div className="text-2xl font-bold text-gray-400">☕</div>
            <div className="text-2xl font-bold text-gray-400">🍰</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
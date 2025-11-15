// MenuPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pizzaImage from '../../public/asserts/menu/pizza.png';
import juices from '../../public/asserts/menu/juice.png';
import burgerImage from '../../public/asserts/menu/Burger.png';
import dessertsImage from '../../public/asserts/menu/Dessert.png';
import Fastfood from '../../public/asserts/menu/Fast.png';
import Chinese from '../../public/asserts/menu/Chinese.png';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: any;
  rating: number;
  preparationTime: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load cart and last category from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('foodExpressCart');
    const savedCategory = localStorage.getItem('foodExpressLastCategory');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('foodExpressCart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  // Save active category to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('foodExpressLastCategory', activeCategory);
    }
  }, [activeCategory, isClient]);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️', count: 24 },
    { id: 'pizza', name: 'Pizza', icon: '🍕', count: 8 },
    { id: 'burger', name: 'Burgers', icon: '🍔', count: 6 },
    { id: 'fastfood', name: 'Fast Food', icon: '🌭', count: 5 },
    { id: 'chinese', name: 'Chinese', icon: '🥡', count: 4 },
    { id: 'beverages', name: 'Beverages', icon: '🥤', count: 4 },
    { id: 'desserts', name: 'Desserts', icon: '🍰', count: 3 },
  ];

  const menuItems: MenuItem[] = [
    // Pizza Items
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomato sauce, mozzarella, and basil",
      price: 1250,
      category: "pizza",
      image: pizzaImage,
      rating: 4.8,
      preparationTime: "20-25 min",
      isVegetarian: true,
      isPopular: true
    },
    {
      id: 2,
      name: "Pepperoni Feast",
      description: "Spicy pepperoni with extra cheese and herbs",
      price: 1450,
      category: "pizza",
      image: pizzaImage,
      rating: 4.7,
      preparationTime: "25-30 min",
      isSpicy: true
    },
    {
      id: 3,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken with BBQ sauce and red onions",
      price: 1550,
      category: "pizza",
      image: pizzaImage,
      rating: 4.6,
      preparationTime: "25-30 min"
    },
    {
      id: 4,
      name: "Vegetarian Supreme",
      description: "Loaded with fresh vegetables and mozzarella",
      price: 1350,
      category: "pizza",
      image: pizzaImage,
      rating: 4.5,
      preparationTime: "20-25 min",
      isVegetarian: true
    },

    // Burger Items
    {
      id: 5,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      price: 850,
      category: "burger",
      image: burgerImage,
      rating: 4.7,
      preparationTime: "15-20 min",
      isPopular: true
    },
    {
      id: 6,
      name: "Crispy Chicken Burger",
      description: "Crispy fried chicken with mayo and fresh veggies",
      price: 750,
      category: "burger",
      image: burgerImage,
      rating: 4.6,
      preparationTime: "15-20 min"
    },
    {
      id: 7,
      name: "Double Cheese Burger",
      description: "Double beef patty with double cheese and bacon",
      price: 1200,
      category: "burger",
      image: burgerImage,
      rating: 4.8,
      preparationTime: "20-25 min"
    },

    // Fast Food Items
    {
      id: 8,
      name: "French Fries",
      description: "Crispy golden fries with seasoning",
      price: 350,
      category: "fastfood",
      image: Fastfood,
      rating: 4.4,
      preparationTime: "10-15 min",
      isVegetarian: true
    },
    {
      id: 9,
      name: "Chicken Wings",
      description: "Spicy buffalo wings with ranch dip",
      price: 950,
      category: "fastfood",
      image: Fastfood,
      rating: 4.6,
      preparationTime: "20-25 min",
      isSpicy: true
    },

    // Chinese Items
    {
      id: 10,
      name: "Chicken Fried Rice",
      description: "Stir-fried rice with chicken and vegetables",
      price: 850,
      category: "chinese",
      image: Chinese,
      rating: 4.5,
      preparationTime: "15-20 min"
    },
    {
      id: 11,
      name: "Sweet and Sour Chicken",
      description: "Crispy chicken in tangy sweet and sour sauce",
      price: 1100,
      category: "chinese",
      image: Chinese,
      rating: 4.6,
      preparationTime: "20-25 min"
    },

    // Beverages
    {
      id: 12,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice",
      price: 350,
      category: "beverages",
      image: juices,
      rating: 4.7,
      preparationTime: "5 min",
      isVegetarian: true
    },
    {
      id: 13,
      name: "Mango Smoothie",
      description: "Creamy mango smoothie with yogurt",
      price: 450,
      category: "beverages",
      image: juices,
      rating: 4.8,
      preparationTime: "5 min",
      isVegetarian: true,
      isPopular: true
    },

    // Desserts
    {
      id: 14,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 550,
      category: "desserts",
      image: dessertsImage,
      rating: 4.9,
      preparationTime: "10-15 min",
      isVegetarian: true,
      isPopular: true
    },
    {
      id: 15,
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream with chocolate sauce and nuts",
      price: 450,
      category: "desserts",
      image: dessertsImage,
      rating: 4.7,
      preparationTime: "5 min",
      isVegetarian: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getItemQuantity = (itemId: number) => {
    return cart[itemId] || 0;
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Save the selected category immediately
    if (isClient) {
      localStorage.setItem('foodExpressLastCategory', categoryId);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  // Don't render anything until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Menu
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover delicious meals crafted with love and the finest ingredients
              </p>
              <div className="flex justify-center items-center space-x-2 text-lg text-gray-600">
                <span className="text-gray-900 hover:text-orange-600 cursor-pointer">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-orange-600 font-semibold">Menu</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading state for menu content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center">
            <div className="animate-pulse">Loading menu...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover delicious meals crafted with love and the finest ingredients
            </p>
            <div className="flex justify-center items-center space-x-2 text-lg text-gray-600">
              <span className="text-gray-900 hover:text-orange-600 cursor-pointer">Home</span>
              <span className="text-gray-400">/</span>
              <span className="text-orange-600 font-semibold">Menu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Cart */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              suppressHydrationWarning
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-gray-400 text-xl">🔍</span>
            </div>
          </div>

          {/* Cart Button */}
          <Link href="/cart">
            <button 
              className="relative bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2"
              suppressHydrationWarning
            >
              <span>🛒</span>
              <span>Cart</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
                }`}
                suppressHydrationWarning
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-orange-600'
                    : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Item Image */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {item.isPopular && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {item.preparationTime}
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      {item.isVegetarian && (
                        <span className="text-green-500 text-lg" title="Vegetarian">🌱</span>
                      )}
                      {item.isSpicy && (
                        <span className="text-red-500 text-lg" title="Spicy">🌶️</span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(item.rating)}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-orange-600">
                      Rs. {item.price.toLocaleString()}
                    </div>

                    <div className="flex items-center space-x-2">
                      {quantity > 0 ? (
                        <>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                            suppressHydrationWarning
                          >
                            -
                          </button>
                          <span className="font-semibold text-lg min-w-8 text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                            suppressHydrationWarning
                          >
                            +
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                          suppressHydrationWarning
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              suppressHydrationWarning
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Special Offers Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offers!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get 20% off on your first order! Use code <strong>WELCOME20</strong> at checkout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cart">
              <button 
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                suppressHydrationWarning
              >
                Order Now
              </button>
            </Link>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              suppressHydrationWarning
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
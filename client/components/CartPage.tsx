// CartPage.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CartItem {
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
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  updateCart: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ 
  cartItems, 
  updateCart, 
  removeFromCart, 
  clearCart 
}) => {
  const router = useRouter();

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 200; // Free delivery above Rs. 2000
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + deliveryFee + tax;

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateCart(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // In a real app, you would navigate to checkout page
    alert('Proceeding to checkout!');
    // router.push('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Cart
              </h1>
              <div className="flex justify-center items-center space-x-2 text-lg text-gray-600">
                <Link href="/" className="text-gray-900 hover:text-orange-600 cursor-pointer">
                  Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/menu" className="text-gray-900 hover:text-orange-600 cursor-pointer">
                  Menu
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-orange-600 font-semibold">Cart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              href="/menu"
              className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              Browse Menu
            </Link>
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
              Your Cart
            </h1>
            <div className="flex justify-center items-center space-x-2 text-lg text-gray-600">
              <Link href="/" className="text-gray-900 hover:text-orange-600 cursor-pointer">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/menu" className="text-gray-900 hover:text-orange-600 cursor-pointer">
                Menu
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-orange-600 font-semibold">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 font-semibold text-sm"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Item Image */}
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                            {item.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            {item.isVegetarian && (
                              <span className="text-green-500 text-sm" title="Vegetarian">🌱</span>
                            )}
                            {item.isSpicy && (
                              <span className="text-red-500 text-sm" title="Spicy">🌶️</span>
                            )}
                            <span className="text-gray-500 text-sm">{item.preparationTime}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-orange-600">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            Rs. {item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="font-semibold text-lg min-w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-semibold text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Link
                href="/menu"
                className="flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold text-lg"
              >
                <span>←</span>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (5%)</span>
                  <span>Rs. {tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              {subtotal < 2000 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-orange-800 text-sm text-center">
                    Add Rs. {(2000 - subtotal).toLocaleString()} more for free delivery!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-colors text-lg mb-4"
              >
                Proceed to Checkout
              </button>

              {/* Security Info */}
              <div className="text-center text-sm text-gray-500">
                <p>🔒 Secure checkout</p>
                <p className="mt-1">We protect your payment information</p>
              </div>

              {/* Special Offers */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white text-center">
                <h3 className="font-semibold mb-2">Special Offer!</h3>
                <p className="text-sm">
                  Use code <strong>WELCOME20</strong> for 20% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
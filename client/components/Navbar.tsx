// Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarProps } from '@/types/navbar';
import { FaBell, FaShoppingCart, FaUser, FaSearch, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import NotificationPopup from './NotificationPopup';
import SignInPopup from './SignInPopup';
import SignUpPopup from './SignUpPopup';

const Navbar: React.FC<NavbarProps> = ({ 
  logo, 
  companyName, 
  navItems, 
  className = '' 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3);
  const [notificationCount, setNotificationCount] = useState(2);
  const [isMounted, setIsMounted] = useState(false);
  
  // New state for popups
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  const pathname = usePathname();

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Notification handlers
  const handleNotificationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  // Sign In handlers
  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignIn(true);
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  const handleSwitchToSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  // Sign Up handlers
  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  // Login/Logout handlers
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSignIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <nav className={`bg-[#FF6347] text-white shadow-lg ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Static logo for SSR */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                {logo ? (
                  <img 
                    className="h-10 w-10 mr-3" 
                    src={logo} 
                    alt={`${companyName} logo`}
                  />
                ) : (
                  <div className="h-10 w-10 mr-3 bg-white rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-lg">F</span>
                  </div>
                )}
                <span className="font-bold text-xl sm:text-2xl">{companyName}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`bg-[#FF6347] text-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand - Left side */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {logo ? (
                <img 
                  className="h-10 w-10 mr-3" 
                  src={logo} 
                  alt={`${companyName} logo`}
                />
              ) : (
                <div className="h-10 w-10 mr-3 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">F</span>
                </div>
              )}
              <span className="font-bold text-xl sm:text-2xl">{companyName}</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
            <div className="flex items-center space-x-3">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => handleDropdownToggle(item.id, e)}
                        className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors flex items-center ${
                          isActiveLink(item.href) ? 'bg-orange-700' : ''
                        }`}
                        suppressHydrationWarning
                      >
                        {item.label}
                        <FaChevronDown className="ml-1 w-3 h-3" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.id && (
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.id}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-gray-800 hover:bg-orange-50 border-b border-gray-100 last:border-b-0"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors ${
                        isActiveLink(item.href) ? 'bg-orange-700' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side icons and auth - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
           
            {/* Notification Icon */}
            <button 
              onClick={handleNotificationClick}
              className="relative p-2 hover:bg-orange-600 rounded-md transition-colors"
              suppressHydrationWarning
            >
              <FaBell className="w-5 h-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* Cart with notification badge */}
            <Link href="/cart" className="relative p-2 hover:bg-orange-600 rounded-md transition-colors">
              <FaShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Authentication */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={(e) => handleDropdownToggle('user', e)}
                  className="flex items-center space-x-2 p-2 hover:bg-orange-600 rounded-md transition-colors"
                  suppressHydrationWarning
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaUser className="text-orange-500 text-sm" />
                  </div>
                </button>
                
                {activeDropdown === 'user' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                      My Orders
                    </Link>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 border-t border-gray-100"
                      suppressHydrationWarning
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSignInClick}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                  suppressHydrationWarning
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUpClick}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-orange-500 hover:bg-gray-100 transition-colors"
                  suppressHydrationWarning
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button and icons */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Search icon for mobile */}
            <Link href="/search" className="p-2 hover:bg-orange-600 rounded-md transition-colors">
              <FaSearch className="w-5 h-5" />
            </Link>

            {/* Cart icon for mobile */}
            <Link href="/cart" className="relative p-2 hover:bg-orange-600 rounded-md transition-colors">
              <FaShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Menu Icon Button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-600 focus:outline-none transition-colors"
              aria-label="Main menu"
              suppressHydrationWarning
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <div className="relative w-80 max-w-sm">
                <div className="h-full bg-orange-500 shadow-xl overflow-y-auto">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-orange-400">
                    <span className="text-lg font-semibold">Menu</span>
                    <button
                      onClick={closeMobileMenu}
                      className="p-2 rounded-md hover:bg-orange-600 transition-colors"
                      suppressHydrationWarning
                    >
                      <FaTimes className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="px-4 py-2 space-y-1">
                    {navItems.map((item) => (
                      <div key={item.id} className="border-b border-orange-400 last:border-b-0">
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={(e) => handleDropdownToggle(item.id, e)}
                              className="w-full text-left px-3 py-4 rounded-md text-base font-medium hover:bg-orange-600 flex justify-between items-center transition-colors"
                              suppressHydrationWarning
                            >
                              <span>{item.label}</span>
                              <FaChevronDown 
                                className={`w-4 h-4 transition-transform ${
                                  activeDropdown === item.id ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            {activeDropdown === item.id && (
                              <div className="pl-4 space-y-1 bg-orange-600 rounded-md mb-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.id}
                                    href={dropdownItem.href}
                                    className="block px-3 py-3 rounded-md text-base font-medium hover:bg-orange-700 border-b border-orange-500 last:border-b-0 transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    <div className="font-medium">{dropdownItem.label}</div>
                                    {dropdownItem.description && (
                                      <div className="text-xs text-orange-200 mt-1">{dropdownItem.description}</div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-3 py-4 rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile User Section */}
                  <div className="px-4 py-4 border-t border-orange-400 mt-4">
                    {isLoggedIn ? (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <FaUser className="text-orange-500 text-sm" />
                          </div>
                          <span className="font-medium">Welcome User!</span>
                        </div>
                        <div className="space-y-2">
                          <button
                            onClick={handleNotificationClick}
                            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-orange-600 transition-colors flex items-center justify-between"
                            suppressHydrationWarning
                          >
                            <span>Notifications</span>
                            {notificationCount > 0 && (
                              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {notificationCount}
                              </span>
                            )}
                          </button>
                          <Link
                            href="/orders"
                            className="block px-3 py-3 rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            My Orders
                          </Link>
                          <Link
                            href="/profile"
                            className="block px-3 py-3 rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            Profile
                          </Link>
                          <button
                            onClick={() => {
                              handleLogout();
                              closeMobileMenu();
                            }}
                            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-orange-600 text-red-200 transition-colors"
                            suppressHydrationWarning
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="px-3 py-2 text-orange-200">Welcome to FoodExpress!</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              handleSignInClick(e);
                              closeMobileMenu();
                            }}
                            className="flex-1 text-center px-4 py-3 rounded-md text-base font-medium hover:bg-orange-600 border border-orange-400 transition-colors"
                            suppressHydrationWarning
                          >
                            Sign In
                          </button>
                          <button
                            onClick={(e) => {
                              handleSignUpClick(e);
                              closeMobileMenu();
                            }}
                            className="flex-1 text-center px-4 py-3 rounded-md text-base font-medium bg-white text-orange-600 hover:bg-gray-100 transition-colors"
                            suppressHydrationWarning
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <NotificationPopup 
        isOpen={showNotifications} 
        onClose={handleCloseNotifications} 
      />

      <SignInPopup 
        isOpen={showSignIn} 
        onClose={handleCloseSignIn}
        onSwitchToSignUp={handleSwitchToSignUp}
        onSuccess={handleLogin}
      />

      <SignUpPopup 
        isOpen={showSignUp} 
        onClose={handleCloseSignUp}
        onSwitchToSignIn={handleSwitchToSignIn}
        onSuccess={handleLogin}
      />
    </nav>
  );
};

export default Navbar;
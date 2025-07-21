"use client";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <h2>Next</h2>

          <nav className="hidden md:flex space-x-6">
            <Link
              href="/home"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Product
            </Link>
            <Link
              href="/recipes"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Recipes
            </Link>
          
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="font-medium">Welcome, {user?.username}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 6h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow-lg py-2 px-4 mt-2">
                <Link
                  href="/home"
                  className="block py-2 hover:text-gray-200 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="block py-2 hover:text-gray-200 transition-colors duration-200"
                >
                  Product
                </Link>
                <Link
                  href="/recipes"
                  className="block py-2 hover:text-gray-200 transition-colors duration-200"
                >
                  Recipes
                </Link>
              
                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    className="block py-2 hover:text-gray-200 transition-colors duration-200"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block py-2 hover:text-gray-200 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

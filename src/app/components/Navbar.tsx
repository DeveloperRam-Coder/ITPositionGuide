"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to detect when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add margin when scrolled down
      } else {
        setIsScrolled(false); // Remove margin when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav
        className={`sticky top-5 mx-auto w-[50%] rounded border border-yellow-200 dark:border-yellow-500 px-3  py-2 shadow-md z-10 ${
          isScrolled ? "mt-4" : ""
        } bg-yellow-200 bg-opacity-5 backdrop-blur-sm`} // Add transparency and backdrop blur
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3  text-white">
            {/* Logo Image */}
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            {/* Text Link */}
            <a href="/" className="hover:text-yellow-600 font-medium">
              FindWell
            </a>
          </div>

          {/* Navigation Links for larger screens */}
          <ul className="hidden lg:flex lg:space-x-6 text-lg font-medium">
            <li>
              <a
                href="/"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-page"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu for mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <span className="material-icons">menu</span>{" "}
              {/* Hamburger icon */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

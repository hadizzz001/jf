"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter(); // Initialize the router

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        setCategories(data); // Assuming the response is an array of categories
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle category click and navigate to the machines page
  const handleCategoryClick = (categoryName) => {
    router.push(`/machines?cat=${categoryName}`);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isOpen ? "bg-gray-800" : "bg-black"} transition-colors duration-300`}
        style={{ padding: "1em" }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://ucarecdn.com/f4020f98-be3d-4d27-b301-7df5bf18ee96/logo.png"
              alt="Jardali Food Machines"
              className="w-36"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-gray-300 sm:text-white">Home</a>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="machines-menu"
            >
              Machines
            </button>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button
            className="block md:hidden text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden bg-black text-white py-4 px-6"
          >
            <a href="/" className="block py-2 hover:text-gray-300" onClick={toggleNav}>
              Home
            </a>
            <a href="/about" className="block py-2 hover:text-gray-300" onClick={toggleNav}>
              About
            </a>
            <button
              onClick={() => {
                toggleMenu();
                toggleNav();
              }}
              className="block w-full text-left py-2 hover:text-gray-300"
            >
              Machines
            </button>
            <a href="/contact" className="block py-2 hover:text-gray-300" onClick={toggleNav}>
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Dropdown content for Machines */}
      {isOpen && (
        <div
          id="machines-menu"
          className="fixed top-0 left-0 right-0 z-40 bg-gray-900 mt-20"
          style={{ height: "auto" }}
        >
          <div className="container mx-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6"
              style={{
                maxHeight: "700px", // Set a max height for the grid
                overflowY: "auto",  // Enable vertical scrolling
              }}
            >
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <a href={`/machines?cat=${category.name}`} target="_blank" role="button">
                  <div key={index} className="flex items-center justify-start space-x-3">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="w-12 h-12 object-cover rounded-md"
                      onClick={() => handleCategoryClick(category.name)} // Handle click
                    />
                    <h3
                      className="text-xs text-white text-left"
                      style={{ fontWeight: "normal" }}
                    >
                      
                      {category.name}
                    </h3>
                  </div>
                  </a>
                ))
              ) : (
                <p className="text-white text-center">Loading categories...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Head;

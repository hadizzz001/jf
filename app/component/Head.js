"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);  // For toggling products dropdown
  const [isNavOpen, setIsNavOpen] = useState(false);  // For mobile menu
  const [categories, setCategories] = useState([]);  // For products categories
  const [isOpen1, setIsOpen1] = useState(false);  // For toggling parts dropdown
  const [categories1, setCategories1] = useState([]);  // For parts categories
  const [activeCategory, setActiveCategory] = useState(null);
  const router = useRouter();

  // Toggle function for the products dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);  // Close parts dropdown if it's open
  };

  // Toggle function for the parts dropdown
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);  // Close products dropdown if it's open
  };

  // Fetch products categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category1/products");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch parts categories
  useEffect(() => {
    const fetchCategories1 = async () => {
      try {
        const response = await fetch("/api/category1/parts");
        const data = await response.json();
        setCategories1(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories1();
  }, []);




  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName === activeCategory ? null : categoryName); // Toggle active category
    router.push(`/machines?cat=${categoryName}`);
  };



  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-colors duration-300 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="pics/logo1.png" alt="Logo" className="w-36" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-6 flex-grow">
            <li className="relative list-none group cursor-pointer">
              <a href="/" className="text-black font-medium hover:text-[#2585f8] relative">
                Home
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative list-none group cursor-pointer">
              <a href="/about" className="text-black font-medium hover:text-[#2585f8] relative">
                About
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Products Dropdown */}
            <li className="relative list-none group cursor-pointer" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-black font-medium hover:text-[#2585f8] relative">
                  Products
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>

                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </li>


            {/* Parts Dropdown */}
            <li className="relative list-none group cursor-pointer" onClick={toggleMenu1}>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-black font-medium hover:text-[#2585f8] relative">
                  Parts
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>

                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${isOpen1 ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </li>

            <li className="relative list-none group cursor-pointer">
              <a href="/client" className="text-black font-medium hover:text-[#2585f8] relative">
                Clients
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative list-none group cursor-pointer">
              <a href="/contact" className="text-black font-medium hover:text-[#2585f8] relative">
                Contact
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </nav>


          {/* Mobile Hamburger Icon */}
          <button
            className="block md:hidden text-black hover:text-gray-300 focus:outline-none"
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
        {isNavOpen && (
          <div style={{zIndex: "9999999999999999", position: "absolute", background: "white", paddingRight: "21em"}}>
            <nav
              id="mobile-menu"
              className="md:hidden bg-white text-black py-4 px-6"
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
                Products
              </button>
              <button
                onClick={() => {
                  toggleMenu1();
                  toggleNav();
                }}
                className="block w-full text-left py-2 hover:text-gray-300"
              >
                Parts
              </button>
              <a href="/client" className="block py-2 hover:text-gray-300" onClick={toggleNav}>
                Clients
              </a>
              <a href="/contact" className="block py-2 hover:text-gray-300" onClick={toggleNav}>
                Contact
              </a>
            </nav>
          </div>
        )}


        {isOpen && (
          <div className="fixed top-0 left-0 right-0 z-40 bg-white mt-20">
            <div className="container mx-auto">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6"
                style={{ maxHeight: "700px", overflowY: "auto" }}
              >
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start space-x-2 cursor-pointer group relative"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <img
                        src={category.img}
                        alt={category.name}
                        className="w-12 h-12 object-cover rounded-md group-hover:opacity-80 transition-opacity duration-300"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <h3 id="catid" className="text-xs text-black font-thin text-center">{category.name}</h3>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-black text-center">Loading categories...</p>
                )}
              </div>
            </div>
          </div>
        )}






        {isOpen1 && (
          <div className="fixed top-0 left-0 right-0 z-40 bg-white mt-20">
            <div className="container mx-auto">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6"
                style={{ maxHeight: "700px", overflowY: "auto" }}
              >
                {categories1.length > 0 ? (
                  categories1.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start space-x-2 cursor-pointer group relative"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <img
                        src={category.img}
                        alt={category.name}
                        className="w-12 h-12 object-cover rounded-md group-hover:opacity-80 transition-opacity duration-300"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <h3 id="catid" className="text-xs text-black font-thin text-center">{category.name}</h3>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2585f8] transition-all duration-300 group-hover:w-full"></span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-black text-center">Loading categories...</p>
                )}
              </div>
            </div>
          </div>
        )}

      </header>
    </>
  );
};

export default Head;

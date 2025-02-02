"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Head from '../component/Head';
import Footer from '../component/Footer';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Dashboard = () => {
  const [allTemp, setTemp] = useState([]);       // All Products
  const [allProd, setProd] = useState([]);       // Product Categories
  const [allParts, setParts] = useState([]);     // Parts Categories
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]); // Data displayed based on `cat` or search
  const [expandedCategories, setExpandedCategories] = useState({
    Products: true,
    Parts: false,
  }); // Initialize with all categories expanded
  const [loading, setLoading] = useState(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState(12);  // Number of items to show
  const [totalItemsCount, setTotalItemsCount] = useState(0); // Total number of items

  const router = useRouter();
  const searchParams = useSearchParams();
  const cat = searchParams.get('cat'); // Check for "cat" param in the URL

  // Fetch "allTemp" (Default Data) - All Products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (Array.isArray(data)) {
          setTemp(data);
          setFilteredData(data); // Initially display allTemp
          setTotalItemsCount(data.length); // Set the total number of items
        } else {
          console.error("Expected an array, but got:", data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  // Fetch based on "cat" parameter
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (cat) {
        try {
          setLoading(true);

          const response = await fetch(`/api/products/${cat}`);
          const data = await response.json(); 
          console.log("code: ", response.status);
          if (Array.isArray(data)) { 
            console.log("enter 0");
            if ( response.status === 404) {
              console.log("enter 1");
              
              // If no data is returned, display an empty message
              setFilteredData([]);
              setTotalItemsCount(0);
            } else {
              console.log("enter 2");
              setFilteredData(data);
              setTotalItemsCount(data.length); // Set the total number of items for the category
            }
          } else {
            setFilteredData([]);
            setTotalItemsCount(0);
            console.error("Expected an array, but got:", data);
          }
        } catch (error) {
          console.error("Failed to fetch category data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setFilteredData(allTemp); // If no `cat`, fallback to `allTemp`
        setTotalItemsCount(allTemp.length); // Set the total number of items
      }
    };
    fetchCategoryData();
  }, [cat, allTemp]);

  // Fetch Product Categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/category1/products");
        const data = await response.json();
        setProd(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch Parts Categories
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch("/api/category1/parts");
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error("Failed to fetch parts:", error);
      }
    };
    fetchParts();
  }, []);

  // Handle Search Functionality
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = searchQuery.toLowerCase().trim();
      const filtered = allTemp.filter(item =>
        item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
      );
      setFilteredData(query ? filtered : allTemp);
      setTotalItemsCount(query ? filtered.length : allTemp.length);
    }
  };

  // Handle Category Expansion
  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle Show More Button Click
  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => {
      // Don't allow visibleItemsCount to exceed totalItemsCount
      const newCount = prevCount + 12;
      return newCount > totalItemsCount ? totalItemsCount : newCount;
    });
  };

  const allItemsLoaded = visibleItemsCount >= totalItemsCount; // Check if all items are displayed

  return (
    <>
      <Head />
      <header className="p-4 flex justify-center items-center mt-[100px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <div className="flex flex-wrap md:flex-nowrap mt-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-2 md:p-4 bg-gray-100">
          {/* Products Category */}
          <div>
            <h3
              onClick={() => handleCategoryClick('Products')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Products
              {expandedCategories['Products'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Products'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allProd.map((item, index) => (
                  <li key={index}>
                    <a href={`?cat=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Parts Category */}
          <div className="mt-4">
            <h3
              onClick={() => handleCategoryClick('Parts')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Parts
              {expandedCategories['Parts'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Parts'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allParts.map((item, index) => (
                  <li key={index}>
                    <a href={`?cat=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : filteredData.length === 0 ? (
            <p>No data available for this category.</p> // Show this message if no data is available
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(filteredData) && filteredData.slice(0, visibleItemsCount).map((item, index) => (
                <a href={`/product?id=${item.id}`} className="text-black hover:text-[#2585f8] transition">
                  <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
                    {item.img && (
                      <div className="relative">
                        <img 
                          src={`api/proxy?url=${item.img[0]}`}
                          alt={item.title}
                          className="w-full aspect-[1/1] object-cover mb-4 transition-all duration-300"
                        />
                        <img
                        src={`api/proxy?url=${item.img[1]}`} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                        />
                      </div>
                    )}
                    <h2 style={{textAlign:'center'}} className="font-semibold text-lg text-[#2585f8] mt-4">{item.title || `Item ${index + 1}`}</h2>
                    <p style={{textAlign:'center'}} className="text-gray-600">{item.category || "No type available."}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {!allItemsLoaded && (
            <div className="mt-4 text-center">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;

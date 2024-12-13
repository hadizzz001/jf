"use client";

import { fetchTemp } from './../utils';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Head from '../component/Head';
import Footer from '../component/Footer';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const categories = {
  Products: [
    "Shawarma Machines",
    "Shawarma Knife & Meat Slicers",
    "Pita Oven",
    "Hummus Blender",
    "Saj Machine",
    "Kebab Char Broilers & Griddles",
    "Falafel & Meat Grinder",
    "Dough Mixers & Rollers",
    "Automatic Salad Bar Chopper",
    "Gas Ranges",
    "Salad Bar Refrigeration & Food Warmers",
    "Kunafet",
    "Gelato & Middle Eastern Booza",
    "Coffee & Espresso Machines",
    "Accessories",
    "Shawarma Meat Slicer",
    "Rotisserie Chicken",
    "Fryers",
    "Automatic Kebab Encrusted",
    "Used & Refurbished"
  ],
  Parts: [
    "Shawarma Machine Parts",
    "Hummus Machine Parts",
    "Electric Shawarma Knives",
    "Pita Oven Parts",
    "Saj Machine Parts",
    "Falafel Maker Parts",
    "Mixer Parts",
    "Divider Parts"
  ]
};



// Extracts the filter parameter from the URL
const FilterParams = () => {
  const searchParams = useSearchParams();
  return searchParams.get('filter');
};

const DashboardContent = ({ filter }) => {
  const [allTemp, setTemp] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchTemp();
    setTemp(data);
    setFilteredData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredData(allTemp.filter((item) => item.type.includes(filter)));
    } else {
      setFilteredData(allTemp);
    }
  }, [filter, allTemp]);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const filtered = allTemp.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(allTemp);
      }
    }
  };

  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  console.log("allTemp: ", allTemp);

  return (
    <>
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
        {/* Filter Section */}
        <aside className="w-full md:w-1/4 p-2 md:p-4 bg-gray-100">
          {Object.keys(categories).map((category) => (
            <div key={category} className="m-0">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <h4 className="text-sm sm:text-lg font-semibold text-[#2585f8]">{category}</h4>
                <span>
                  {expandedCategories[category] ? (
                    <AiOutlineUp className="text-[#2585f8]" />
                  ) : (
                    <AiOutlineDown className="text-[#2585f8]" />
                  )}
                </span>
              </div>
              {expandedCategories[category] && (
                <ul className="list-none mt-1 space-y-1">
                  {categories[category].map((subcategory) => (
                    <li key={subcategory}>
                      <button
                        onClick={() => router.push(`?filter=${subcategory}`)}
                        className="text-sm text-black hover:text-[#2585f8] transition text-left break-words"
                      >
                        {subcategory}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
                    <h2 className="font-semibold text-lg text-[#2585f8]">{item.title || `Item ${index + 1}`}</h2>
                    {item.img && (
                      <img
                        src={item.img[0]}
                        alt={item.title}
                        className="w-full h-48 object-cover mb-4"
                      />
                    )}
                    <p className="text-gray-600">{item.type || "No type available."}</p>
                    <a href={`/product?id=${item.id}`} className="text-black hover:text-[#2585f8] transition">
                      Read More
                    </a>
                  </div>
                ))
              ) : (
                <p>No results found for "{searchQuery}".</p>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

const Dashboard = () => {
  const filter = FilterParams();

  return (
    <>
      <Head />
      <DashboardContent filter={filter} />
      <Footer />
    </>
  );
};

export default Dashboard;

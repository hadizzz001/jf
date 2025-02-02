"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Head from "../component/Head";
import Footer from "../component/Footer";
import ProductsList from "../component/ProductsList";

const PageContent = ({ search }) => {
  const [productData, setProductData] = useState(null);
  const [productData1, setProductData1] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("details"); // Tracks active tab
  const [activeSection1, setActiveSection1] = useState(null);


  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // Number of visible thumbnails


  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`/api/products1/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetchProductData(search).then((data) => {
        setProductData(data);
        setLoading(false);
      });
    }
  }, [search]);






  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productData) {
    return <p>No data found</p>;
  }

  const {
    id,
    img: imgs,
    title,
    sku,
    weight,
    shipping,
    description,
    specifications,
    videoLink,
    type,
    category
  } = productData;



  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };


  const embedUrl = getYouTubeEmbedUrl(videoLink);

  function getYouTubeEmbedUrl(videoLink) {
    if (!videoLink || typeof videoLink !== "string") {
      console.error("Invalid video link provided");
      return null;
    }

    try {
      const url = new URL(videoLink);

      // Check if it's a YouTube domain
      if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
        const videoId = url.searchParams.get("v"); // Extract the video ID
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      } else if (url.hostname === "youtu.be") {
        // Handle shortened YouTube URLs (e.g., https://youtu.be/dQw4w9WgXcQ)
        return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
      }

      throw new Error("Invalid YouTube URL format");
    } catch (error) {
      console.error("Error parsing video link:", error.message);
      return null;
    }
  }














  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (startIndex + visibleCount < imgs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleScrollLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentImageIndex < imgs.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };




  function handleMouseMove(e) {
    const image = document.getElementById("mainImage");
    const { left, top, width, height } = image.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculating the percentage of the mouse position within the image bounds
    const moveX = ((offsetX - centerX) / centerX) * 50; // Adjusted for a more natural effect
    const moveY = ((offsetY - centerY) / centerY) * 50; // Adjusted for a more natural effect

    image.style.transition = "transform 0.1s ease-in-out"; // Instant zoom effect
    image.style.transform = `scale(1.5) translate(${moveX}%, ${moveY}%)`; // Apply accurate cursor-following zoom
  }

  // Reset zoom when mouse leaves the image
  function handleMouseLeave() {
    const image = document.getElementById("mainImage");
    image.style.transition = "transform 0.3s ease-in-out"; // Smooth return
    image.style.transform = "scale(1)"; // Reset zoom
  }








  const handleClick = (section) => {
    setActiveSection(section);
  };


  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .header-section {\n    background-image: -webkit-gradient(linear, left top, right top, from(#2585f8), to(#b5d6ff))!important;\n    background-image: linear-gradient(to right, #2585f8 0, #b5d6ff 100%) !important;\n}\n"
        }}
      />


      <section style={{ marginTop: '8em' }} className="header-section ">
        <div className="header-content-box">
          <div className="container">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumbs">
                <li className="breadcrumb ">
                  <a
                    className="breadcrumb-label"
                    style={{ fontSize: '14px' }}
                    href="/"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li className="breadcrumb ">
                  <a
                    className="breadcrumb-label"
                    style={{ fontSize: '14px' }}
                    href="/machines"
                  >
                    <span>{type}</span>
                  </a>
                </li>
                <li className="breadcrumb ">
                  <a
                    className="breadcrumb-label"
                    style={{ fontSize: '14px' }}
                    href={`/machines?cat=${category}`}
                  >
                    <span>{category}</span>
                  </a>
                </li>
                <li className="breadcrumb is-active">
                  <a
                    style={{ fontSize: '14px' }}
                    className="breadcrumb-label"
                    href={`/product?id=${id}`}
                    aria-current="page"
                  >
                    <span> {title} </span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 mt-20">
        <div className="flex flex-col lg:flex-row w-full p-6 bg-white rounded-lg shadow-lg">
          {/* Image Slider */}

          <div>
            {/* PC Version */}
            <div className="hidden lg:flex space-x-4">
              {/* Thumbnail Slider */}
              <div className="relative flex flex-col">
                <div
                  className="relative overflow-hidden h-96"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="flex flex-col transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${startIndex * 100}px)`,
                    }}
                  >
                    {imgs.map((img, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg transition-transform duration-500 ease-in-out ${currentImageIndex === index
                          ? "scale-105  "
                          : "scale-95  "
                          }`}
                        style={{
                          transformOrigin: "center",
                          opacity:
                            startIndex <= index && index < startIndex + visibleCount
                              ? 1
                              : 0.5,
                        }}
                      >
                        <img 
                          src={`api/proxy?url=${img}`}
                          alt={`thumbnail-${index}`}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => handleThumbnailClick(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={handleScrollUp}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 15l-7.5-7.5L4.5 15"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleScrollDown}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex + visibleCount >= imgs.length}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 9l7.5 7.5L19.5 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="relative w-full h-[700px] overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {imgs && imgs.length > 0 ? (
                  <img
                  src={`api/proxy?url=${imgs[currentImageIndex]}`} 
                    alt={`image-${currentImageIndex}`}
                    className="w-full h-full object-cover rounded-lg transition-all  ease-in-out"
                    id="mainImage"
                  />
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>

            {/* Mobile Version */}
            <div className="block lg:hidden flex flex-col items-center space-y-4">
              <div className="relative flex items-center w-full">
                {/* Left Arrow */}
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.5L7.5 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Thumbnails */}
                <div className="flex justify-center overflow-x-auto space-x-4 mx-8">
                  {imgs.map((img, index) => (
                    <img
                      key={index} 
                      src={`api/proxy?url=${img}`}
                      alt={`thumbnail-${index}`}
                      className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${currentImageIndex === index
                        ? "scale-105 border-2 border-blue-600"
                        : "scale-95 border-2 border-transparent"
                        }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleScrollRight}
                  className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === imgs.length - 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19.5l7.5-7.5L9 4.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Main Image */}
              <div className="relative w-full">
                {imgs && imgs.length > 0 ? (
                  <img
                    src={`api/proxy?url=${imgs[currentImageIndex]}`} 
                    alt={`image-${currentImageIndex}`}
                    className="w-full h-64 object-cover rounded-lg transition-all duration-100 ease-in-out"
                  />
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>
          </div>


          {/* Product Info */}
          <div className="flex-1 px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-600 mt-4">
              <span className="font-semibold">SKU:</span> {sku}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Weight:</span> {weight} kg
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Shipping:</span> {shipping} USD
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9613538266"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white text-center py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 mt-6"
            >
              Contact on WhatsApp
            </a>


            <ul className="mt-6 space-y-4">
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block">
                    <svg
                      fill="#2585f8"
                      width="34px"
                      height="34px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <title>shipping</title>
                        <path d="M16.722 21.863c-0.456-0.432-0.988-0.764-1.569-0.971l-1.218-4.743 14.506-4.058 1.554 6.056-13.273 3.716zM12.104 9.019l9.671-2.705 1.555 6.058-9.67 2.705-1.556-6.058zM12.538 20.801c-0.27 0.076-0.521 0.184-0.765 0.303l-4.264-16.615h-1.604c-0.161 0.351-0.498 0.598-0.896 0.598h-2.002c-0.553 0-1.001-0.469-1.001-1.046s0.448-1.045 1.001-1.045h2.002c0.336 0 0.618 0.184 0.8 0.447h3.080v0.051l0.046-0.014 4.41 17.183c-0.269 0.025-0.538 0.064-0.807 0.138zM12.797 21.811c1.869-0.523 3.79 0.635 4.291 2.588 0.501 1.951-0.608 3.957-2.478 4.48-1.869 0.521-3.79-0.637-4.291-2.588s0.609-3.957 2.478-4.48zM12.27 25.814c0.214 0.836 1.038 1.332 1.839 1.107s1.276-1.084 1.062-1.92c-0.214-0.836-1.038-1.332-1.839-1.109-0.802 0.225-1.277 1.085-1.062 1.922zM29.87 21.701l-11.684 3.268c-0.021-0.279-0.060-0.561-0.132-0.842-0.071-0.281-0.174-0.545-0.289-0.799l11.623-3.25 0.482 1.623z" />
                      </g>
                    </svg>
                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Shipping</b>
                  <p>Calculated at Checkout</p>
                </div>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block">
                    <svg
                      fill="#2585f8"
                      width="34px"
                      height="34px"
                      viewBox="0 -4.19 122.88 122.88"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ enableBackground: "new 0 0 122.88 114.5" }}
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M118.66,9.63c0.67-0.13,1.37,0,1.95,0.35c0.99,0.41,1.69,1.38,1.69,2.52l0.57,79.58c0.05,0.98-0.43,1.95-1.33,2.48 l-32.5,19.39c-0.46,0.35-1.03,0.55-1.65,0.55c-0.15,0-0.3-0.01-0.44-0.04l-84.34-9.38C1.16,105.02,0,103.82,0,102.35V21.42h0 c-0.03-1.08,0.58-2.13,1.64-2.59l42.31-18.6l0,0c0.44-0.2,0.94-0.28,1.46-0.21L118.66,9.63L118.66,9.63z M90.14,33.86v73.06 l27.26-16.26l-0.53-73.65L90.14,33.86L90.14,33.86z M84.65,108.69V34.63l-35.97-4.59L47.5,64.41l-12.63-8.6l-12.63,7.14L24.85,27 L5.49,24.53v75.37L84.65,108.69L84.65,108.69z M78.96,9.94L52.43,25l34.51,4.4l24.19-15.24L78.96,9.94L78.96,9.94z M28.23,21.91 L53.95,6.66l-8.48-1.11L12.74,19.94L28.23,21.91L28.23,21.91z" />{" "}
                        </g>{" "}
                      </g>
                    </svg>

                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Free Pick Up At Our Warehouse</b>
                  <p>Saida, Lebanon</p>
                </div>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block mt-5">
                    <svg
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                      width="34px"
                      height="34px"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              " .st0{fill:none;stroke:#2585f8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#2585f8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;} .st2{fill:none;stroke:#2585f8;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;} .st3{fill:none;} "
                          }}
                        />{" "}
                        <polyline className="st0" points="2,9 19,9 19,24 10,24 " />{" "}
                        <circle className="st0" cx={24} cy={24} r={2} />{" "}
                        <circle className="st0" cx={8} cy={24} r={2} />{" "}
                        <polyline className="st0" points="19,24 19,13 25,13 29,18 29,24 26,24 " />{" "}
                        <line className="st0" x1={4} y1={13} x2={13} y2={13} />{" "}
                        <line className="st0" x1={2} y1={17} x2={11} y2={17} />{" "}
                        <rect x={-288} y={-432} className="st3" width={536} height={680} />{" "}
                      </g>
                    </svg>

                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Fast & Quick Shipping
                  </b>
                  <p>Our processing time for all orders is between 5-7 business days. Our goal is to ship your order out as quickly as possible. West Coast transit time is 5 business days while East Coast transit time is 2 business days.</p>
                </div>
              </li>
            </ul>





          </div>
        </div>


        <div className=" container  ">
          <div className=" "> </div>

          <div className="space-x-4 mt-6">
            <button
              onClick={() => setActiveSection("details")}
              className="flex-1 py-3 px-6 rounded-lg text-[#2585f8] border border-[#2585f8] hover:bg-[#2585f8] hover:text-white focus:bg-[#2585f8] focus:text-white"
              style={{ border: '1px solid #2585f8' }}
            >
              <i className="inline-block">
                {/* Icon goes here */}
              </i>
              Product Details
            </button>

            <button
              id="specbtn"
              onClick={() => setActiveSection("specifications")}
              className="flex-1 py-3 px-6 rounded-lg text-[#2585f8] border border-[#2585f8] hover:bg-[#2585f8] hover:text-white focus:bg-[#2585f8] focus:text-white"
              style={{ border: '1px solid #2585f8' }}
            >
              <i className="inline-block mr-1">
                {/* Icon goes here */}
              </i>
              Specifications
            </button>
          </div>





          <div className="col-1"> </div>
        </div>
        {/* Full-Width Sections */}
        <div className="w-full bg-white mt-8 px-8 py-6 shadow-lg">
          {activeSection === "details" && (
            <div
              className="prose lg:prose-xl max-w-[500px] custom-list"
              style={{ maxWidth: '500px' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {activeSection === "specifications" && (
            <div className="specifications-list">
              <ul className="list-none p-0">
              <div
              className="prose lg:prose-xl max-w-[500px] custom-list"
              style={{ maxWidth: '500px' }}
              dangerouslySetInnerHTML={{ __html: specifications }}
            />
              </ul>
            </div>

          )}
        </div>












        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20 mb-20" style={{ width: "100%", height: "700px" }}>
          {embedUrl ? (
            <div className="w-full h-full" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
              <iframe
              src={`api/proxy?url=${embedUrl}`} 
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full" // Full width and height of the container
              />
            </div>
          ) : (
            <p className="text-red-500 text-center">Invalid YouTube video link</p>
          )}
        </div>



        <h1>Related Products</h1>

        {type ? <ProductsList type={type} /> : <p>Loading...</p>}



      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.breadcrumb.is-active>.breadcrumb-label {\n    font-weight: 400;\n    color: #fff !important;\n}\n"
        }}
      />

    </>
  );
};

const PageWrapper = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  return <PageContent search={search} />;
};

const Page = () => {
  return (
    <>
      <Head />
      <Suspense fallback={<div>Loading parameters...</div>}>
        <PageWrapper />
      </Suspense>
      <Footer />
    </>
  );
};

export default Page;

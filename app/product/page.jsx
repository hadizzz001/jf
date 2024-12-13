"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from '../component/Head';
import Footer from '../component/Footer';

const Page = () => {
    const [allTemp1, setTemp1] = useState(null);
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let type, imgs, title, price, desc, cat;

    const fetchTemp3 = async (id) => {
        try {
            const response = await fetch(`/api/posts/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data.posts[0];
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const a = async () => {
        const b = await fetchTemp3(search);
        setTemp1(b);
    };

    useEffect(() => {
        a();
    }, [search]);

    if (allTemp1) {
        imgs = allTemp1.img;
        type = allTemp1.type;
        cat = allTemp1.category;
        title = allTemp1.title;
        price = allTemp1.price;
        desc = allTemp1.description;
    }

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <Head />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 mt-20">
                <div className="flex flex-col lg:flex-row max-w-6xl w-full p-6 bg-white rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Image Slider */}
                    <div className="flex-none w-full lg:w-1/2 overflow-hidden rounded-lg mb-6 lg:mb-0 px-4 py-6">
                        {imgs && imgs.length > 0 ? (
                            <>
                                <div className="relative w-full h-96">
                                    <img
                                        src={imgs[currentImageIndex]}
                                        alt={`image-${currentImageIndex}`}
                                        className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
                                    />
                                </div>

                                <div className="flex justify-center space-x-4 mt-4">
                                    {imgs.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`thumbnail-${index}`}
                                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${currentImageIndex === index ? 'border-2 border-green-600' : 'border-2 border-transparent'}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-gray-500">No images available</div>
                        )}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-6 px-4 py-6">
                        {allTemp1 ? (
                            <div>
                                <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>
                                <div className="text-sm text-gray-600 mb-4">
                                    <p>Type: <span className="font-semibold">{type}</span></p>
                                    <p>Category: <span className="font-semibold">{cat}</span></p>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">{desc}</p>

                                {/* WhatsApp Button */}
                                <div className="mt-6">
                                <a
    href="https://wa.me/9613538266"
    target="_blank"
    style={{ textDecoration: 'none' }}
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 hover:text-white transition duration-300"
>
                                        Contact on WhatsApp
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>


            </div>
            <Footer />
        </>
    );
};

export default Page;

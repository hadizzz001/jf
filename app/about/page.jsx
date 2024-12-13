import React from 'react';
import Head from '../component/Head'
import Footer from '../component/Footer'

const About = () => {
  return (
    <>
     <Head />
     <div className="bg-gray-50 min-h-screen mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#2585f8] mb-6 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ucarecdn.com/58fc5c5a-bd21-410f-8b5f-72e81e3a555a/360_F_360651391_AnfbHoBiAED6S03W5AqOGutL9jwotRLt.jpg"
              alt="About JFmachines"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Serving the Food Industry Since 1988
            </h2>
            <p className="text-gray-600 mb-4">
              Since its inception in 1988, <strong>JFmachines</strong> has flourished into a
              distinguished emblem of excellence in the food service industry in Lebanon. We pride
              ourselves in offering high-quality food equipment and smallwares, and our illustrious
              journey is a testament to our strong and growing relationships with our customers.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Wide range of reliable products for the food industry</li>
              <li>Helping businesses stay ahead with high-quality solutions</li>
              <li>Over 35 years of trusted service in Lebanon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     <Footer />
    </>

  );
};

export default About;

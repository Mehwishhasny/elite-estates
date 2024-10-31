import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function Businesses() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // triggers when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mt-10 mb-2 mx-auto p-5 justify-center items-center flex sm:flex-col flex-row bg-gray-200 sm:ml-40 mb-6 ${
        isVisible ? 'animate-visible' : 'animate-hidden'
      }`}
    >

      <div className="max-w-6xl sm:px-6">
        <h1 className="sm:text-3xl text-xl text-blue-800 font-bold p-4 sm:mt-10 text-center">
          Business in the UAE is Booming – Be a Part of It and Elevate Your Success!
        </h1>

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="MF Investments Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-4">MF INVESTMENTS</p>
              <p className="text-black mb-4">
                Assisting in investments and helping our clients make the most of their money and create wealth.
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

        
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo2.jpg"
              alt="AIZ Real Estate Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-4">AIZ REAL ESTATE BROKERAGE LLC</p>
              <p className="text-black mb-4">
                Premium real estate services, providing customers with their dream properties for home and investment.
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

        
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo3.png"
              alt="Lyuka Medical Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-4">LYUKA MEDICAL EQUIPMENT TRADING LLC</p>
              <p className="text-black mb-4">
                Trusted supplier of high-quality medical and surgical supplies.
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

    
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo4.jpg"
              alt="AIZ Real Estate Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-2">MC HOMES</p>
              <p className="text-black mb-4">
                Renowned property management, delivering exceptional services to customers for property rentals
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

    
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo5.png"
              alt="AIZ Real Estate Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-4">MAGNIFICENT FOODSTUFF TRADING LLC</p>
              <p className="text-black mb-4">
                Trusted supplier of high-quality food and `beverage supplies
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

        
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/logo6.png"
              alt="AIZ Real Estate Logo"
              objectFit="cover"
              width={500}
              height={350}
              className="object-cover mt-16"
            />
            <div className="p-6 text-center">
              <p className="text-blue-800 font-bold mb-4 mt-8">PAAK AL SAFA</p>
              <p className="text-black mb-4">
                Floor and tiling building works establishment based in Dubai
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

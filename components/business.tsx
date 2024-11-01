import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function Businesses() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } 
    );

    const currentSection = sectionRef.current; 
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
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
          Business in the UAE is Booming , Be a Part of It and Elevate Your Success!
        </h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: '/images/logo.png',
              alt: 'MF Investments Logo',
              title: 'MF INVESTMENTS',
              description: 'Assisting in investments and helping our clients make the most of their money and create wealth.'
        },
            {
              image: '/images/logo2.jpg',
              alt: 'AIZ Real Estate Logo',
              title: 'AIZ REAL ESTATE BROKERAGE LLC',
              description: 'Premium real estate services, providing customers with their dream properties for home and investment.'
            },
            {
              image: '/images/logo3.png',
              alt: 'Lyuka Medical Logo',
              title: 'LYUKA MEDICAL EQUIPMENT TRADING LLC',
              description: 'Trusted supplier of high-quality medical and surgical supplies.'
            },
            {
              image: '/images/logo4.jpg',
              alt: 'MC Homes Logo',
              title: 'MC HOMES',
              description: 'Renowned property management, delivering exceptional services to customers for property rentals.'
            },
            {
              image: '/images/logo5.png',
              alt: 'Magnificent Foodstuff Trading Logo',
              title: 'MAGNIFICENT FOODSTUFF TRADING LLC',
              description: 'Trusted supplier of high-quality food and beverage supplies.' 
            },
            {
              image: '/images/logo6.png',
              alt: 'Paak Al Safa Logo',
              title: 'PAAK AL SAFA',
              description: 'Floor and tiling building works establishment based in Dubai.'
            }
          ].map(({ image, alt, title, description }) => (
            <div key={title} className="max-w-lg hover:opacity-60 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <Image
                src={image}
                alt={alt}
                objectFit="cover"
                width={500}
                height={350}
                className="object-cover"
              />
              <div className="p-6 text-center">
                <p className="text-blue-800 font-bold mb-4">{title}</p>
                <p className="text-black mb-4">{description}</p>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

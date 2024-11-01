"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Media } from '@/components/sociallinks';
import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal';
import SignUpModal from '@/components/signupModal';

export default function InvestUAE() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); 
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const openSignUpModal = () => setIsSignUpModalOpen(true); 
    const closeSignUpModal = () => setIsSignUpModalOpen(false);

    return (
        <div>
               <Header openModal={openModal} />
               <Media openModal={openModal} openSignUpModal={openSignUpModal} />

            <div className="mx-auto mt-20 px-4 py-20 text-center justify-center max-w-screen-lg">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
                    <Image
                        src="/images/skyline.jpg"
                        alt="Skyline Image"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <h1 className="absolute z-10 bg-gray-800 text-white m-1 text-center font-extrabold text-2xl animate-color-change">
                        Invest in the UAE: Unlock Boundless Growth Opportunities
                    </h1>
                </div>
                <h1 className="text-blue-900 font-extrabold text-2xl mb-4">
                    Elite Estates: Your Gateway to Investment Success in the UAE
                </h1>
                <p className="text-black text-left p-4 mb-10">
                    Investments in the UAE have been steadily rising, driven by the countrys thriving economy and the influx of businesses and investors...
                </p>

                <h2 className="text-gray-600 font-bold text-xl mb-4">1. Customized Investment Strategies:</h2>
                <p className="text-black text-left p-4 mb-4">
                    - Our team of experts will work closely with you to develop a customized investment strategy...
                </p>

                <h2 className="text-gray-600 font-bold text-xl mb-4">2. Comprehensive Financial Planning:</h2>
                <p className="text-black text-left p-4 mb-4">
                    - In addition to investment services, we provide a full range of financial planning services...
                </p>

                <h2 className="text-gray-600 font-bold text-xl mb-4">3. Wealth Management Excellence:</h2>
                <p className="text-black text-left p-4 mb-4">
                    - We understand that preserving and growing your wealth over time is of utmost importance...
                </p>

                <h1 className="text-blue-900 font-bold text-2xl mb-4">Invest in Dubai Property for Financial Success</h1>
                <p className="text-black text-left p-4 mb-4">
                    Dubais real estate market presents a lucrative opportunity for investors seeking to generate rental income...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">1. High Rental Yields:</h2>
                <p className="text-black text-left p-4">
                    - Investing in Dubai property offers the potential for high rental yields...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">2. Steady Population Growth:</h2>
                <p className="text-black text-left p-4">
                    - Dubais population is projected to reach 4.9 million by 2020...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">3. Strong Economy and Pro-Business Environment:</h2>
                <p className="text-black text-left p-4">
                    - Dubais diverse range of industries...
                </p>

                <h1 className="text-blue-900 font-bold text-2xl mb-4">Investment Options in Dubai Property:</h1>
                <h2 className="text-gray-700 font-bold text-xl mb-4">1. Real Estate Investment Trusts (REITs):</h2>
                <p className="text-black text-left p-4">
                    - REITs offer an excellent opportunity to invest in a diversified portfolio of Dubai properties...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">2. Direct Property Purchase:</h2>
                <p className="text-black text-left p-4">
                    - Investors can choose to purchase properties directly...
                </p>
            </div>

            
            <Modal isOpen={isModalOpen} onClose={closeModal} />
                            <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />

                            
            <Footer />
            <a href="https://wa.me/1234567890?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp Chat"
          width={60}
          height={60}
          className="fixed bottom-10 sm:right-12 right-5 z-50 cursor-pointer"
        />
        <p className="fixed bottom-2 sm:right-8 right-2 z-50 text-white font-bold sm:text-lg text-sm bg-green-500 p-1 rounded-lg">
          Chat with us?
        </p>
      </a>
        </div>
    );
}

"use client";

import { Header } from '@/components/header';
import { Media } from '@/components/sociallinks';
import Image from 'next/image';

export default function InvestUAE() {
    const openModal = () => {
        // Logic to open modal
    };

    const openSignUpModal = () => {
        // Logic to open sign-up modal
    };

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
                        Invest in the UAE – Unlock Boundless Growth Opportunities
                    </h1>
                </div>
                <h1 className="text-blue-900 font-extrabold text-2xl mb-4">
                    Elite Estates: Your Gateway to Investment Success in the UAE
                </h1>
                <p className="text-black text-left p-4 mb-10">
                    Investments in the UAE have been steadily rising, driven by the country’s thriving economy and the influx of businesses and investors...
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
                    Dubai’s real estate market presents a lucrative opportunity for investors seeking to generate rental income...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">1. High Rental Yields:</h2>
                <p className="text-black text-left p-4">
                    - Investing in Dubai property offers the potential for high rental yields...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">2. Steady Population Growth:</h2>
                <p className="text-black text-left p-4">
                    - Dubai’s population is projected to reach 4.9 million by 2020...
                </p>

                <h2 className="text-gray-700 font-bold text-xl mb-4">3. Strong Economy and Pro-Business Environment:</h2>
                <p className="text-black text-left p-4">
                    - Dubai’s diverse range of industries...
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
        </div>
    );
}

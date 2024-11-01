"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Media } from '@/components/sociallinks';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/components/modal';
import SignUpModal from '@/components/signupModal';

export default function AboutUs() {
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

      <div className="mx-auto sm:mt-20 px-4 py-20 text-center justify-center max-w-screen-lg">
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
            About Us
          </h1>
        </div>
      </div>

      <h1 className="text-blue-900 text-center font-extrabold text-2xl">
        Elite Estates: Premier Financial Solutions for Real Estate and Property Management
      </h1>

      <p className="text-black font-bold text-center p-4">
        Making informed financial decisions, especially in the realms of real estate and property management, can be challenging. That’s where Elite Estates comes in, offering sophisticated solutions to help you achieve your financial goals. In this article, we explore the array of exclusive services provided by Elite Estates, with a focus on two of their key divisions: Realstate.com for real estate transactions and Homes.ae for comprehensive property management.
      </p>

      <h2 className="text-gray-600 font-bold text-xl text-center mb-4">Elite Estates: Redefining Financial Excellence</h2>
      <p className="text-black font-bold text-center p-4">
        As a distinguished leader in the industry, Elite Estates is committed to delivering bespoke financial strategies across a range of sectors, notably in high-end real estate and investment management. Their seasoned team of professionals is dedicated to providing solutions tailored to the specific needs of each client, ensuring that every decision is backed by expert insight and market foresight.
      </p>

      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">Aizestate.com: Your Partner in Luxury Real Estate</h2>
      <p className="text-black font-bold text-center p-4">
        Aizestate.com, the exclusive real estate division of Elite Estates, is your gateway to securing premium properties and high-yield investments. Their team of experts, backed by an expansive network and unparalleled market knowledge, guides clients through every step of their real estate journey, be it purchasing, selling, or leasing luxury properties. With access to some of the most exclusive listings, Aizestate.com offers opportunities that match the distinct needs of their high-net-worth clientele. Whether you are seeking a primary residence, a commercial property, or a lucrative real estate investment, Aizestate.com ensures a smooth and rewarding experience. Their tailored approach guarantees that each transaction aligns perfectly with your financial objectives and lifestyle aspirations.
      </p>

      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">MCHomes.ae: Mastering the Art of Property Management</h2>
      <p className="text-black font-bold text-center p-4">
        Managing high-value assets requires a level of expertise and attention to detail that only MCHomes.ae can provide. Specializing in property management, MCHomes.ae offers a full spectrum of services designed to enhance and protect your real estate investments. From tenant acquisition and rent optimization to comprehensive maintenance and asset preservation, their hands-on approach ensures your properties are managed with the utmost care and professionalism.
      </p>

      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">How Elite Estates Delivers Unmatched Financial Expertise</h2>
      <p className="text-black font-bold text-center p-4">
        At the core of Elite Estates success is their commitment to understanding the market and delivering results-driven strategies. Their comprehensive market analysis and insights into emerging trends provide clients with a competitive edge, enabling them to make well-informed financial decisions. By leveraging an extensive network of industry contacts, Elite Estates offers exclusive access to premium investment opportunities that others may not have.
      </p>

      <h2 className="text-blue-900 font-bold sm:text-2xl text-xl mb-4 sm:mt-6 mt-2 text-center">Why Choose Elite Estates?</h2>
      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">All-In-One Services</h2>
      <p className="text-black font-bold text-center p-4">
        Elite Estates provides an integrated portfolio of services, allowing you to access everything you need in one place. From real estate investment to property management, they streamline the decision-making process and simplify your financial journey.
      </p>

      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">Bespoke Solutions</h2>
      <p className="text-black font-bold text-center p-4">
        No two clients are alike and neither are their financial needs. Elite Estates takes the time to understand each individual’s circumstances, crafting unique strategies that are perfectly aligned with your goals.
      </p>

      <h2 className="text-gray-600 font-bold text-xl mb-4 text-center">A Foundation of Trust</h2>
      <p className="text-black font-bold text-center p-4">
        Built on transparency and ethical practices, Elite Estates has cultivated lasting relationships with clients who value integrity and accountability. Their client-focused approach ensures that you receive advice and recommendations rooted in trust.
      </p>

      <h1 className="text-blue-900 font-bold sm:text-2xl text-xl mb-4 sm:mt-6 mt-2 text-center">Conclusion</h1>
      <p className="text-black font-bold text-center p-4">
        Achieve Financial Success with Elite Estates. For those looking to invest in high-end real estate or entrust their properties to expert management, Elite Estates and its divisions, Aizestate.com and MCHomes.ae, offer the premium services and financial expertise needed to achieve success. With a commitment to providing tailored solutions and an unwavering dedication to client satisfaction, Elite Estates is the partner you can rely on for long-term financial growth.
      </p>

      <p className="text-blue-700 font-bold text-center p-4">
        Contact Elite Estates today to discover how they can help you unlock the potential of your investments and guide you towards a future of financial prosperity.
      </p>

      <Link href="/contact">
        <button
          type="button"
          className="flex justify-center items-center mx-auto px-2 py-2 sm:px-4 sm:py-2 text-white font-bold bg-gray-600 rounded-md mt-4 hover:bg-gray-800 sm:text-lg border-black border-2 text-sm transition-colors duration-300 mb-4"
        >
          Contact Us
        </button>
      </Link>

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

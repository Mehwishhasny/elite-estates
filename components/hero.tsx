"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

const images = [
  "/images/dubai.jpg",
  "/images/burjkhalifa.jpg",
  "/images/burjarab.jpg",
  "/images/museum.jpg",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:mt-32 mx-auto p-5 flex sm:justify-end justify-center items-center sm:h-screen relative">
      <div className="sm:absolute w-full sm:w-[1150px] h-[500px] sm:h-[700px]">
        <Image
          src={images[currentIndex]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg">
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-4 mx-10">
            <h1 className="text-white font-bold text-2xl sm:text-2xl mb-4 sm:mb-8">
              Revolutionize Your Wealth Growth Strategy with <br />
              Elite Estates' Cutting-Edge Innovations!
            </h1>
            <p className="text-white text-base sm:text-lg max-w-md mb-4 sm:mb-6">
              Whether you’re a first-time buyer or an experienced investor, we provide tailored solutions to help you achieve your financial goals with confidence.
              Join Elite Estates and unlock the potential of your real estate investments today!
            </p>
            <button
              type="button"
              className="flex justify-center items-center px-4 py-2 sm:px-6 sm:py-2 text-white font-bold bg-gray-600 rounded-md mt-4 hover:bg-gray-800 sm:text-lg border-black border-2 text-sm transition-colors duration-300">
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

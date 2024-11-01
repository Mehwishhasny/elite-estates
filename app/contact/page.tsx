"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Media } from '@/components/sociallinks';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
    const openModal = () => {
     
    };

    const openSignUpModal = () => {
        
    };

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
                        Connect with Us
                    </h1>
                </div>
                </div>
                
                <div className="justify-center items-center flex flex-col">
                    <h2 className="text-blue-900 font-bold sm:text-2xl text-xl mb-4 sm:mt-6 mt-2"> Submit your details </h2>
                    <form className="flex flex-col w-full items-center justify-center">
                        <input
                            type="text"
                            placeholder="John Smith"
                            className="sm:w-1/2 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                        />
                        <input
                            type="email"
                            placeholder="abc@gmail.com"
                            className="sm:w-1/2 px-4 py-2 mt-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                        />
                        <input
                            type="text"
                            placeholder="0097150xxxxxx"
                            className="sm:w-1/2 px-4 py-2 mt-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                        />
                         <input
                            type="text"
                            placeholder="Write your message"
                            className="sm:w-1/2 px-4 py-12 mt-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                        />
                        <button
                            type="submit"
                            className="flex justify-center items-center mx-auto px-2 py-2 sm:px-4 sm:py-2 text-white font-bold bg-gray-600 rounded-md mt-4 hover:bg-gray-800 sm:text-lg border-black border-2 text-sm transition-colors duration-300 mb-4"> Submit
                            </button>
                            </form>
                            </div>
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
                )
                }
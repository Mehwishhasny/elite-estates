"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/hero';
import { Media } from '@/components/sociallinks';
import { Businesses } from '@/components/business';
import { Services } from '@/components/services';
import { Strategy } from '@/components/strategy';
import Modal from '@/components/modal';
import SignUpModal from '@/components/signupModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openSignUpModal = () => setIsSignUpModalOpen(true); 
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header openModal={openModal} />
      <Media openModal={openModal} openSignUpModal={openSignUpModal} />
      <HeroSlider />
      <Businesses />
      <Services />
      <Strategy />

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

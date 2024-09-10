"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "ITALY",
      description: "Start the greatest journey in your life",
      image: "/images/c70e0744-5061-4871-b92e-8f9a75abc0bc.jpg",
    },
    {
      id: 2,
      title: "FRANCE",
      description: "Explore the beauty of Paris",
      image: "/images/10d79113-4986-4081-beec-1890a14c8487.jpg", // Replace with your image path
    },
    {
      id: 3,
      title: "SPAIN",
      description: "Discover the vibrant culture",
      image: "/images/1636bdbd-d1a0-4a58-9d65-b6665961e05e.jpg", // Replace with your image path
    },
  ];

  return (
    <div>
      <div className="p-2 bg-redd text-center text-white font-bold">
        Find more solutions to cover your development needs using{" "}
        <span className="text-bb border-b border-bb">JetPlugins</span> and
        <span className="text-bb border-b border-bb"> 200+ widgets</span>
      </div>
      <nav className="bg-white text-white p-3 flex justify-between items-center px-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo-retina.png"
            alt="Logo"
            width={90}
            height={40}
            className="h-8"
          />
        </div>
        <div className="space-x-10">
          <Link href="/" className="hover:underline text-black">
            Home
          </Link>
          <Link href="/destinations" className="hover:underline text-black">
            Destinations
          </Link>
          <Link href="/tours" className="hover:underline text-black">
            Tours
          </Link>
          <Link href="/tour-details" className="hover:underline text-black">
            Tour Details
          </Link>
          <Link href="/all-tours" className="hover:underline text-black">
            All Tours for Destination
          </Link>
        </div>
      </nav>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative bg-cover bg-center h-screen"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
                <div className="text-start">
                  <h1 className="text-[25vh] pb-0 mb-0 font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-2xl mt-0">{slide.description}</p>
                  <div className="relative z-10 inset-0 bg-white w-full h-[1px]"></div>
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="country" className="font-semibold text-2xl">
                      Tours
                    </label>
                    <div className="grid grid-cols-3 space-x-1">
                      <select
                        id="country"
                        className="bg-white text-black p-4 font-semibold"
                      >
                        <option>Country</option>
                        {/* Add options */}
                      </select>
                      <select
                        id="city"
                        className="bg-white text-black p-4 font-semibold"
                      >
                        <option>City</option>
                        {/* Add options */}
                      </select>
                      <button
                        id="search"
                        className="bg-orange-600 text-black p-4 font-semibold"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

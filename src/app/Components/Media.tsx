"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Purpose from "./Purpose";

export default function Media() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="container text-black font-noto-sans mx-auto">
        <h1 className="text-2xl pt-8">Instagram</h1>
        <p className="text-lg tracking-tight font-nunito-sans">
          Follow us on @qodeinteractive
        </p>
      </div>
      <section className="my-6 grid grid-cols-8 gap-6">
        <div className="relative">
          <Image
            src={`/div.qodef-e (${slideIndex}).png`}
            alt="Apponovi Logo"
            width={200}
            height={300}
            priority
          />
          <div
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
            onClick={prevSlide}
          ></div>
        </div>
        <div className="relative ">
          <Image
            src={`/div.qodef-e (${(slideIndex + 1) % 2}).png`}
            alt="Apponovi Logo"
            width={200}
            height={300}
            priority
          />
          <div
            className="absolute top-0 right-0 w-full h-full cursor-pointer"
            onClick={nextSlide}
          ></div>
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="relative">
            <Image
              src={`/div.qodef-e (${index}).png`}
              alt="Apponovi Logo"
              width={1000}
              height={300}
              priority
            />
          </div>
        ))}
      </section>
      <Purpose />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import HeroImage from "./Assets/Heroimage.webp";
import HeroImage2 from "./Assets/Heroimage2.webp";
import HeroImage3 from "./Assets/Heroimage3.webp";
import HeroImage4 from "./Assets/Heroimage4.webp";
import HeroImage5 from "./Assets/Heroimage5.webp";

const images = [HeroImage, HeroImage2, HeroImage3, HeroImage4, HeroImage5];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Generate 80 bubbles with random horizontal positions and animation delays
  const bubbleElements = Array.from({ length: 80 }).map((_, index) => (
    <div
      key={index}
      className="bubble"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
      }}
    ></div>
  ));

  return (
    <>
      {/* Desktop/Tablet View: Rotating background image */}
      <section
        className="hidden md:flex min-h-[85vh] bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900 items-center justify-center -mt-20"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></section>

      {/* Mobile View: Animated background-color changing from dark blue to light blue with bubbles and overlay text */}
      <section
        className="relative flex md:hidden min-h-[60vh] items-center justify-center -mt-20 overflow-hidden"
        style={{
          backgroundColor: "#4169E1",
          animation: "colorAnimation 12s ease infinite",
        }}
      >
        {/* Bubble animations */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbleElements}
        </div>

        {/* Overlay Text */}
        <div
          className="relative z-10 text-center text-white px-4"
          style={{ animation: "fadeIn 1.5s ease-out forwards", opacity: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Welcome to Our Store!</h1>
          <p className="text-lg">
            Discover unbeatable deals and the latest trends in fashion.
          </p>
        </div>
      </section>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes colorAnimation {
            0% { background-color: #4169E1; }
            50% { background-color: #B0E0E6; }
            100% { background-color: #4169E1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bubbleUp {
            0% { transform: translateY(0) scale(0.7); opacity: 0.8; }
            50% { opacity: 1; }
            100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
          }
          .bubble {
            position: absolute;
            bottom: -50px;
            width: 25px;
            height: 25px;
            background-color: rgba(103, 181, 207, 0.8); /* Light bluish color */
            border-radius: 50%;
            animation: bubbleUp 10s ease-in-out infinite;
          }
        `}
      </style>

      {/* Grid Section: Colorful information boxes */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-8 p-4 shadow-2xl min-h-[16vh] font-frank"
        style={{ boxShadow: "inset 0 -8px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="wrap1 flex justify-around text-wrap p-4 items-center text-xl m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-25 text-blue-400"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="box1 ml-8 flex flex-col items-center">
            <h3 className="font-bold text-2xl leading-10 text-black">
              High Quality Cloths
            </h3>
            <p className="text-sm text-black">
              Premium-quality clothing crafted with superior materials and impeccable attention to detail.
            </p>
          </div>
        </div>

        <div className="wrap2 flex justify-around text-wrap p-4 items-center text-xl m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-25 text-blue-400"
          >
            <path
              fillRule="evenodd"
              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="box2 ml-8 flex flex-col items-center">
            <h3 className="font-bold text-2xl leading-10 text-black">
              Wide Cloths Range
            </h3>
            <p className="text-sm text-black">
              Explore a diverse collection of stylish and high-quality clothing.
            </p>
          </div>
        </div>

        <div className="wrap3 flex justify-around text-wrap p-4 items-center text-xl m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-25 text-blue-400"
          >
            <path
              fillRule="evenodd"
              d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="box3 ml-8 flex flex-col items-center">
            <h3 className="font-bold text-2xl leading-10 text-black">
              Excellent Services
            </h3>
            <p className="text-sm text-black">
              Exceptional customer service for a seamless shopping experience.
            </p>
          </div>
        </div>

        <div className="wrap4 flex justify-around text-wrap p-4 items-center text-xl m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-25 text-blue-400"
          >
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
          <div className="box4 ml-8 flex flex-col items-center">
            <h3 className="font-bold text-2xl leading-10 text-black">
              Fast Delivery
            </h3>
            <p className="text-sm text-black">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

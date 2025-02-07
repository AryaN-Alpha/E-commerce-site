import { useEffect, useState } from "react";
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
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <>
      {/* Desktop / tablet view: Rotating background image */}
      <section
        className="hidden md:flex min-h-[85vh] bg-cover bg-center bg-no-repeat dark:bg-gray-900 items-center justify-center -mt-20"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></section>

      {/* Mobile view: Animated gradient background with text */}
      <section
        className="block md:hidden min-h-[85vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(270deg, #ff66cc, #ff99cc, #ff66cc)",
          backgroundSize: "600% 600%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl font-bold mb-2">Welcome to Our Site!</h1>
          <p className="text-lg">
            Discover our latest collections and enjoy the vibe.
          </p>
        </div>
      </section>

      {/* Keyframes for gradient animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* The grid section (remains unchanged) */}
      <section className="grid shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 min-h-[16vh] font-frank">
        {/* Your grid content here */}
      </section>
    </>
  );
}

export default HeroSection;

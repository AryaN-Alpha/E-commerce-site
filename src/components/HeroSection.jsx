import { useEffect, useState } from "react";
import HeroImage from "./Assets/Heroimage.webp";
import HeroImage2 from "./Assets/Heroimage2.webp";
import HeroImage3 from "./Assets/Heroimage3.webp";
import HeroImage4 from "./Assets/Heroimage4.webp";
import HeroImage5 from "./Assets/Heroimage5.webp";
const images = [HeroImage, HeroImage2, HeroImage3, HeroImage4, HeroImage5];
function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentImage]);
  return (
    <>
   <section
        className="min-h-[85vh] bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900 flex items-center justify-center -mt-20"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out", // Smooth transition
        }}
      ></section>


      <section className="grid  shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 min-h-[16vh] font-frank">
        <div className="wrap1 flex justify-around text-wrap p-4 items-center text-xl m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-25 text-blue-400 "
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="box1 ml-8 flex flex-col flex-wrap items-center  ">
            <h3 className="font-bold text-2xl leading-10">
              High Quality Cloths
            </h3>
            <p>Premium-quality clothing crafted with superior materials and impeccable attention to detail, ensuring comfort, durability, and timeless style.</p>
          </div>
        </div>

        <div className="wrap2  flex justify-around text-wrap p-4 items-center  text-xl m-4">
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

          <div className="box2 ml-8 flex flex-col flex-wrap  justify-center items-center  ">
            <h3 className="font-bold text-2xl leading-10 ">
              Wide Cloths Range
            </h3>
            <p>Explore a diverse collection of stylish and high-quality clothing to suit every occasion and preference.</p>
          </div>
        </div>

        <div className="wrap3 flex justify-around text-wrap p-4 items-center  text-xl m-4">
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

          <div className="box3 ml-8 flex flex-col flex-wrap  justify-center items-center  ">
            <h3 className="font-bold text-2xl leading-10">
              Excellent Services
            </h3>
            <p>Dedicated to providing exceptional customer service, ensuring a seamless and satisfying shopping experience.</p>
          </div>
        </div>

        <div className="wrap4 flex justify-around text-wrap p-4 items-center  text-xl m-4">
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

          <div className="box4 ml-8 flex flex-col flex-wrap  justify-center items-center  ">
            <h3 className="font-bold text-2xl leading-10">Fast Delivery</h3>
            <p>Enjoy quick and reliable delivery, bringing your favorite fashion pieces straight to your doorstep in no time.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Category from "./Category";
import Card from "./Card";
import NewArrival from "./Assets/NewArrival.webp";
import Reviews from "./Assets/Reviews.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Home({ selectedCategory }) {
  const [CardData, setCardData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/Shop");
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}?limit=4`
        : "https://fakestoreapi.com/products?limit=4";

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    
  }, [selectedCategory]); // Runs when selectedCategory changes

 


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8080/reviews');
        const data = await response.json(); // Convert to JSON
        setReviews(data.reviews); // Access the reviews directly
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
  
    // Initial fetch
    fetchReviews();
  
    // Set interval to fetch new reviews every 5 seconds
    const interval = setInterval(fetchReviews, 5000); // 10 seconds
  
    // Clear interval when component is unmounted
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-[500vh] bg-white">
      <HeroSection />
      <Category />

      <section
        className="flex justify-around pt-48 pb-28 bg-gray-100"
        style={{ boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="detail text-md">
          <h1 className="font-bold text-5xl mb-4 leading-10">
            {selectedCategory
              ? `Showing ${selectedCategory} Products`
              : "Featured Products"}
          </h1>
          <p className="max-w-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button
          className="bg-blue-400 text-xl min-w-[10%] dark:bg-blue-400 border rounded-full inline-flex items-center justify-center py-2 px-2 text-center text-base font-medium text-white transition-colors duration-300 hover:bg-blue-500 hover:cursor-pointer"
          type="button"
          onClick={handleViewAllClick}
        >
          View All
        </button>
      </section>

      <section
        className="grid my-22 bg-white shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 min-h-[65vh] font-frank"
        style={{ boxShadow: "inset 0 -8px 8px rgba(0, 0, 0, 0.2)" }}
      >
        {CardData.map((element, index) => (
          <Card
            key={index}
            image={element.image}
            title={element.title}
            price={element.price}
            link={element.category}
            description={element.description}
          />
        ))}
      </section>

      <section
        className="min-h-[90vh] bg-cover bg-center bg-no-repeat dark:bg-gray-900 flex items-center px-26 -mt-24 relative"
        style={{
          backgroundImage: `url(${NewArrival})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className=" max-w-[50%]  ">
          <h1 className="font-bold text-6xl mb-4 leading-tight mb-12 text-gray-500">
            New Arrivals Are Here – Stay Fresh, Stay Ahead!
          </h1>
          <p className=" text-xl mb-4 leading-10 md:hidden sm:hidden ">
            {" "}
            Gear up for the latest and greatest! From sleek men’s fits to trendy
            women’s styles, jaw-dropping jewelry, and next-level electronics,
            our new arrivals are all about keeping you ahead of the curve.
            Whether you're upgrading your look or your gadgets, we’ve got the
            hottest picks waiting for you. 🚀 Don’t just keep up—set the trend.
            Shop now before they’re gone! 🛍️✨{" "}
          </p>
        </div>
      </section>

      <section
        className="min-h-[40vh] bg-gray-200 flex flex-col justify-center items-center "
        style={{ boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <h1 className="font-bold text-5xl mb-4 leading-tight  ">
          Buy Online Now & Get 10% Off!
        </h1>
        <p className=" text-md mb-4 leading-10 ">
        Shop online today and enjoy an exclusive 10% discount on your purchase – limited-time offer!
        </p>
        <button
          className="bg-blue-400 text-md max-w-[10%] hover:cursor-pointer  dark:bg-blue-400 border rounded-full  inline-flex items-center justify-center py-4 px-4 text-center  font-medium text-white transition-colors duration-300 hover:bg-blue-500 "
          type="button"
        >
          Shop Now
        </button>
      </section>

      <h1 className="font-bold text-5xl text-white mb-4 leading-tight text-center relative z-10 ">
        What Our Client Say
      </h1>
      <section
            className="relative pt-36 -mt-24 bg-gray-100 bg-cover bg-center bg-no-repeat grid shadow-2xl sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:min-h-[90vh]"
            style={{
                boxShadow: 'inset 0 8px 8px rgba(0, 0, 0, 0.2)',
                backgroundImage: `url(${Reviews})`, // Ensure Reviews is imported correctly
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

            {/* Loop through reviews and dynamically render them */}
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="relative z-10 w-[50%] h-[80%] p-16 ml-48 m-8 bg-gray-200 hover:cursor-pointer hover:scale-110 hover:shadow-xl hover:transition-all duration-200 ease-in-out hover:border-blue-200"
                >
                    <p className="text-xl mb-4 leading-10 text-dark font-semibold ">{review.ReviewText}</p>
                    <h2 className="font-bold text-xl mb-4 leading-tight text-gray-900 flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 text-blue-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {review.First_name} 
                    </h2>
                </div>
            ))}
        </section>
      <Footer />
    </div>
  );
}

export default Home;

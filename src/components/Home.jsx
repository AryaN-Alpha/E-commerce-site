import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Category from "./Category";
import Card from "./Card";
import NewArrival from "./Assets/NewArrival.webp";
import Reviews from "./Assets/Reviews.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------------
// IntroPopup Component: The fun, step-by-step conversation popup (Enhanced Style)
// -----------------------------------------------------------------------------
const IntroPopup = ({ onFinish }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const buttonStyle = {
    background: "#fff",
    color: "#2575fc",
    border: "none",
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    margin: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "transform 0.2s ease, background 0.2s ease",
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              <strong>
                helloooooooooooooooooooooooooooooo Mirabelllllllllllllllllllllllllllllllllllllllllllllllll 😍🥰🌸
              </strong>
              <br />
              Welcome! 🎉🤗
            </p>
            <button style={buttonStyle} onClick={handleNext}>
              OK
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Knock knock
            </p>
            <button style={buttonStyle} onClick={handleNext}>
              Who's there?
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Candice
            </p>
            <button style={buttonStyle} onClick={handleNext}>
              Candice who?
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Candice be love im feeling right now
            </p>
            <button style={buttonStyle} onClick={handleNext}>
              That's so funny
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Have you eaten food?
            </p>
            <button style={buttonStyle} onClick={() => setStep(6)}>
              No
            </button>
            <button style={buttonStyle} onClick={onFinish}>
              Yes
            </button>
          </div>
        );
      case 6:
        return (
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              😠😢 Please take care of your diet!
              <br />
              Have you eaten food now?
            </p>
            <button style={buttonStyle} onClick={onFinish}>
              Yes
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          padding: "2.5rem",
          borderRadius: "12px",
          textAlign: "center",
          maxWidth: "90%",
          color: "#fff",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
          animation: "scaleIn 0.4s ease-out",
        }}
      >
        {renderStep()}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Home Component: Your main homepage with integrated popup conversation
// -----------------------------------------------------------------------------
function Home({ selectedCategory }) {
  const [CardData, setCardData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
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
  }, [selectedCategory]);

  useEffect(() => {
    // Define a default array of 4 reviews
    const defaultReviews = [
      { First_name: "Alice", ReviewText: "Great product!" },
      { First_name: "Bob", ReviewText: "I love it!" },
      { First_name: "Charlie", ReviewText: "Amazing service!" },
      { First_name: "Diana", ReviewText: "Highly recommended!" },
    ];

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://server-backend-sable.vercel.app/reviews"
        );
        const data = await response.json(); // Convert to JSON

        // If data.reviews exists and has items, use it; otherwise, use defaultReviews
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        } else {
          setReviews(defaultReviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews(defaultReviews);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchReviews();

    // Set interval to fetch new reviews every 5 seconds
    const interval = setInterval(fetchReviews, 5000);

    // Clear interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[500vh] bg-white overflow-x-hidden">
      {showIntro && <IntroPopup onFinish={() => setShowIntro(false)} />}
      <HeroSection />
      <Category />

      <section
        className="flex flex-col md:flex-row items-center md:justify-around text-center md:text-left pt-24 pb-16 px-6 bg-gray-100"
        style={{ boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="detail text-md mb-6 md:mb-0">
          <h1 className="font-bold text-3xl md:text-5xl mb-4 leading-tight">
            {selectedCategory
              ? `Showing ${selectedCategory} Products`
              : "Featured Products"}
          </h1>
          <p className="max-w-[100%] text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button
          className="bg-blue-400 text-lg md:text-xl w-full md:w-auto dark:bg-blue-400 border rounded-full inline-flex items-center justify-center py-3 px-6 text-center font-medium text-white transition-colors duration-300 hover:bg-blue-500 hover:cursor-pointer"
          type="button"
          onClick={handleViewAllClick}
        >
          View All
        </button>
      </section>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 p-4 bg-white shadow-2xl min-h-[65vh] font-frank"
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
        className="min-h-[90vh] px-8 bg-cover bg-center bg-no-repeat text-black flex items-center md:px-26 md:-mt-24 lg:px-26 lg:-mt-24 xl:px-26 xl:-mt-24 relative"
        style={{
          backgroundImage: `url(${NewArrival})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="w-full md:max-w-[50%]">
          <h1 className="font-bold text-3xl md:text-6xl lg:text-6xl xl:text-6xl mb-4 leading-tight mb-12 text-gray-700">
            New Arrivals Are Here – Stay Fresh, Stay Ahead!
          </h1>
          <p className="text-xl mb-4 leading-10 hidden lg:block xl:block sm:hidden">
            Gear up for the latest and greatest! From sleek men’s fits to trendy
            women’s styles, jaw-dropping jewelry, and next-level electronics,
            our new arrivals are all about keeping you ahead of the curve.
            Whether you're upgrading your look or your gadgets, we’ve got the
            hottest picks waiting for you. 🚀 Don’t just keep up—set the trend.
            Shop now before they’re gone! 🛍️✨
          </p>
        </div>
      </section>

      <section
        className="min-h-[40vh] bg-gray-200 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16"
        style={{ boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
          Buy Online Now & Get 10% Off!
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-4 leading-relaxed max-w-2xl">
          Shop online today and enjoy an exclusive 10% discount on your purchase –
          limited-time offer!
        </p>
        <button
          className="bg-blue-400 text-sm md:text-md w-full max-w-[200px] hover:cursor-pointer dark:bg-blue-400 border rounded-full inline-flex items-center justify-center py-3 px-6 text-center font-medium text-white transition-colors duration-300 hover:bg-blue-500"
          type="button"
        >
          Shop Now
        </button>
      </section>

      <section className="bg-gray-100 pb-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-8 leading-tight text-center pt-16">
          What Our Clients Say
        </h1>
        <div
          className="relative bg-cover bg-center bg-no-repeat grid grid-cols-1 md:grid-cols-2 min-h-[70vh] md:min-h-[90vh] shadow-2xl px-4"
          style={{
            boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.2)",
            backgroundImage: `url(${Reviews})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative z-10 w-full sm:w-[80%] md:w-[70%] lg:w-[50%] p-6 md:p-8 mx-auto bg-gray-200 hover:scale-105 transition-all duration-200 ease-in-out shadow-lg border-l-4 border-blue-400 rounded-lg mt-6"
            >
              <p className="text-lg md:text-xl leading-7 text-gray-800 font-semibold">
                {review.ReviewText}
              </p>
              <h2 className="font-bold text-lg md:text-xl mt-4 text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-400 mr-2"
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
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

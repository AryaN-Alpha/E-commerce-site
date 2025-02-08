import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { counterContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Product_Det() {
  const [CardData, setCardData] = useState([]);
  const Prod_Det = useContext(counterContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (!Prod_Det.ProdDet_Data?.category) return; // Prevents unnecessary fetches

      const url = `https://fakestoreapi.com/products/category/${Prod_Det.ProdDet_Data.category}?limit=4`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Prod_Det.ProdDet_Data?.category]); // Only fetch when category changes

  const onClick = () => {
    navigate(`/addtocart`);
  };

  const toggleReviewForm = () => {
    navigate(`/reviewform`); // Toggle the visibility of the review form
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <section className="Wrapper min-h-[65vh] flex flex-col items-center justify-center">
        {/* Product Details */}
        <div
          className="center flex flex-col md:flex-row w-full md:w-[55%] py-10 md:py-20"
          style={{ boxShadow: "inset 0 -8px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="max-w-full md:max-w-[47%] px-4">
            <img src={Prod_Det.ProdDet_Data.image} alt="Product" />
          </div>
          <div className="text max-w-full md:max-w-[53%] px-4 md:px-8">
            <div className="prod_Det">
              <p className="text-gray-400 mb-2">
                Home / Indoor Plants /{" "}
                {Prod_Det.ProdDet_Data?.category || "Unknown"}
              </p>
              <h1 className="font-semibold text-3xl leading-tight mb-4 text-black">
                {Prod_Det.ProdDet_Data?.title || "Loading..."}
              </h1>
              <h2 className="text-gray-600 font-bold text-2xl mb-2">
                Price: ${Prod_Det.ProdDet_Data?.price || "0.00"}
              </h2>
              <p className="text-gray-800 mb-4 text-md">
                {Prod_Det.ProdDet_Data?.description
                  ? Prod_Det.ProdDet_Data.description.length > 100
                    ? `${Prod_Det.ProdDet_Data.description.substring(0, 100)}...`
                    : Prod_Det.ProdDet_Data.description
                  : "No description available."}
              </p>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <button
                  type="button"
                  onClick={onClick}
                  className="bg-blue-400 text-md w-full md:w-auto hover:cursor-pointer border rounded-full inline-flex items-center justify-center py-2 px-2 font-medium text-white transition-colors duration-300 hover:bg-blue-500"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={toggleReviewForm}
                  className="bg-blue-400 p-2 px-8 text-md w-full md:w-auto hover:cursor-pointer border rounded-full inline-flex items-center justify-center font-medium text-white transition-colors duration-300 hover:bg-blue-500"
                >
                  Review
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <hr className="mt-8" />
            <div className="services space-y-6 py-8 px-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Free shipping on orders over $50!
              </h2>
              <ul className="list-disc text-lg space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> No-Risk Money
                  Back Guarantee!
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> No Hassle Refunds
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> Secure Payments
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <hr className="w-full" />
        <div className="description w-full md:w-[55%] p-6 rounded-lg shadow-md bg-white mt-16">
          <h1 className="text-3xl font-semibold text-gray-600 mb-4">
            Description
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {Prod_Det.ProdDet_Data?.description || "No description available."}
          </p>
        </div>
          
        {/* Related Products */}
        <div className="related_Prod w-full md:w-[80%] my-24">
  <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
    Related Products
  </h1>
  <div
    className="prods grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-white"
    style={{ boxShadow: "inset 0 -8px 8px rgba(0, 0, 0, 0.2)" }}
  >
    {CardData.length > 0 ? (
      CardData.map((element, index) => (
        <Card
          key={index}
          image={element.image}
          title={element.title}
          price={element.price}
          link={element.category}
          description={element.description}
        />
      ))
    ) : (
      <p className="text-gray-600 text-center w-full col-span-4">
        Loading related products...
      </p>
    )}
  </div>
</div>

      </section>
      <Footer />
    </>
  );
}

export default Product_Det;

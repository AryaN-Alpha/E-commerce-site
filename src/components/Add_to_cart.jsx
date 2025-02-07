import { counterContext } from "../Context/context";
import React, { useEffect, useState, useContext } from "react";
import Footer from "./Footer";

function AddToCart() {
  const Prod_Det1 = useContext(counterContext);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(Prod_Det1.ProdDet_Data.price);

  useEffect(() => {
    setTotal(Prod_Det1.ProdDet_Data.price * quantity);
  }, [quantity, Prod_Det1.ProdDet_Data.price]);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleCheckout = async () => {
    const email = localStorage.getItem('Email'); // Assume email is stored in localStorage

    const orderDetails = {
      items: [{
        name: Prod_Det1.ProdDet_Data.title,
        price: Prod_Det1.ProdDet_Data.price,
        quantity: quantity,
        image: Prod_Det1.ProdDet_Data.image,
      }],
      totalAmount: total,
    };

    try {
      const response = await fetch('https://e-commerce-site-eight-orcin.vercel.app//api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          orderDetails,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Order Confirmed. Total: $${total}`);
        console.log('Checkout successful:', result);
      } else {
        console.error('Checkout failed:', result.message);
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error during checkout. Please try again.');
    }
  };

  return (
    <>
      <section className="h-[100vh] flex justify-center items-center p-4">
        <div
          className="box w-full lg:min-w-[60%] xl:min-w-[50%] min-h-[50%] p-4 md:p-8 bg-gray-200"
          style={{ boxShadow: "inset 0 -8px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cart</h1>
          <div className="wrap flex flex-col lg:flex-row">
            <div className="prod lg:max-w-[70%] w-full">
              <span className="hidden md:flex bg-gray-100 p-2">
                <h1 className="w-[35%] text-sm md:text-base lg:text-xl font-semibold">Product</h1>
                <h1 className="w-[15%] text-sm md:text-base lg:text-xl font-semibold">Price</h1>
                <h1 className="w-[25%] text-sm md:text-base lg:text-xl font-semibold">Quantity</h1>
                <h1 className="w-[25%] text-sm md:text-base lg:text-xl font-semibold">Subtotal</h1>
              </span>
              <hr />
              <span className="flex flex-col md:flex-row bg-gray-100 h-auto md:h-[160px] my-4 p-4">
                <div className="flex items-center w-full md:w-[35%] mb-4 md:mb-0">
                  <img
                    className="w-16 h-20 md:max-w-[70px] md:max-h-[100px]"
                    src={Prod_Det1.ProdDet_Data.image}
                    alt=""
                  />
                  <h1 className="ml-4 text-sm md:text-base lg:text-xl font-semibold truncate">
                    {Prod_Det1.ProdDet_Data.title}
                  </h1>
                </div>

                <div className="flex md:contents">
                  <h1 className="md:w-[15%] text-sm md:text-base lg:text-xl font-semibold my-2 md:my-0">
                    ${Prod_Det1.ProdDet_Data.price}
                  </h1>

                  <div className="md:w-[25%] my-2 md:my-0">
                    <div className="border border-gray-300 inline-flex px-2 md:px-4 hover:cursor-pointer">
                      <span className="pr-2 md:pr-4 text-lg" onClick={decrement}>-</span>
                      {quantity}
                      <span className="pl-2 md:pl-4 text-lg" onClick={increment}>+</span>
                    </div>
                  </div>

                  <h1 className="md:w-[25%] text-sm md:text-base lg:text-xl font-semibold my-2 md:my-0">
                    ${total}
                  </h1>
                </div>
              </span>
            </div>

            <div className="total mt-4 lg:mt-0 lg:mx-8 lg:mr-14 w-full lg:min-w-[27%] bg-gray-100 p-4">
              <h1 className="text-xl md:text-2xl font-semibold mb-4">Cart Totals</h1>
              <div className="flex flex-col items-center bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg w-full">
                <div className="w-full flex justify-between items-center mb-4">
                  <span className="text-base md:text-lg font-semibold text-gray-600">
                    Sub Total:
                  </span>
                  <span className="text-base md:text-xl font-bold text-gray-800">${total}</span>
                </div>

                <div className="w-full flex justify-between items-center mb-6 border-t pt-4">
                  <span className="text-base md:text-lg font-semibold text-gray-600">
                    Total:
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    ${total}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-500 text-white text-base md:text-lg font-semibold py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddToCart;

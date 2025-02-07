import React, { useState } from "react";
import Footer from "./Footer";

const Review_Form = () => {
  const [ReviewText, setReviewText] = useState(""); // State for review text

  // ✅ Retrieve First_name and Last_name from local storage
  const First_name = localStorage.getItem("First_name");
  const Last_name = localStorage.getItem("Last_name");

  // ✅ Handle review input change
  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  // ✅ Submit review
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!First_name || !Last_name) {
      alert("User information is missing. Please log in again.");
      return;
    }

    if (ReviewText.trim() === "") {
      alert("Please enter a review!");
      return;
    }

    try {
      const response = await fetch("https://server-backend-sable.vercel.app/submit-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          First_name ,
          Last_name,
          ReviewText
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Review Submitted Successfully!");
        setReviewText(""); // Clear the review field
      } else {
        alert(data.message || "Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="bg-white p-10 rounded-xl shadow-xl max-w-lg w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 tracking-wide text-center">
            Share Your Thoughts
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              value={ReviewText}
              onChange={handleReviewChange}
              placeholder="Tell us what you think..."
              rows="6"
              className="w-full p-4 bg-gray-100 text-gray-800 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg transition-all hover:shadow-xl"
            ></textarea>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => setReviewText("")}
                className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all ease-in-out duration-300"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:from-green-500 hover:to-blue-600 transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review_Form;

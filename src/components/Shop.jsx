import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

function Shop({ selectedCategory }) {
  const [CardData, setCardData] = useState([]); // All fetched data
  const [filteredData, setFilteredData] = useState([]); // Filtered data based on search
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [selectedCategoryState, setSelectedCategory] = useState(""); // Selected category state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  const itemsPerPage = 9; // Number of items per page

  const onclick = (evt) => {
    const category = evt.currentTarget.textContent.trim(); // Clean up the text
    if (category !== "All") {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(""); // If "All" is clicked, reset the filter
    }
  };

  // Pagination logic
  const paginateData = (data) => {
    const offset = (currentPage - 1) * itemsPerPage;
    return data.slice(offset, offset + itemsPerPage); // Slice the data array to show only 9 items per page
  };

  // Filter data based on search query
  const filterData = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return CardData.filter((item) =>
      item.title.toLowerCase().includes(lowercasedQuery) ||
      item.description.toLowerCase().includes(lowercasedQuery)
    );
  };

  // Update the filtered data whenever CardData or search query changes
  useEffect(() => {
    setFilteredData(filterData()); // Filter the data based on search query
  }, [CardData, searchQuery]); // Runs when CardData or searchQuery changes

  // Update the data when category or page changes
  useEffect(() => {
    const fetchData = async () => {
      const url = selectedCategoryState
        ? `https://fakestoreapi.com/products/category/${selectedCategoryState}`
        : "https://fakestoreapi.com/products"; // If no category, fetch all products

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCardData(data); // Store all fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategoryState, currentPage]); // Runs when selectedCategoryState or currentPage changes

  // Handle page change (next/prev)
  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return prevPage + 1;
      } else if (direction === "prev" && prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  // Pagination logic for filtered data
  const paginateFilteredData = () => {
    return paginateData(filteredData); // Paginate the filtered data
  };

  return (
    <>
      <section className="flex min-h-[200vh] pt-18 mb-14">
        <div className="category w-[30%] flex-col justify-items-end md:justify-items-center md:px-8 sm:justify-items-center sm:px-0  px-24 max-h-[150vh]">
          <div className="search">
            <input
              type="text"
              value={searchQuery} // Bind input to searchQuery state
              onChange={handleSearch} // Handle input change
              placeholder="Search Products"
              className="text-gray-400 border-2 border-blue-400 w-[70%] h-[39px]"
            />
            <button
              type="button"
              className="border-2 w-[29%] h-[44px] bg-blue-400 text-white font-bold hover: cursor-pointer hover:scale-110"
            >
              Search
            </button>
          </div>
          <div className="categories mt-8 mr-20">
            <h1 className="font-bold text-3xl mb-4 text-blue-400 ">Categories</h1>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500"
                  onClick={onclick}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500"
                  onClick={onclick}
                >
                  electronics
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500"
                  onClick={onclick}
                >
                  jewelery
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500"
                  onClick={onclick}
                >
                  men's clothing
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-semibold hover:cursor-pointer hover:text-blue-500"
                  onClick={onclick}
                >
                  women's clothing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="items w-[70%] max-h-[150vh] border-l-2 border-gray-300 px-12 ">
          <div className="top">
            <p className="text-gray-400 mb-2">Home/Shop</p>
            <h4 className="mb-4">
              Showing {itemsPerPage * (currentPage - 1) + 1}–{Math.min(
                itemsPerPage * currentPage,
                filteredData.length
              )} of {filteredData.length} results
            </h4>
          </div>
          <div
            className="grid my-22 bg-white sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 min-w-[40%] font-frank"
          >
            {paginateFilteredData().map((element, index) => (
              <Card
                key={index}
                image={element.image}
                title={element.title}
                price={element.price}
                link={element.category}
                description={element.description}
              />
            ))}
          </div>
          <div className="pagination mt-4 flex justify-center space-x-4">
            <button
              className="bg-blue-400 text-md max-w-[10%] hover:cursor-pointer  dark:bg-blue-400 border rounded-full  inline-flex items-center justify-center py-4 px-4 text-center  font-medium text-white transition-colors duration-300 hover:bg-blue-500"
              onClick={() => handlePageChange("prev")}
            >
              Previous
            </button>
            <button
              className="bg-blue-400 text-md max-w-[10%] hover:cursor-pointer  dark:bg-blue-400 border rounded-full  inline-flex items-center justify-center py-4 px-4 text-center  font-medium text-white transition-colors duration-300 hover:bg-blue-500"
              onClick={() => handlePageChange("next")}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;

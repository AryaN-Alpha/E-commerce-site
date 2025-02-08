import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

function Shop({ selectedCategory }) {
  // All fetched data
  const [CardData, setCardData] = useState([]);
  // Filtered data based on search
  const [filteredData, setFilteredData] = useState([]);
  // Current page number
  const [currentPage, setCurrentPage] = useState(1);
  // Selected category state
  const [selectedCategoryState, setSelectedCategory] = useState("");
  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 9; // Number of items per page

  // When a category is clicked, update the category state and reset page number
  const onclick = (evt) => {
    const category = evt.currentTarget.textContent.trim();
    setCurrentPage(1);
    if (category !== "All") {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
  };

  // Pagination: slice the data for the current page
  const paginateData = (data) => {
    const offset = (currentPage - 1) * itemsPerPage;
    return data.slice(offset, offset + itemsPerPage);
  };

  // Filter data based on the search query (case insensitive)
  const filterData = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return CardData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
    );
  };

  // Update the filtered data whenever CardData or searchQuery changes
  useEffect(() => {
    setFilteredData(filterData());
  }, [CardData, searchQuery]);

  // Update the fetched data when the category or page changes
  useEffect(() => {
    const fetchData = async () => {
      const url = selectedCategoryState
        ? `https://fakestoreapi.com/products/category/${selectedCategoryState}`
        : "https://fakestoreapi.com/products";

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategoryState, currentPage]);

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

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Paginate filtered data
  const paginateFilteredData = () => {
    return paginateData(filteredData);
  };

  return (
    <>
      <section className="flex flex-col md:flex-row min-h-screen pt-8 md:pt-18 mb-8 md:mb-14">
        {/* Category Section */}
        <div className="category w-full md:w-[30%] flex flex-col items-start md:items-center px-4 md:px-8 lg:px-24 mb-8 md:mb-0">
          <div className="search flex flex-col md:flex-row items-stretch gap-2 w-full mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Products"
              className="text-gray-400 border-2 border-blue-400 w-full md:w-[70%] h-[39px] px-2"
            />
            <button
              type="button"
              className="border-2 w-full md:w-[29%] h-[44px] bg-blue-400 text-white font-bold hover:cursor-pointer hover:scale-110"
            >
              Search
            </button>
          </div>
          <div className="categories mt-8 mr-0 md:mr-20">
            <h1 className="font-bold text-3xl mb-4 text-blue-400">Categories</h1>
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
        {/* Items Section */}
        <div className="items w-full md:w-[70%] border-t-2 md:border-t-0 md:border-l-2 border-gray-300 px-4 md:px-12">
          <div className="top">
            <p className="text-gray-400 mb-2">Home/Shop</p>
            <h4 className="mb-4">
              Showing {itemsPerPage * (currentPage - 1) + 1}–
              {Math.min(itemsPerPage * currentPage, filteredData.length)} of{" "}
              {filteredData.length} results
            </h4>
          </div>
          {/* Adjusted Grid Layout for Mobile: Grid with 2 columns */}
          <div className="grid gap-4 my-8 bg-white grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 font-frank">
            {paginateFilteredData().map((element, index) => (
              <Card
                key={index}
                image={element.image}
                title={
                  element.title.length > 40
                    ? element.title.substring(0, 40) + "..."
                    : element.title
                }
                price={element.price}
                link={element.category}
                description={element.description}
              />
            ))}
          </div>
          <div className="pagination mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              className="bg-blue-400 text-md w-full md:w-auto hover:cursor-pointer dark:bg-blue-400 border rounded-full inline-flex items-center justify-center py-3 px-6 text-center font-medium text-white transition-colors duration-300 hover:bg-blue-500"
              onClick={() => handlePageChange("prev")}
            >
              Previous
            </button>
            <button
              className="bg-blue-400 text-md w-full md:w-auto hover:cursor-pointer dark:bg-blue-400 border rounded-full inline-flex items-center justify-center py-3 px-6 text-center font-medium text-white transition-colors duration-300 hover:bg-blue-500"
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

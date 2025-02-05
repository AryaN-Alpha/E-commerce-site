import React from 'react'
import { Link } from 'react-router-dom';
import Electronics from "./Assets/Category2.png";
import Jewelery from "./Assets/Category1.png";
import MensCloths from "./Assets/Category3.png";
import WomensCloths from "./Assets/Category4.png";
import { useEffect, useState } from "react";
import Home from './Home';
function Category() {

const [Change, setChange] = useState("electronics");
const onClick=(evt)=>{
  console.log("Clicked",evt.currentTarget.getAttribute("name") );
  setChange(evt.currentTarget.getAttribute("name") );
  <Home selectedCategory={Change}/>
}


  return (
    <section 
  className="grid pt-8 bg-gray-100 shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 min-h-[40vh] font-frank" 
  style={{ boxShadow: 'inset 0 8px 8px rgba(0, 0, 0, 0.2)' }}
>
  <div name="electronics" onClick={onClick}>
    <Link to="/electronics" className="wrap1 flex flex-col justify-around text-wrap p-4 items-center text-xl m-4">
      <img className="h-[20vh] hover:h-[25vh] hover:cursor-pointer transition-all duration-300 ease-in-out" src={Electronics} alt="Electronics" />
      <h3 className="font-bold text-2xl leading-10">Electronics</h3>
    </Link>
  </div>

  <div name="jewelry" onClick={onClick}>
    <Link to="/jewelry" className="wrap2 flex flex-col justify-around text-wrap p-4 items-center text-xl m-4"> 
      <img className='h-[20vh] hover:h-[25vh] hover:cursor-pointer transition-all duration-300 ease-in-out' src={Jewelery} alt="Jewelry" />
      <h3 className="font-bold text-2xl leading-10">Jewelry</h3>        
    </Link>
  </div>

  <div name="men's clothing" onClick={onClick}>
    <Link to="/mens-clothing" className="wrap3 flex flex-col justify-around text-wrap p-4 items-center text-xl m-4">
      <img className='h-[20vh] hover:h-[25vh] hover:cursor-pointer transition-all duration-300 ease-in-out' src={MensCloths} alt="Men's Clothing" />
      <h3 className="font-bold text-2xl leading-10">Men's Clothing</h3>
    </Link>
  </div>

  <div name="women's clothing" onClick={onClick}>
    <Link to="/womens-clothing" className="wrap4 flex flex-col justify-around text-wrap p-4 items-center text-xl m-4">
      <img className='h-[20vh] hover:h-[25vh] hover:cursor-pointer transition-all duration-300 ease-in-out' src={WomensCloths} alt="Women's Clothing" />
      <h3 className="font-bold text-2xl leading-10">Women's Clothing</h3>
    </Link>
  </div>

</section>

  )
}

export default Category
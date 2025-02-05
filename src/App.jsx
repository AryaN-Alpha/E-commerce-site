import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import Testing from './components/Testing'
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Product_Det from "./components/Product_Det";
import { useContext } from 'react';
import { counterContext } from './Context/context';
import { useState } from 'react';
import Add_to_cart from './components/add_to_cart';
import Login from './components/Login';
import Signup from './components/Signup'
import Review_Form from './components/Review_Form';
import Ai_Assistant from './components/Ai_Assistant';

function App() {
  const [ProdDet_Data, setProdDet_Data] = useState({
    image:"",
    title:"",
    description:"",
    category:""
  });

  const fetchTest = async () => {
    try {
        const response = await fetch("http://localhost:8080/api");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
};
fetchTest();


  return (
     
    <counterContext.Provider value={{ProdDet_Data,setProdDet_Data}} >
      
      <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home selectedCategory={""}/> } />
        <Route path="/electronics" element={<Home selectedCategory={"electronics"}/> } />
        <Route path="/jewelry" element={<Home selectedCategory={"jewelery"}/> } />
        <Route path="/mens-clothing" element={<Home selectedCategory={"men's clothing"}/> } />
        <Route path="/womens-clothing" element={<Home selectedCategory={"women's clothing"}/> } /> 
        

        
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<Footer/>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/Shop" element={<Shop selectedCategory={""}/>} />


        
        <Route path="/Shop/men-s-clothing" element={<Product_Det  />} />
        <Route path="/Shop/women-s-clothing" element={<Product_Det />} />
        <Route path="/Shop/jewelery" element={<Product_Det />} />
        <Route path="/Shop/electronics" element={<Product_Det />} />


        <Route path="/addtocart" element={<Add_to_cart />} />
        <Route path="/reviewform" element={<Review_Form />} />
        <Route path="/ai_assistant" element={<Ai_Assistant />} />
        
      </Routes>
    </Router>
    </counterContext.Provider>
  )
}

export default App

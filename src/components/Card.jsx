import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { counterContext } from '../Context/context';

function Card({ image, title, price, link, description }) {  
  const Prod_Det = useContext(counterContext);
  const navigate = useNavigate();

  const sanitizeLink = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '-');
  };

  const handleChange = (e) => {
    e.preventDefault();
    Prod_Det.setProdDet_Data({
      image: image,
      title: title,
      price: price,
      description: description,
      category: link
    });
    navigate(`/Shop/${sanitizeLink(link)}`);
  };

  const sanitizedLink = sanitizeLink(link);

  return (
    <Link 
      to="#" 
      onClick={handleChange} 
      className="block mx-4 my-6 md:m-8 pt-2 md:pt-4 overflow-hidden rounded-lg bg-white shadow-md duration-300 transform hover:scale-105 hover:cursor-pointer hover:shadow-xl dark:bg-white dark:shadow-card dark:hover:shadow-3"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full max-w-[200px] h-auto mx-auto md:w-[50%] md:h-[40%]" 
      />
      <div className="pt-4 md:pt-8 px-2 md:px-0 text-center">
        <h3>
          <a
            href="#"
            className="mb-2 md:mb-4 font-semibold block text-sm md:text-lg text-dark hover:text-primary dark:text-dark"
          >
            {title}
          </a>
        </h3>
        <h3>
          <a
            href="#"
            className="block text-base md:text-xl text-dark hover:text-primary dark:text-dark"
          >
            <b>Price: </b> ${price}
          </a>
        </h3>
      </div>
    </Link>
  );
}

export default Card;

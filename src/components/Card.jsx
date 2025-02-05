import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { useContext } from 'react';
import { counterContext } from '../Context/context';

function Card({ image, title, price, link, description }) {  
  const Prod_Det = useContext(counterContext);
  const navigate = useNavigate(); // To manually handle navigation

  const sanitizeLink = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '-'); // Replace special characters with hyphens
  };

  const handleChange = (e) => {
    e.preventDefault(); // Prevent default Link behavior

    Prod_Det.setProdDet_Data({
      image: image,
      title: title,
      price:price,
      description: description,
      category: link // assuming you want to pass the link as a category
    });

 

    // Manually navigate to the Shop page after handling the data
    navigate(`/Shop/${sanitizeLink(link)}`);
  };

  const sanitizedLink = sanitizeLink(link);

  return (
    <Link to="@" onClick={handleChange} className="block m-8 pt-4 overflow-hidden rounded-lg bg-white shadow-md duration-300 transform hover:scale-105 hover:cursor-pointer hover:shadow-xl hover:shadow-bottom-right dark:bg-white dark:shadow-card dark:hover:shadow-3">
      <img src={image} alt={title} className="w-[50%] h-[40%] flex flex-col justify-self-center" />
      <div className="pt-16 text-center">
        <h3>
          <a
            href="@"
            className="mb-8 font-semibold block text-lg text-dark hover:text-primary dark:text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-lg 2xl:text-lg"
          >
            {title}
          </a>
        </h3>
        <h3>
          <a
            href="#"
            className="block text-xl text-dark hover:text-primary dark:text-dark sm:text-[14px] md:text-lg lg:text-[18px] xl:text-md"
          >
            <b>Price: </b> ${price}
          </a>
        </h3>
      </div>
    </Link>
  );
}

export default Card;

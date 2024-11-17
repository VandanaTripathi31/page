import React from "react";
import './Shoppage.css'; // Import the CSS file
import pandaImage from '../images/panda.jpg';
import elephantImage from '../images/elephant.jpg';
import pigImage from '../images/pig.webp';
import fruitcap from '../images/fruitcap.jpg';
import teddyBearImage from '../images/teddybear.webp';
import unicornImage from '../images/unicorn.jpg';
import lionImage from '../images/lion.avif';
import dogImage from '../images/dog.webp';

const products = [
  {
    id: 1,
    name: "Ellie Elephant Stuffed Animal Soft Toy",
    priceRange: "₹429.00 – ₹2,199.00",
    image: elephantImage,
    rating: 5,
  },
  {
    id: 2,
    name: "Bamboo Panda Soft Toy",
    price: "₹419.00",
    originalPrice: "₹659.00",
    image: pandaImage,
    rating: 5,
  },
  {
    id: 3,
    name: "Crown Pig",
    priceRange: "₹499.00 – ₹1,699.00",
    image: pigImage,
    rating: 5,
  },
  {
    id: 4,
    name: "Fruit Cap Panda Animal Toy",
    price: "₹419.00",
    originalPrice: "₹659.00",
    image: fruitcap,
    rating: 5,
  },
  {
    id: 5,
    name: "Classic Teddy Bear",
    price: "₹549.00",
    originalPrice: "₹799.00",
    image: teddyBearImage,
    rating: 5,
  },
  {
    id: 6,
    name: "Magical Unicorn Toy",
    price: "₹619.00",
    originalPrice: "₹849.00",
    image: unicornImage,
    rating: 4,
  },
  {
    id: 7,
    name: "Leo the Lion Stuffed Toy",
    price: "₹599.00",
    originalPrice: "₹849.00",
    image: lionImage,
    rating: 5,
  },
  {
    id: 8,
    name: "Buddy Dog Soft Toy",
    price: "₹479.00",
    originalPrice: "₹699.00",
    image: dogImage,
    rating: 4,
  },
];

const Shoppage = () => {
  return (
    <div className="container">
      <h1 className="heading">Most Loved Soft Toys</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}</span>
              )}
              {product.priceRange || product.price}
            </p>
            <div className="rating">
              {"⭐".repeat(product.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoppage;

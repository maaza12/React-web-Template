import React, { useState } from 'react';
import '../styles/ProductList.css'

const ProductList = () => {
  // Sample product data
  const products = [
    { id: 1, title: 'Product 1', price: '$10.00', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Product 2', price: '$15.00', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Product 3', price: '$20.00', image: 'path/to/image3.jpg' },
    { id: 4, title: 'Product 4', price: '$25.00', image: 'path/to/image4.jpg' },
    { id: 5, title: 'Product 5', price: '$30.00', image: 'path/to/image5.jpg' },
    { id: 6, title: 'Product 6', price: '$35.00', image: 'path/to/image6.jpg' },
    { id: 7, title: 'Product 7', price: '$40.00', image: 'path/to/image7.jpg' },
    { id: 8, title: 'Product 8', price: '$45.00', image: 'path/to/image8.jpg' },
    { id: 9, title: 'Product 9', price: '$50.00', image: 'path/to/image9.jpg' },
    { id: 10, title: 'Product 10', price: '$55.00', image: 'path/to/image10.jpg' },
    { id: 11, title: 'Product 11', price: '$60.00', image: 'path/to/image11.jpg' },
    { id: 12, title: 'Product 12', price: '$65.00', image: 'path/to/image12.jpg' },
    { id: 13, title: 'Product 13', price: '$70.00', image: 'path/to/image13.jpg' },
    { id: 14, title: 'Product 14', price: '$75.00', image: 'path/to/image14.jpg' },
    { id: 15, title: 'Product 15', price: '$80.00', image: 'path/to/image15.jpg' },
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <button
              className={`favorite-icon ${favorites.includes(product.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(product.id)}
            >
              <i className={`fa ${favorites.includes(product.id) ? 'fa-star' : 'fa-star-o'}`}></i>
            </button>
          </div>
          <div className="product-details">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

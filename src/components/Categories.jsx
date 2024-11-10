import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Category 1', imgUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Category 2', imgUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Category 3', imgUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Category 4', imgUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Category 5', imgUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Category 6', imgUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Category 7', imgUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Category 8', imgUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Category 9', imgUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Category 10', imgUrl: 'https://via.placeholder.com/150' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(5);
  
  // Adjust visible categories based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCategories(3); // Show 3 categories on smaller screens
      } else {
        setVisibleCategories(6); // Show 5 categories on larger screens
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial value based on screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Go to next set of categories (scroll right)
  const nextCategory = () => {
    if (currentIndex + visibleCategories < categories.length) {
      setCurrentIndex(currentIndex + visibleCategories);
    }
  };

  // Go to previous set of categories (scroll left)
  const prevCategory = () => {
    if (currentIndex - visibleCategories >= 0) {
      setCurrentIndex(currentIndex - visibleCategories);
    }
  };

  return (
    <div className="categories-container">
      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={prevCategory}>
        &#8592;
      </button>
      <div className="categories-scroll">
        {categories.slice(currentIndex, currentIndex + visibleCategories).map((category) => (
          <div className="category-item" key={category.id}>
            <img src={category.imgUrl} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={nextCategory}>
        &#8594;
      </button>
    </div>
  );
};

export default Categories;

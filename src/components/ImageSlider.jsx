import React, { useState, useEffect } from 'react'
import '../styles/ImageSlider.css'

const ImageSlider = () => {
    const images =[
    'https://via.placeholder.com/400x200?text=Image+1', // Image 1 URL
    'https://via.placeholder.com/400x200?text=Image+2', // Image 2 URL
    'https://via.placeholder.com/400x200?text=Image+3', // Image 3 URL
    ];

    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    useEffect(() =>{

        const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    },2000);

    return () =>clearInterval(intervalId);},[images.length]);

  return (
    <div className='image-slider'>
        <img src={images[currentImageIndex]} alt={`Slid ${currentImageIndex + 1}`} className='slider-image'/>
    </div>
    
  )
}

export default ImageSlider
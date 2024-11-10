import React, { useRef } from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
  const productListRef = useRef(null);  // Ref for ProductList section
  const newSectionRef = useRef(null);   // Ref for new section

  // Function to scroll to the Product List section
  const scrollToProductList = () => {
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the new section
  const scrollToNewSection = () => {
    if (newSectionRef.current) {
      newSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onHomeClick={scrollToProductList} onNewSectionClick={scrollToNewSection} />
      <ImageSlider />
      <Categories />

      {/* Product List Section */}
      <section ref={productListRef}>
        <ProductList />
      </section>

      {/* New Section Added Below */}
      <section ref={newSectionRef} style={{ marginTop: '50px', padding: '20px', background: '#f5f5f5' }}>
        <h2>New Section</h2>
        <p>This is the new section added below the product list. You can add more content here.</p>
      </section>

      <Footer />
    </>
  );
};

export default Home;

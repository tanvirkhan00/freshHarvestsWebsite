import React from 'react';
import Navbar from '../Components/Navbar';
import Hiro from '../Components/Hiro';
import ProductsHome from '../Components/ProductsHome';
import AboutSection from '../Components/AboutSection';
import SpecialOffer from '../Components/SpecialOffer';
import Testimonial from '../Components/Testimonial';
import BlogSection from '../Components/BlogSection';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>

            <Navbar />
            <Hiro />
            <ProductsHome />
            <AboutSection />
            <SpecialOffer />
            <Testimonial />
            <BlogSection />
            <Footer />

        </>
    );
};

export default Home;
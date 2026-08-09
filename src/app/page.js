import React from "react";

import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Contact from "./components/home/Contact";
import PopularProducts from "./components/home/PopularProducts";
import CallToAction from "./components/home/CallToAction";
import Testimonials from "./components/home/Testimonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Contact />
      <PopularProducts />
      <CallToAction />
      <Testimonials />
    </main>
  );
};

export default HomePage;

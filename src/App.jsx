import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Products/Product";
import BrandInfo from "./components/BrandInfo/BrandInfo";
import Banner2 from "./components/BrandInfo/Banner2";
import Banner3 from "./components/BrandInfo/Banner3";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <main className=" overflow-x-hidden">
          <NavBar />
          <Hero />
          <Product />
          <BrandInfo />
          <Banner2 />
          <Banner3 />
          <Footer />
        </main>
      </main>
    </>
  );
};

export default App;

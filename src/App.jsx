import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Products/Product";

const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <main className=" overflow-x-hidden">
          <NavBar />
          <Hero />
          <Product />
        </main>
      </main>
    </>
  );
};

export default App;

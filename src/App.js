import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default App;

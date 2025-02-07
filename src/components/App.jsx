import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Products from "./Products";
import Footer from "./Footer";
import "./App.css"; // استيراد ملف CSS الرئيسي

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

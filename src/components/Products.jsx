import React from "react";
import "./Products.css";
import samsungMobile from "../assets/images/samsung-mobile.jpg";
import mensWatch from "../assets/images/mens-watch.jpg";
import tableChair from "../assets/images/table-chair.jpg";
import laptop from "../assets/images/laptop.jpg";
import headphones from "../assets/images/headphones.jpg";
import camera from "../assets/images/camera.jpg";

function Products() {
  return (
    <section className="products">
      <div className="product-card">
        <img src={samsungMobile} alt="Samsung Mobile" />
        <h3>Samsung Mobile</h3>
        <p>$750</p>
      </div>
      <div className="product-card">
        <img src={mensWatch} alt="Men's Watch" />
        <h3>Men's Watch</h3>
        <p>$150</p>
      </div>
      <div className="product-card">
        <img src={tableChair} alt="Table Chair" />
        <h3>Table Chair</h3>
        <p>$200</p>
      </div>
      <div className="product-card">
        <img src={laptop} alt="Laptop" />
        <h3>Laptop</h3>
        <p>$1200</p>
      </div>
      <div className="product-card">
        <img src={headphones} alt="Headphones" />
        <h3>Headphones</h3>
        <p>$100</p>
      </div>
      <div className="product-card">
        <img src={camera} alt="Camera" />
        <h3>Camera</h3>
        <p>$500</p>
      </div>
    </section>
  );
}

export default Products;

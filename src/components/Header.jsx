import React from "react";
const Header = () => {
  return (
    <header style={{ backgroundColor: "#f8f9fa", padding: "1rem" }}>
      <h1>E-shop</h1>
      <nav>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li>Home</li>
          <li>Products</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

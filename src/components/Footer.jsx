import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* ✅ القسم الأول (على اليسار) */}
        <div className="footer-links-left">
          <ul>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        {/* ✅ القسم الثاني (في الوسط) */}
        <div className="footer-links-center">
          <ul>
            <li>Boot</li>
            <li>Summer</li>
            <li>Winter</li>
          </ul>
        </div>

        {/* ✅ القسم الثالث (على اليمين) */}
        <div className="footer-contact-right">
          <p><strong>Contact:</strong> 01000000000</p>
          <p><strong>Email:</strong> someone@gmail.com</p>
          <p><strong>Address:</strong> 133aa.ss</p>
        </div>
      </div>

      {/* النص السفلي */}
      <p>© 2025 E-shop. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

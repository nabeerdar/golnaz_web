import React from "react";
import './footer.css';
import twitter from '../../assets/twitter.png';



const Footer = () => {


  return (
    <footer className="footer">
      <button onClick={() => window.open("https://www.linkedin.com/in/golnaz-shahrestani-34051b251/", "_blank")} style={{ border: "none", background: "none", padding: "0", cursor: "pointer" }}>
        <img style={{ width: "40px" }} src={twitter} alt="Twitter Logo" className="twitter-icon" />
      </button>
      Copyright © 2024- Golnaz. All rights reserved.
    </footer>
  );
}
export default Footer;
import React from 'react';
import './Contactcontainer.css'; 

import twitter from '../../assets/twitter.png';


function Contactcontainer() {
  const sendEmail = () => {
    // Add your logic to send the email here
    console.log('Email sent!');
  };

  const reset = () => {
    // Add your logic to reset the form here
    console.log('Form reset!');
  };

  return (
<div className="contact-container">
      

      <div className="contact-section">
      
      <main id="contact-form-bg" className="main grid-item grid-item-2">
        <div>
          <section>
            <div className="contact-form-container">
              <h1 className="contact-form-text-color">Feel Free To Reach Out!</h1>
              <br />
              <form className="push_bottom" onSubmit={(e) => { e.preventDefault(); sendEmail(); reset(); }}>
                <label className="contact-labels" htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="State your inquiry..." />

                <label className="contact-labels" htmlFor="fname">Full Name</label>
                <input type="text" id="fname" name="fname" placeholder="Your name here..." />

                <label className="contact-labels" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" />
                
                <label className="contact-labels" htmlFor="msg">Message</label>
                <textarea id="msg" name="msg" rows="4" cols="50">Write your message here...</textarea>
                
                <button id="contact_button" type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>
       </main>

    
      </div>
      {/* <footer id="colophon" className="site-footer" role="contentinfo">
         <div className="social-wrapper">
           <button onClick={() => window.open("https://www.linkedin.com/in/golnaz-shahrestani-34051b251/", "_blank")} style={{ border: "none", background: "none", padding: "0", cursor: "pointer" }}>
          <img src={twitter} alt="Twitter Logo" className="twitter-icon" />
           </button>
        

          <nav className="footer-nav" role="navigation">
           <p className="footer-text">Copyright &copy; 2023- Golnaz. All rights reserved.</p>
         </nav>
         </div>
      </footer> */}

<footer className="footer1">
      <button onClick={() => window.open("https://www.linkedin.com/in/golnaz-shahrestani-34051b251/", "_blank")} style={{ border: "none", background: "none", padding: "0", cursor: "pointer" }}>
        <img style={{ width: "40px" }} src={twitter} alt="Twitter Logo" className="twitter-icon1" />
      </button>
    <div className="textfoot1"> Copyright © 2024- Golnaz. All rights reserved.</div>
    </footer>
 </div>
  );
}

export default Contactcontainer;

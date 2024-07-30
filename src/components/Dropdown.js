// dropdown.js
import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ show, onHide }) => {
    return (
        <div className="dropdownContent" style={{ display: show ? 'block' : 'none' }}>
            <Link activeClass='active' to='nature' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Nature</Link>
            <Link activeClass='active' to='city' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>City</Link>
            <Link activeClass='active' to='flying' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Flying</Link>
            <Link activeClass='active' to='food' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Food</Link>
            <Link activeClass='active' to='culture' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Culture</Link>
            <Link activeClass='active' to='landscape' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Landscape</Link>
            <Link activeClass='active' to='Other' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={onHide}>Other</Link>
        </div>
    );
}

export default Dropdown;


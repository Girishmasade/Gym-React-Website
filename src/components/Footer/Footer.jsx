import React from "react";
import './Footer.css'
import Logo from "/Images/Logo.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-100" style={{ backgroundColor: "#219EBC" }}>
      <footer className="p-3">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12 ft-1 mx-2">
            <img src={Logo} alt="" className="w-25" />
            <p className="py-2 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              impedit earum neque maiores a vitae ad alias ducimus praesentium
              quo!
            </p>
            <div className="d-flex gap-3">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
            </div>
            
          </div>

          <div className="col-md-5 col-lg-3 col-12 ft-2">
            <h4>Useful links</h4>
            <ul>
              <li className="list-style-none">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Classes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-2 col-12 ft-3">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Subscribe</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 col-lg-1 col-12 ft-4">
            <h4>NewsLetter</h4>
            <div className="w-100 d-flex px-1">
             <input type="email" placeholder="Enter your email" name="email" id="email" autoComplete="off" style={{background: 'transparent', borderColor: 'black'}}/>
             <button className="btn btn-sm btn-outline-warning">submit</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter} from "react-icons/fa";
import Logo from '/Images/Logo.png'


function Navbar() {
  return (
   <nav class="navbar navbar-expand-lg fixed-top bg-primary-subtle">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={Logo} alt="" style={{width: '3rem'}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 px-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-secondary" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/trainner">Trainner</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
        <div className="d-flex gap-3 align-items-end ">
          <FaFacebook/>
          <FaInstagram/>
          <FaYoutube/>
          <FaTwitter/>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

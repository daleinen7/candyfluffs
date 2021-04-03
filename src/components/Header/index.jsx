import React from 'react';
import { Link } from 'gatsby';

import logo from './logo.png'


import { TwitterLogo, InstagramLogo,  } from "phosphor-react";


export default function Header(props) {
  return (
  <>
      <div className="header">
          <div className="social-links">
            <TwitterLogo color="#C4C4C4" size={24} weight="fill" /> &nbsp; 
            <InstagramLogo color="#C4C4C4" size={24} weight="fill" /> 
          </div>
        <div className="logo-area">
          <div className="logo">
            <h1><Link to='/'><img src={logo} alt="Candy Fluffs Logo" style={{ width: "300px" }} /></Link></h1>
          </div>
          <div className="subheading">
            {props.heading} (ㆁᴗㆁ✿)
          </div>
        </div>
          <div className="contact-links">
          A &nbsp; C
          </div>
        </div>
      <div className="navbar">
        <hr></hr>
        <ul>
          <li>
            <Link to='/book'>Books</Link>
          </li>
          <li>
            <Link to='/print'>Prints</Link>
          </li>
          <li>
            <Link to='/charm'>Charms</Link>
          </li>
          <li>
            <Link to='/button'>Buttons</Link>
          </li>
          <li>
            <Link to='/sticker'>Stickers</Link>
          </li>
          <li>
            <Link to='/necahual'>Necahual</Link>
          </li>
          <li>
            <Link to='/events'>Conventions/Expos</Link>
          </li>
        </ul>
      </div>

    </>
  )
}
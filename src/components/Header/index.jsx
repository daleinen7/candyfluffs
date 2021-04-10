import React from 'react';
import { Link } from 'gatsby';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

export default function Header(props) {
  return (
  <>
      <div className="header">
          <div className="social-links">
          <Link to="https://candy-fluffs.tumblr.com/"><FontAwesomeIcon icon={faTumblr} size="md" style={{ color: "#C4C4C4", marginRight: 20 }}/></Link>
          <Link to="http://instagram.com/candy_fluffs"><FontAwesomeIcon icon={faInstagram} size="md" style={{ color: "#C4C4C4", marginRight: 20 }}/></Link>
          <Link to="http://twitter.com/candy_fluffs"><FontAwesomeIcon icon={faTwitter} size="md" style={{ color: "#C4C4C4" }}/></Link>
          
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
            <Link to="/" style={{ marginRight: 20}}>Account</Link>
            <button className="snipcart-checkout">View Cart</button>
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
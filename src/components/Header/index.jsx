import React from 'react';
import { Link } from 'gatsby';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const StyledDiv = styled.div`
  button.snipcart-checkout{
    background: transparent;
    border: none;
  }
`;

export default function Header(props) {
  return (
    <StyledDiv>
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
          <button className="snipcart-checkout"><FontAwesomeIcon icon={faShoppingBag} size="lg" style={{ color: "#C4C4C4" }}/>
          </button>
          <div class="snipcart-summary">
            <span className="snipcart-total-price">$0.00</span>
            (<span className="snipcart-total-items">0</span>)
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}
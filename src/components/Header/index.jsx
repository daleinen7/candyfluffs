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
    cursor: pointer;
    transition: transform .2s;
    &:hover {
      transform: scale(1.2);
    }
  }
  margin-bottom: 8px;
`;

export default function Header(props) {
  return (
    <StyledDiv>
      <div className="header">
        <div className="social-links">
          <a href="https://candy-fluffs.tumblr.com/"><FontAwesomeIcon icon={faTumblr} size="lg" style={{ color: "#C4C4C4", marginRight: 20 }}/></a>
          <a href="http://instagram.com/candy_fluffs"><FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#C4C4C4", marginRight: 20 }}/></a>
          <a href="http://twitter.com/candy_fluffs"><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#C4C4C4" }}/></a> 
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
          <div className="snipcart-summary">
              <a href="#" className="snipcart-user-email snipcart-user-profile">
                  Account
              </a>
          </div>
          <button className="snipcart-checkout">
              <FontAwesomeIcon icon={faShoppingBag} size="lg" style={{ color: "#C4C4C4" }}/>
          </button>
          <div className="snipcart-summary">
            <span className="snipcart-total-price">$0.00</span>
            (<span className="snipcart-total-items">0</span>)
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}
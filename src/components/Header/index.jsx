import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const StyledDiv = styled.div`

  .social-links {
    a {
      color: var(--form-gray);
      margin-right: 20px;
      &:hover {color: var(--highlight);}
    }
  }
  
  @media(max-width: 830px) {
    .hidden {
      display: none;
    }
  }

  button.snipcart-checkout{
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--form-gray);
    transition: transform .2s;
    &:hover {
      transform: scale(1.2);
      color: var(--highlight);
    }
  }

  .snipcart-summary {
    color: var(--gray);
  }

  margin-bottom: 1rem;
`;

export default function Header(props) {

  const [cartCount, setCartCount] = useState('');
  const [cartTotal, setCartTotal] = useState('');
  
  useEffect(()=> {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count();
      var cart = window.Snipcart.api.cart.get();

      setCartCount(count)
      setCartTotal(cart);

      //this allows it to work when you add or change items
      window.Snipcart.subscribe('cart.closed', () => {
          var count = window.Snipcart.api.items.count();
          var cart = window.Snipcart.api.cart.get();
          setCartCount(count)
          setCartTotal(cart)
      });

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe('cart.ready', (data) => {
          var count = window.Snipcart.api.items.count();
          var cart = window.Snipcart.api.cart.get();
          setCartCount(count)
          setCartTotal(cart)
      })
    }
  }, [])
  return (
    <StyledDiv>
      <div className="header">
        <div className="social-links hidden">
          <a href="https://candy-fluffs.tumblr.com/"><FontAwesomeIcon icon={faTumblr} size="lg"/></a>
          <a href="http://instagram.com/candy_fluffs"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
          <a href="http://twitter.com/candy_fluffs"><FontAwesomeIcon icon={faTwitter} size="lg"/></a> 
        </div>
        <div className="logo-area">
          <div className="logo">
            <h1><Link to='/'><StaticImage src='./logo.jpg' alt='Candy Fluffs'style={{maxWidth: 300}}/></Link></h1>
          </div>
          <div className="subheading">
            {props.heading} (ㆁᴗㆁ✿)
          </div>
        </div>
        <div className="contact-links hidden">
          <div className="snipcart-summary">
              <a href="#" className="snipcart-user-email snipcart-user-profile">
                  Account
              </a>
          </div>
          <button className="snipcart-checkout" aria-label="Shopping Cart">
              <FontAwesomeIcon icon={faShoppingBag} size="lg"/>
          </button>
          <div className="snipcart-summary">
            <span className="snipcart-total-price">${cartTotal ? cartTotal.total: "0.00"}</span>
            (<span className="snipcart-total-items">{cartCount}</span>)
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}
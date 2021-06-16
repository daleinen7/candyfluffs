import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import { Link } from 'gatsby';
import styled from 'styled-components';
import hamburgerIcon from './hamburger.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Nav = styled("nav")`
  border-top:2px solid var(--faded-highlight);
  border-bottom:1px solid var(--faded-highlight);

  ul.mobile { 
    flex-direction: column;
    align-items: center;
  }
  
  li {
    padding: .5rem; 
   
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 1.8rem; 
    color: var(--gray);
  }

  a:hover {
    color: var(--highlight);
    cursor: pointer; 
  }

  .mobile-menu {
    display: flex;
    justify-content: space-between;
  }

  @media(max-width: 830px) {
    width: 100%;
    bottom: 0; 
    position: fixed;
    background: var(--background);
    z-index: 1; 
  }

  button.snipcart-checkout{
    font-size: 1.4em;
    margin-right: 0.4em;
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
`;

const Hamburger = styled("button")`
  display: none;
  cursor: pointer;
  @media(max-width: 830px) {
    display: inline;
    border: none;
    padding: 16px;
    background: none;
    text-align: center; 
  }
`;

const NavList = styled("ul")`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  padding-left: 1em;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  background: var(--background);
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;

  &:first-child {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  a {
    color: #000;
    text-decoration: none; 
  }

`;

export default function NavMenu() {

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({query: `(max-width: 830px)`});

  const toggling = () => setIsOpen(!isOpen);
  
  return(
    <Nav aria-label='Main'>
      {(isOpen || !isMobile) && (
        <NavList className={isMobile && 'mobile'}>
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
            <Link to='/2heros'>Necahual</Link>
          </li>
          <li>
            <Link to='/events'>Conventions/Expos</Link>
          </li>
        </NavList>
      )}
      <div className="mobile-menu">
        <Hamburger onClick={toggling}><img src={hamburgerIcon} alt="hamburger menu"/></Hamburger>
        {isMobile &&
          <button className="snipcart-checkout">
            <FontAwesomeIcon icon={faShoppingBag} size="lg"/>
          </button>
        }
      </div>
    </Nav>
  )
}
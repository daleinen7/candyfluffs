import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import { Link } from 'gatsby';
import styled from 'styled-components';
import hamburgerIcon from './hamburger.svg';

const Nav = styled("nav")`

  hr {
    margin-top: 0;
  }

  @media(max-width: 800px) {
    width: 100%;
    bottom: 0; 
    position: fixed;
    background: var(--background);
    z-index: 1; 
  }
`;

const Hamburger = styled("button")`
  display: none;
  cursor: pointer;
  @media(max-width: 800px) {
    display: inline;
    border: none;
    padding: 16px;
    background: none;
    text-align: center; 
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 100;
  margin: 0;
  padding-left: 1em;
  background: #fff8f5;
  ${'' /* border: 2px solid #e5e5e5; */}
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }

  a {
    color: #000;
    text-decoration: none; 
  }

  a:hover {
    border-bottom: 3px solid #F58F89; 
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function NavMenu() {

  const [isOpen, setIsOpen] = useState(false);



  const isMobile = useMediaQuery({query: `(max-width: 800px)`});



  const toggling = () => setIsOpen(!isOpen);
  
  return(
    <Nav className="navbar">
      <hr></hr>
      <Hamburger><img src={hamburgerIcon} alt="hamburger menu"/></Hamburger>
      {(isOpen || !isMobile) && (
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
            <Link to='/2heros'>Necahual</Link>
          </li>
          <li>
            <Link to='/events'>Conventions/Expos</Link>
          </li>
        </ul>
      )}
    </Nav>
  )
}
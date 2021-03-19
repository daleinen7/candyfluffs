import React from 'react';
import { Link } from 'gatsby';

import logo from './logo.png'

import styled from 'styled-components';

import { TwitterLogo, InstagramLogo,  } from "phosphor-react";

const HeaderDiv = styled.div`

  margin: 0 auto;
  width: 80%;

  h1 {
    text-align: center;
  }

`
const SubHead = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  vertical-align: center; 
  
  .social-links {
    float: left; 
  }

  .subheading {
    text-align: center;
    color: #F58F89;
    font-size: 1.125rem;
}

  .other-links {
    float: right; 
  }
  `

const NavDiv = styled.div `

  nav {
    ul {
      display: flex;
      width: 80%;
      padding: 0;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-around;
      list-style-type: none;
    }
    li {
      padding: .5rem; 
    }

    a {
      text-decoration: none;
      font-size: 1.5rem;
      line-height: 1.8rem; 
      color: #5C5C5C;
      &:hover {
        color: #F58F89;
        cursor: pointer; 
      }
    }
  }

  hr {
    border: 2px solid #FFE2D6;
    width: 100vw;
    left: 0;
    margin: 15px; 
  }

`;

const Image = styled.img`
    width: 247px;
    ${'' /* height: 156.14px;  */}
`

export default function Header(props) {
  return (
    
  <>
    <HeaderDiv>
        <h1><Link to='/'><Image src={logo} alt="Candy Fluffs Logo" /></Link></h1>
        <SubHead>
          <div className="social-links">
            <TwitterLogo color="#C4C4C4" size={24} weight="fill" /> &nbsp; 
            <InstagramLogo color="#C4C4C4" size={24} weight="fill" /> 
          </div>
          <div class="subheading">{props.heading} ( •⌄• ू )✧</div>
          <div className="other-links">
            A &nbsp; C
          </div>
        </SubHead>
    </HeaderDiv>
    <NavDiv>
      <nav>
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
      </nav>
    </NavDiv>
  </>
  )
}
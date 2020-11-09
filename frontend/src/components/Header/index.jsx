import React from 'react';
import {Link} from 'gatsby'

import logo from './logo.png'

import styled from 'styled-components';

const StyledDiv = styled.div`
  img {
    width: 400px;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;    
  }
  
`;

export default function Header() {
  return(
    <StyledDiv>
      <h1><Link to='/'><img src={logo} alt="Candy Fluffs Logo"/></Link></h1>
      <p>Sub</p>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/necahual'>Necahual</Link>
          </li>
        </ul>
      </nav>
    </StyledDiv>
  )
}
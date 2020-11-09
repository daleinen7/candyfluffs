import React from 'react';
import {Link} from 'gatsby'

import logo from './logo.png'

import styled from 'styled-components';

const StyledDiv = styled.div`

  nav {
    width: 80%;

    ul {
      display: flex;
      width: 100%;
      padding: 0;
      margin-top: 0;
      flex-direction: row;
      justify-content: space-between;
      list-style-type: none;
    }
    li {
      padding: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
      text-decoration: none;
      color: #4bccc3;
      &:hover {
        color: #44e9de;
      }
    }
  }

  img {
    width: 400px;
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
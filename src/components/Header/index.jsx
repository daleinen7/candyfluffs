import React from 'react';
import {Link} from 'gatsby'

import logo from './logo.png'

import styled from 'styled-components';

const StyledDiv = styled.div`

  margin: 0 auto;
  width: 80%;

  h1 {
    text-align: center;
  }

  .subheading {
    text-align: center;
    color: #F58F89;
    font-size: 1.2rem;
  }

  nav {

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
      font-size: 1.5rem;
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

export default function Header(props) {
  return(
    <StyledDiv>
      <h1><Link to='/'><img src={logo} alt="Candy Fluffs Logo"/></Link></h1>
      <p className="subheading">{props.heading} ( •⌄• ू )✧</p>
      <nav>
        <ul>
          <li>
            <Link to='/'>Books</Link>
          </li>
          <li>
            <Link to='/shop'>Prints</Link>
          </li>
          <li>
            <Link to='/necahual'>Charms</Link>
          </li>
          <li>
            <Link to='/necahual'>Buttons</Link>
          </li>
          <li>
            <Link to='/necahual'>Necahual</Link>
          </li>
          <li>
            <Link to='/necahual'>Stickeres</Link>
          </li>
          <li>
            <Link to='/events'>Conventions/Expos</Link>
          </li>
        </ul>
      </nav>
    </StyledDiv>
  )
}
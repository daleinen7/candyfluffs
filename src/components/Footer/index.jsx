import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledDiv = styled.div`
  nav {
    ul {
      display: flex;
      justify-content: center;
      list-style-type: none;

      li {
        margin: 0 70px;
      }
    } 
  }
`;

export default function Footer() {
  return(
    <StyledDiv>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <h2>Candy Fluffs Updates!</h2>
      <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
      <form action="#">
        <input type="text" name="firstName" id="" placeholder="first name"/>
        <input type="text" name="lastName" id="" placeholder="last name"/>
        <input type="text" name="email" id="" placeholder="email"/>
        <input type="submit" value="SIGN UP"/>
      </form>
      <p>We never share any information with 3rd parties.</p>
    </StyledDiv>
  )
}
import React from 'react';
import { Link } from 'gatsby';
import ContactForm from '../ContactForm';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.25rem;
  }

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
      <ContactForm/>
    </StyledDiv>
  )
}
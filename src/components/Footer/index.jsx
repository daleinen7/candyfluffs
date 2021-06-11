import React from 'react';
import { Link } from 'gatsby';
import ContactForm from '../ContactForm';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 0; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  border-top: 2px solid var(--faded-highlight);

  @media(max-width: 800px) {
    border-top: 1px solid var(--faded-highlight);
  }

  a {
    color: #5C5C5C;
    font-size: 2rem;
    text-decoration: none;
  }
  
  h2 {
    font-size: 2.25rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding-left: 0;

      li {
        margin: 0 70px;
      }
    } 
  }
`;

export default function Footer() {
  return(
    <StyledDiv>
      <footer>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      <ContactForm/>
      </footer>
    </StyledDiv>
  )
}
import React from 'react';
import { Link } from 'gatsby';
import ContactForm from '../ContactForm';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 10rem; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  border-top: 2px solid var(--faded-highlight);

  @media(max-width: 830px) {
    border-top: 1px solid var(--faded-highlight);
  }

  a {
    color: #5C5C5C;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover{
      color: var(--highlight)
    }
  }
  
  h2 {
    font-size: 2.25rem;
  }

  footer {
    line-height: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
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
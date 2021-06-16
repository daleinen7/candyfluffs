import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  line-height:4rem;

  align-items: center;
  width: 100%;

  @media(max-width: 1100px) {
    width: 90%;
  }

  @media(max-width: 800px) {
    margin-bottom: 80px;
  }

  h2 {
    color: #000000;
    font-size: 2rem;
    margin-bottom: 10px; 
  }

  form {
   
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;

    @media(max-width: 680px) {
      align-items: center;
      flex-direction: column;
    }
  }

  input[type=text] {
    margin: 1rem;
    padding: 12px 20px;
    height: 50px;
    width: 200px;
    box-sizing: border-box;
    background-color: #C4C4C4;
    color: #000;
    border: 0px;
    @media(max-width: 680px) {
      width: 100%;
    }
  }

  input[type=text]:focus {
   border: 3px solid #555;
  }
  
  .submitButton {
    margin-top: 1rem;
    background-color: var(--background);
    border: 3px solid #5C5C5C;
    color: #5C5C5C;
    width: 200px;
    height: 50px; 
    &:hover{
    cursor:pointer;
    }
    @media(max-width: 680px) {
      width: 100%;
    }
  }

  small {
    text-align: center; 
  }

  label {
    color: #000;
    padding-right: 10px;
    display: none;
    visibility: hidden; 
  }
`;

export default function ContactForm() {

  return(
    <StyledDiv>
      <h2>Candy Fluffs Updates!</h2>
      <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
      <form action="/success" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" >
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="First Name"/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="E-mail address"/>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" placeholder="contact" />
        <input className="submitButton" type="submit" value="SIGN UP"/>
      </form>
      <small>We never share any information with 3rd parties.</small>
    </StyledDiv>
  )
}
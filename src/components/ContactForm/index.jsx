import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  
  h2 {
    color: #000000;
    font-size: 2rem;
    margin-bottom: 10px; 
  }

  .form {
    width: 100%; 
    display: flex;
    flex-direction: column; 
    align-items: space-between;
    justify-content: space-around; 
  }

  input[type=text] {
    padding: 12px 20px;
    margin: 8px 0;
    height: 50px;
    width: 200px;
    box-sizing: border-box;
    margin-right: 30px;
    background-color: #C4C4C4;
    color: #000;
    border: 0px;
}

  input[type=text]:focus {
   border: 3px solid #555;
  }
  
  .submitButton {
    background-color: #FFF8F5;
    border: 3px solid #5C5C5C;
    color: #5C5C5C;
    width: 200px;
    height: 50px; 
  }

  p {
    text-align: center; 
  }
`;

export default function ContactForm() {

  return(
    <StyledDiv>
      <h2>Candy Fluffs Updates!</h2>
      <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
      <div className="form">
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" >
        {/* <label htmlFor="firstName">First Name</label> */}
        <input type="text" name="firstName" placeholder="First Name"/>
        {/* <label htmlFor="lastName">Last Name</label> */}
        <input type="text" name="lastName" placeholder="Last Name"/>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" placeholder="E-mail address"/>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" placeholder="contact" />
        <input className="submitButton" type="submit" value="SIGN UP"/>
      </form>
        <p>We never share any information with 3rd parties.</p>
      </div>
    </StyledDiv>
  )
}
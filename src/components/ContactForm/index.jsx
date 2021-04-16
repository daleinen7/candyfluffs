import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
`;

export default function ContactForm() {

  return(
    <StyledDiv>
      <h2>Candy Fluffs Updates!</h2>
      <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" >
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName"/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input className="submitButton" type="submit" value="SIGN UP"/>
      </form>
      <p>We never share any information with 3rd parties.</p>
    </StyledDiv>
  )
}
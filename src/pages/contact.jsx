import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
`

export default function Contact() {
	return (
		<Layout heading = {"Feel free to contact me!"}>
      <StyledDiv>
        <form action="">
          <h2>Candy Fluffs Updates!</h2>
          <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="message" >
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName"/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName"/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"/>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input className="submitButton" type="submit" value="SUBMIT"/>
          </form>
          <p>We never share any information with 3rd parties.</p>
        </form>
      </StyledDiv>
      
    </Layout>
	)
}

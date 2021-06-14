import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;

  @media(max-width: 1100px) {
    width: 90%;
  }

  @media(max-width: 800px) {
    width: 95%;
    margin-bottom: 80px;
  }

  h2 {
    color: #000000;
    font-size: 2rem;
    margin-bottom: 10px; 
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    flex-wrap: wrap;

    @media(max-width: 680px) {
      align-items: center;
      flex-direction: column;
    }
  }

  .nameDiv {
    display: flex;
    justify-content: space-around;
    width: 100%;
    input[type=text]:first-of-type {
      margin-right: 20px;
    }
    @media(max-width: 600px) {
      flex-direction: column;
      input[type=text]:first-of-type {
        margin-right: 0;
      }
    }
  }

  input[type=text] {
    margin-top: 20px;
    padding: 12px 20px;
    font-family: 'Lato', sans-serif;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--form-gray);
    color: #000;
    border: 0px;
    @media(max-width: 680px) {
      width: 100%;
    }
  }

  input[type=text]:focus {
   border: 3px solid #555;
  }

  textarea {
    margin-top: 20px;
    padding: 20px 20px;
    background-color: var(--form-gray);
    border: none;
    width: 100%;
    font-family: 'Lato', sans-serif;
  }
  
  .submitButton {
    margin-top: 20px;
    background-color: #FFF8F5;
    border: 3px solid #5C5C5C;
    color: #5C5C5C;
    width: 200px;
    height: 50px; 
    @media(max-width: 680px) {
      width: 100%;
    }
  }

  p {
    text-align: center; 
  }

  label {
    color: #000;
    padding-right: 10px;
    display: none;
    visibility: hidden; 
  }
`;

export default function Contact() {
	return (
		<Layout heading = {"Feel free to contact me!"}>
      <StyledDiv>
        <form action="/success">
          <h2>Candy Fluffs Updates!</h2>
          <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="message" >
            <div className="nameDiv">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" placeholder="First Name"/>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name"/>
            </div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email"/>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" placeholder="Subject"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
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

import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content:center;
  width: 80%;
  margin: 0 auto;

  @media(max-width: 1100px) {
    width: 90%;
  }

  @media(max-width: 830px) {
    width: 95%;
    margin-bottom: 80px;
  }

  iframe{
    border:none;
  }
`;

export default function Contact() {
	return (
		<Layout heading = {"Feel free to contact me!"}>
      <StyledDiv>
          <iframe
              title="Mailchimp Contact Form"
              width="800px"
              height="1100px"
              src="https://us16.list-manage.com/contact-form?u=f0ccd4aae40398b03156934fd&form_id=a52d1c81b8d8ff1a843eaa0798c8941e">
          </iframe>
      </StyledDiv>
      
    </Layout>
	)
}

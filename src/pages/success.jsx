import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
`

export default function About() {
	return (
		<Layout heading = {"I'm just a girl who likes to draw manga"} >
      <StyledDiv>
        <StaticImage imgStyle={{'objectFit': 'contain'}} src={`../images/cjoy.png`} alt="C Joy"/>
        <p>
          Thank you! Your form submission has been received. 
        </p>
      </StyledDiv>
      
    </Layout>
	)
}

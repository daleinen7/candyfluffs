import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
  margin: 0 auto; 
  @media(max-width: 850px) {
    width:450px;  
  }
  @media(max-width: 450px) {
    width:250px;  
  }
`

export default function About() {
	return (
		<Layout heading = {"NOT FOUND?!? Σ(‘◉⌓◉’)"} >
      <StyledDiv>
        <h1>404</h1>

        <p>NOT FOUND?!? Σ(‘◉⌓◉’)</p>

        <p><a href="/"> Let’s go back home</a></p>

      </StyledDiv>
      
    </Layout>
	)
}

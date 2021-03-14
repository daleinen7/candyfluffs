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
		<Layout heading = {"Contact Candyfluffs"}>
      <StyledDiv>
        <form action="">
          <p>Form goes here</p>
        </form>
      </StyledDiv>
      
    </Layout>
	)
}

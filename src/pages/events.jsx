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

export default function Events() {
	return (
		<Layout heading = {"Events"}>
      <StyledDiv>
        <p>Events go here</p>
      </StyledDiv>
      
    </Layout>
	)
}

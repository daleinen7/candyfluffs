import React from "react"
import Layout from "../components/Layout"
import Grid from '../components/Grid';
import styled from 'styled-components';

const StyledDiv = styled.div`

`;

export default function Shop() {

  return (
    <Layout>
      <StyledDiv>
        <Grid />
      </StyledDiv>
    </Layout>
  )
}

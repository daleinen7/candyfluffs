import React from "react"
import Layout from "../components/Layout"
import GridSquare from '../components/GridSquare';
import styled from 'styled-components';
import { graphql } from "gatsby";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export default function Shop({data}) {

  const content = data.allStrapiProduct.edges;

  return (
    <Layout>
      <StyledDiv>
        {content.map(({ node }) => (
          <GridSquare 
            key={node.id} 
            title={node.name} 
            price={node.price}
          />
        ))}
      </StyledDiv>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allStrapiProduct {
      edges {
        node {
          name
          price
          id
        }
      }
    }
  }
`;
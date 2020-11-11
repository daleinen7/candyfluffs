import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import GridSquare from '../GridSquare';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-template-rows: auto;
  column-gap: 2.5em;
  row-gap: 2.5em;
  padding-top: 1em;
  padding-bottom: 3em;
`;

export default function Grid() {
  return(
    <StaticQuery 
      query={graphql`
        query ProductsQuery {
          allStrapiProduct {
            edges {
              node {
                id
                name
                price
                image {
                  absolutePath
                  relativePath
                }
              }
            }
          }
        }
      `}
      render={data => (
        data.allStrapiProduct.edges.map(({node}) => (
          <StyledDiv>
            <GridSquare 
              key={node.id} 
              title={node.name} 
              price={node.price}
              image={node.image}
            />
          </StyledDiv>
        ))
      )}
    />
  )
}
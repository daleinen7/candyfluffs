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
        query allPRoductsQuery {
          allStrapiProducts {
            edges {
              node {
                id
                images {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        data.allStrapiProducts.edges.map(({node}) => (
          <StyledDiv>
            <GridSquare 
              title={node.name} 
              price={node.price}
              images={node.images}
              key={node.id} 
            />
          </StyledDiv>
        ))
      )}
    />
  )
}
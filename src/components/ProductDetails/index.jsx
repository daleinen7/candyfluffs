import React from "react";
import Layout from "../Layout"
import { graphql } from "gatsby";
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledDiv = styled.div`
  .details {
    display:flex;
    flex-direction:row;
    flex-wrap: nowrap;
  }
`;

export default function ProductDetails({ data }) {
  const product = data.datoCmsProduct
  console.log(product);
	return(
    <Layout>
      <StyledDiv>
        <h2>{product.title}</h2>
        <div className="details">
          <Img fluid={product.image[0].fluid}/>
          <p>{product.description}</p>
        </div>  
      </StyledDiv>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    datoCmsProduct( slug: { eq: $slug } ) {
      id
      title
      description
      image {
        fluid(maxWidth: 200) {
          src
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
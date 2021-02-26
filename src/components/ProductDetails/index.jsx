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
          <Img style={{width:'100%'}} fluid={product.image[0].fluid} />
          <p>{product.description}</p>
        </div>  
        <button 
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-image={product.image.url}
          data-item-name={product.title}
          data-item-url={``}
        >
          Add to Cart
        </button>
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
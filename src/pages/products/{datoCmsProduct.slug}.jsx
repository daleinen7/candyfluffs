import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledDiv = styled.div`
  display:flex;
  flex-wrap: nowrap;
  
  .details {
    display: flex;
    flex-direction: column;
  }
`;

export default function Product({ data }) {
	return(
    <Layout>
      <StyledDiv>
        <Img style={{width:'100%'}} fluid={data.datoCmsProduct.image[0].fluid} />
        <div className="details">
          <h2>{data.datoCmsProduct.title}</h2>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html}} />
          <button 
            className="snipcart-add-item"
            data-item-id={data.datoCmsProduct.id}
            data-item-price={data.datoCmsProduct.price}
            data-item-image={data.datoCmsProduct.image.url}
            data-item-name={data.datoCmsProduct.title}
            data-item-url={``}
          >
            Add to Cart
          </button>
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
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 200) {
          src
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
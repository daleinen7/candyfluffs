import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledDiv = styled.div`
  .details {
    display:flex;
    flex-direction:row;
    flex-wrap: nowrap;
  }
`;

export default function Product({ data }) {
	return(
    <Layout>
      <StyledDiv>
        <h2>{data.datoCmsProduct.title}</h2>
        <div className="details">
          <Img style={{width:'100%'}} fluid={data.datoCmsProduct.image[0].fluid} />
          <div dangerouslySetInnerHTML={{__html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html}} />;
        </div>  
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
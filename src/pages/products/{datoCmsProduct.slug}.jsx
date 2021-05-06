import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledDiv = styled.div`
  display:flex;
  flex-wrap: nowrap;
  justify-content: center;

  @media(max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
  
  .images-section {
    display: flex;
    flex-direction: column;
  }

  .img-array {
    display: flex;
    justify-content: space-evenly;

    .preview {
      cursor: pointer;
      &:hover {
        outline: 1px solid var(--highlight);
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 575px;
    margin-left: 40px;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 3rem;
      color: var(--highlight);
    }

    p {
      font-size: 1.15rem;
    }

    button {
      border: 3px solid var(--gray);
      width: 200px;
      background: var(--background);
      padding: 20px 30px;

      &:hover {
        cursor: pointer;
        border: 3px solid var(--highlight);
      }
    }
  }
`;

export default function Product({ data }) {
  const [displayImg, setDisplayImage] = useState(0);
  console.log(displayImg);

  let previewImgs
  
  if (data.datoCmsProduct.image[1]) {
    previewImgs = (
      <div className="img-array">
        {data.datoCmsProduct.image.map((img, idx) => {
          return (
            <div onClick={() => setDisplayImage(idx)} >
              <Img className="preview" style={{width: 110}} fluid={img.fluid} key={idx}/>
            </div>
          )     
        })}
      </div>
    )
  } else {
    previewImgs = false;
  }

	return(
    <Layout>
      <StyledDiv>
        <div className="images-section">
          <Img style={{width:575}} fluid={data.datoCmsProduct.image[displayImg].fluid} />
          {previewImgs}
        </div>
        <div className="details">
          <h2>{data.datoCmsProduct.title}</h2>
          <p>${data.datoCmsProduct.price}</p>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html}} />
          <button 
            className="snipcart-add-item"
            data-item-id={data.datoCmsProduct.id}
            data-item-price={data.datoCmsProduct.price}
            data-item-image={data.datoCmsProduct.image.url}
            data-item-name={data.datoCmsProduct.title}
            data-item-url={`/products/${data.datoCmsProduct.slug}`}
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
      price
      slug
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
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

    .selected {
      /* visibility: visible; */
      display: inherit;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 3rem;
      color: var(--highlight);
    }

    h3 {
      margin-top: 0.5rem;
      margin-bottom: 0;
    }

    p {
      font-size: 1.15rem;
    }

    button {
      /* visibility: collapse; */
      display: none;
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
  const [variant, setVariant] = useState("OG")

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

  const selectVariant = (e) => {
    setVariant(e.target.value)
    
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
          <h3>{variant === "OG" ? "" : data.datoCmsProduct.variation[variant].title}</h3>
          <p>${data.datoCmsProduct.price}</p>
          <div dangerouslySetInnerHTML={{__html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html}} />

          {data.datoCmsProduct.variation.length > 0 &&
            <select value={variant} onChange={selectVariant}>
              <option value={"OG"}>{data.datoCmsProduct.title}</option>
              {data.datoCmsProduct.variation.map((variant, idx)=>{
                return <option value={idx} key={idx}>{variant.title}</option>
              })}
            </select>
          }
          
          <button 
            className={variant==="OG" ? "snipcart-add-item selected":"snipcart-add-item"}
            aria-hidden={variant=="OG" ? "true":"false"}
            data-item-id={data.datoCmsProduct.id}
            data-item-price={data.datoCmsProduct.price}
            data-item-description={data.datoCmsProduct.descriptionNode.childMarkdownRemark.html}
            data-item-image={data.datoCmsProduct.image.url}
            data-item-name={data.datoCmsProduct.title}
            data-item-url={`/products/${data.datoCmsProduct.slug}`}
          >
            Add to Cart
          </button>

          {/* if there is a variant, map and add a button to page for each */}
          {data.datoCmsProduct.variation.length > 0 &&
            data.datoCmsProduct.variation.map((vari, idx)=>{
              return <button 
                className={variant==idx ? "snipcart-add-item selected":"snipcart-add-item"}
                aria-hidden={variant==idx ? "true":"false"}
                data-item-id={vari.id}
                data-item-price={vari.price}
                data-item-description={data.datoCmsProduct.descriptionNode.childMarkdownRemark.html + " " + vari.title}
                data-item-image={data.datoCmsProduct.image.url}
                data-item-name={vari.title}
                data-item-url={`/products/${data.datoCmsProduct.slug}`}
                key={idx}
              >
                Add to Cart
              </button>
            })
          }
          
        </div>
      </StyledDiv>
    </Layout>
  )
};

export const query = graphql`
  query ($slug: String!) {
    datoCmsProduct(slug: {eq: $slug}) {
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
      variation {
        id
        price
        weight
        title
        stock
        size
        originalId
      }
    }
  }
`;
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledDiv = styled.div`
  position: relative;
  width: 25vw;
  height: auto;
  border: 2px solid  #f58f89;
  border-radius: 2px;
  img {
    display: block;
    width: 25vw;
    height: auto;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color:  #f58f89;
  }
  &:hover .overlay {
    opacity: 1;
  }
  .text {
    color: white;
    font-size: 1.5em;
    position: absolute;
    text-align: center;
  }
`;

export default function GridSquare(props) {
  return(
    <Link to="{/product}">
      <StyledDiv>
          <Img
            className="product_image"
            fluid={props.images.childImageSharp.fluid}
            alt={props.name + " thumbnail"}
          />
          <div className="overlay text">
            <h2>{props.title}</h2>
            <h3>${props.price}</h3>
          </div>
      </StyledDiv>
    </ Link>
  )
}
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
`;

export default function GridSquare(props) {
  return(
    <StyledDiv>
      <Link to="{/product}">
        {/* <div class="product"> */}
          {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_fade */}
          <Img
            className="product_image"
            fluid={props.images.childImageSharp.fluid}
            alt="testing yo"
          />
          <div className="overlay text">
            <h2>{props.name}</h2>
            <h3>${props.price}</h3>
          </div>
        {/* </div> */}
      </ Link>
    </StyledDiv>
  )
}
import React from 'react';

import styled from 'styled-components';

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
      <a href=".cache/gatsby-source-filesystem/62715eac4465f02879831bb180d8d15c.jpg">
        {/* <div class="product"> */}
          {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_fade */}
          <img
            class="product_image"
            src=".cache/gatsby-source-filesystem/62715eac4465f02879831bb180d8d15c.jpg"
            alt="testing yo"
          />
          <div class="overlay text">
            <h2>{props.name}</h2>
            <h3>${props.price}</h3>
          </div>
        {/* </div> */}
      </a>
    </StyledDiv>
  )
}
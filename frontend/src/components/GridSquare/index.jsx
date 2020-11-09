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
      <h3 className="title">{props.title}</h3>
      <p className="price">${props.price}</p>
    </StyledDiv>
  )
}
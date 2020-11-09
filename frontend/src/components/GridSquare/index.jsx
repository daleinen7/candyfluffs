import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 500px;
  border: 1px solid red;
  border-radius: 4px;
  padding: 1em;
  margin-left: 2em;
  margin-bottom: 2em;
`;

export default function GridSquare(props) {
  return(
    <StyledDiv>
      <h3 className="title">{props.title}</h3>
      {/* <p className="description">Product Description</p> */}
      <p className="price">${props.price}</p>
    </StyledDiv>
  )
}
import React from 'react';
import GridQuery from '../GridQuery';
import styled from 'styled-components';

// const StyledDiv = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
//   grid-gap: 10px;
//   padding-top: 1em;
//   padding-bottom: 3em;
// `;

export default function Grid() {
  return(
    // <StyledDiv>
    <div className="product-grid">
      <GridQuery />
    </div>
    // </StyledDiv>
  )
}
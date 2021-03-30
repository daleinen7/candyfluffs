import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styled from 'styled-components';

// const StyledDiv = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0;
//   margin: 0 auto;
//   main {
//     margin: 0 auto;
//     width: 80%;
//   }
// `;

export default function Layout(props) {
  return(
    // <StyledDiv>
    <div className="grid-container">
        <Header heading = {props.heading} />
        <main>
            {props.children}
        </main>
        <Footer />   
  </div>
    // </StyledDiv>
  )
}
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  main {
    margin: 0 auto;
    width: 80%;
    flex-grow: 1;
  }
`;

export default function Layout(props) {
  return(
    <StyledDiv>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />   
    </StyledDiv>
  )
}
import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  h2{
    font-size: 3em;
    letter-spacing: 22px;
    margin-bottom:0;
    margin-top: 3em;
    text-align: justify;
    text-transform: uppercase;
    color: var(--gray);
  } 
  h1{
    font-size: 8em;
    text-transform: uppercase;
    color: var(--gray);
    margin:0; 
  } 
  p{
    color:var(--highlight);
    font-size 2em;
    span{
      color: var(--gray);
    }
  }
`

export default function About() {
	return (
		<Layout heading = {"Success!"} >
      <StyledDiv>
        <div>
          <h2>Message</h2>
          <h1>Sent!</h1>
        </div>
        <p>
        <span>(((o(</span> *<span>ﾟ▽ﾟ</span>*<span>)o)))</span>♡
        </p>
        <p>
        I’ll get back to you soon
        </p>
      </StyledDiv>
      
    </Layout>
	)
}

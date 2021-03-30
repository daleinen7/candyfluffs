import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
`

export default function About() {
	return (
		<Layout heading = {"Just a girl who likes to draw manga"} >
      <StyledDiv>
        <StaticImage src="../images/cjoy.png" alt="C Joy" />

        <p>Hello my lovelies~ </p>

        <p>I'm just a girl that loves to draw manga! I am an illustrator that grew up on manga and I'll forever be influenced by Sailor Moon, Skip Beat, Nao Tsukiji, and classic manga like Glass Mask.</p>

        <p>This all started as a hobby, but as I started to focus more on manga and post things on Tumblr I realized there are people that really like my work. So this shop is a direct result of that. I hope you see some thing you like and join me on my journey! </p>

        <p>(((o(*ﾟ▽ﾟ*)o)))♡</p>

        <p>
          -Candy Joy
        </p>
      </StyledDiv>
      
    </Layout>
	)
}

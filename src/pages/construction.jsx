import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
  margin: 0 auto; 
  @media(max-width: 850px) {
    width:450px;  
  }
  @media(max-width: 450px) {
    width:250px;  
  }
`

export default function About() {
	return (
		<Layout heading = {"Under Construction!"} >
      <StyledDiv>

              <StaticImage layout="fullWidth"  style={{maxWidth:752, margin: "4rem 0"}} src="../images/underConstruction.svg" alt="C Joy"/>

        <span>

          <div className="social-links hidden">
            <a href="https://candy-fluffs.tumblr.com/" aria-label="Candy Fluffs Tumblr"><FontAwesomeIcon icon={faTumblr} size="lg"/></a>
            <a href="http://instagram.com/candy_fluffs" aria-label="Candy Fluffs Instagram"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
            <a href="http://twitter.com/candy_fluffs" aria-label="Candy Fluffs Twitter"><FontAwesomeIcon icon={faTwitter} size="lg"/></a> 
          </div>
          <p><a href="http://eepurl.com/duTC3L">be the first to know when we’re live</a></p>
        </span>
      </StyledDiv>
      
    </Layout>
	)
}

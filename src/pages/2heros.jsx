import React from 'react'
import Layout from '../components/Layout'
import GridSquare from '../components/GridSquare';
import {StaticImage} from 'gatsby-plugin-image'
import styled from 'styled-components';

const StyledDiv = styled.div`

  .info {
    display: flex;
    @media(max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .links {
    
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li, p {
      font-size: 1.5rem;
    }
    a {
      text-decoration: none;
      color: var(--grey);
      &:hover {
        color: var(--highlight);
        text-decoration: underline;
      }
    }
  }
`

export default function Necahual({ data }) {
  return (
    <Layout heading = {'Necahual'}>
      <StyledDiv>
       
          <h2 style={{  fontSize:' 3rem',color: 'var(--highlight)',textAlign: 'center',padding:'2rem'}}>NECAHUAL</h2>
          <div className='info'style={{justifyContent:'center',lineHeight:'3rem'}}>
            <StaticImage style={{width:600, height:600, marginRight:'6rem'}} src="../images/necahualImg.jpeg" alt="Necahual"/>
            <div className="links"style={{marginRight:'4rem'}}>
              <h3 style={{fontSize:'1.5rem'}}>Read it on <a style={{color: 'var(--highlight)'}} href="https://www.webtoons.com/en/challenge/necahual/list?title_no=216820">WEBTOONS</a>!</h3>
              <p style={{  color: 'var(--highlight)'}}>Support us on:</p>
              <ul>
                <li><a href="https://www.patreon.com/2heroes">Patreon</a></li>
                <li><a href="https://www.instagram.com/2.heroes/">Instagram</a></li>
                <li><a href="https://twitter.com/2Heroes1/">Twitter </a></li>
              </ul>
            </div>
          </div>
      
        <h2 style={{  fontSize:' 3rem', color: 'var(--highlight)',textAlign: 'center',padding:'2rem'}}>MERCH</h2>
        <div className="product-grid">
          {data.allDatoCmsProduct.edges.map(({node}) => (
            <GridSquare 
              title={node.title} 
              price={node.price}
              image={node.image[0]}
              slug={node.slug}
              key={node.id} 
            />
          ))}  
        </div>
      </StyledDiv>
    </Layout>
  )
}

export const query = graphql`
  query NechaualQuery {
    allDatoCmsProduct(filter: {fandoms: {eq: "Necahual"}}) {
      edges {
        node {
          id
          title
          price
          slug
          image {
            fluid(maxWidth: 200) {
              src
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }

`
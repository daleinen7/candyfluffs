import React from 'react'
import Layout from '../components/Layout'
import GridSquare from '../components/GridSquare';
import {StaticImage} from 'gatsby-plugin-image'
import styled from 'styled-components';

const StyledDiv = styled.div`
  h2 {
    font-size: 2.25rem;
    color: var(--highlight);
    text-align: center;
  }

  .info {
    display: flex;
  }
  .links {
    margin-left: 70px;
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li, p {
      font-size: 1.25rem;
    }
    a {
      text-decoration: none;
      color: var(--highlight);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default function Necahual({ data }) {
  return (
    <Layout heading = {'Necahual'}>
      <StyledDiv>
        <h2>NECAHUAL</h2>
        <div className='info'>
          <StaticImage style={{width:575}} src="../images/necahualImg.jpeg" alt="Necahual"/>
          <div className="links">
            <h3>Read it on <a href="https://www.webtoons.com/en/challenge/necahual/list?title_no=216820">WEBTOONS</a>!</h3>
            <p>Support us on:</p>
            <ul>
              <li><a href="https://www.patreon.com/2heroes">Patreon</a></li>
              <li><a href="https://www.instagram.com/2.heroes/">Instagram</a></li>
              <li><a href="https://twitter.com/2Heroes1/">Twitter </a></li>
            </ul>
          </div>
        </div>

        <h2>MERCH</h2>
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
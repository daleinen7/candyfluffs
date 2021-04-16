import React from 'react'
import Layout from '../components/Layout'
import GridSquare from '../components/GridSquare';
import {StaticImage} from 'gatsby-plugin-image'

export default function Necahual({ data }) {
  return (
    <Layout heading = {'Necahual'}>
      <h2>NECAHUAL</h2>
      <div className='info'>
        <StaticImage style={{width:575}} src="../images/necahual.png" alt="Necahual"/>
        <h3>Read it on <a href="https://www.webtoons.com/en/challenge/necahual/list?title_no=216820">WEBTOONS</a>!</h3>

        <p>Support us on:</p>
        <ul>
          <li><a href="https://www.patreon.com/2heroes">Patreon</a></li>
          <li><a href="https://www.instagram.com/2.heroes/">Instagram</a></li>
          <li><a href="">Twitter (not real link please fix)</a></li>
        </ul>
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
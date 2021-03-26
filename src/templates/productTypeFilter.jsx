import React from "react"
import Layout from "../components/Layout"
import GridSquare from '../components/GridSquare';

export default function productTypeFilter({pageContext}) {
  return (
    <Layout heading = {"just a girl who likes to draw manga"}>

      {pageContext.pageContext.map(product => {
        return (
          <GridSquare 
            title={product.title} 
            price={product.price}
            image={product.image}
            slug={product.slug}
            key={product.id} 
          /> 
        )
      })}
      

    

    </Layout>
  )
}
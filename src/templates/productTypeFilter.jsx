import React from "react"
import Layout from "../components/Layout"
import GridSquare from '../components/GridSquare';

export default function productTypeFilter({pageContext}) {
  console.log(pageContext);
  return (
    <Layout heading = {"Just a girl who likes to draw manga"}>
      <div className="product-grid">
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
      </div>     
    </Layout>
  )
}
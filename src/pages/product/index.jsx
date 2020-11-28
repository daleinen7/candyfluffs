import React from "react"
import Layout from "../../components/Layout"
import { graphql, StaticQuery } from "gatsby";


export default function Product() {
	return(
    <Layout>
      <StaticQuery 
        query={graphql`
          query ProductQuery {
            datoCmsProduct(id: {}) {
              title
            }
          }        
        `}
        render={data => (
          data.title
        )}
      />
    </Layout>
  )
}

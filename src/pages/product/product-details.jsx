import React from "react";
import Layout from "../../components/Layout"
import { graphql } from "gatsby";


export default function ProductDetails({ data }) {
  const product = data.datoCmsProduct
  console.log(product);
	return(
    <Layout>
      {product.title}
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    datoCmsProduct( slug: { eq: $slug } ) {
      title
    }
  }
`;
import * as React from 'react';
import Layout from "../components/Layout"
import { graphql } from 'gatsby';

const Product = ({ data }) => {
  return (
    <Layout>
      <div class="content">
        <h1>{data.slug}</h1>
        <p class="goodplace">Welcome! <br />
        Everything is fine. </p>
        </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    datoCmsProduct(id: { eq: $id }) {
      slug
    }
  }
`;

export default Product;
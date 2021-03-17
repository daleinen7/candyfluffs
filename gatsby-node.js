// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query SlugQuery {
//       allDatoCmsProduct {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   data.allDatoCmsProduct.edges.forEach(edge => {
//     const slug = edge.node.slug
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/components/ProductDetails/index.jsx`),
//       context: { slug: slug },
//     })
//   })
// }
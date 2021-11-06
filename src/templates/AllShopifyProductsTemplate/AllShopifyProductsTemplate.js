// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../../components/Layout"
// import { Main, Container, ProductCard } from "../../components/UI"

// const AllShopifyProductsTemplate = ({
//   data: {
//     allShopifyProduct: { nodes: products },
//   },
// }) => {
//   return (
//     <Layout smallLogo>
//       <Main className="bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
//         <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {React.Children.toArray(
//             products.map(p => (
//               <ProductCard
//                 title={p.title}
//                 price={p.priceRangeV2.minVariantPrice.amount}
//                 image={
//                   p.featuredImage.localFile.childImageSharp.gatsbyImageData
//                 }
//                 alt={p.featuredImage.altText}
//                 slug={p.handle}
//               />
//             ))
//           )}
//         </Container>
//       </Main>
//     </Layout>
//   )
// }

// export default AllShopifyProductsTemplate

// export const query = graphql`
//   query MyShopifyProducts($skip: Int!, $limit: Int!) {
//     allShopifyProduct(limit: $limit, skip: $skip) {
//       nodes {
//         title
//         handle
//         featuredImage {
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//           altText
//         }
//         priceRangeV2 {
//           minVariantPrice {
//             amount
//           }
//         }
//       }
//     }
//   }
// `

import React from "react"

const AllShopifyProductsTemplate = () => {
  return (
    <div>
      <h1>Dummy</h1>
    </div>
  )
}

export default AllShopifyProductsTemplate

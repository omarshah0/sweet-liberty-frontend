import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import { Main, Container } from "../../components/UI"
import ShopifyProducImages from "../../components/ShopifyProducImages"
import ShopifyProductDescription from "../../components/ShopifyProductDescription"
import Breadcumbs from "../../components/Breadcumbs"

const ShopifyProductTemaplate = ({
  data: {
    shopifyProduct: {
      title,
      description,
      featuredImage,
      hasOnlyDefaultVariant,
      priceRangeV2,
      totalInverntory,
      variants,
    },
  },
  pageContext: { normalizedVariants },
  location,
}) => {
  return (
    <Layout smallLogo>
      <Main className="bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
        <Container>
          <Breadcumbs pathname={location.pathname} className="mb-12" />
          <div className="flex">
            <ShopifyProducImages
              featuredImage={featuredImage}
              variantsThumbnails={variants}
              className="mr-[42px]"
            />
            <ShopifyProductDescription
              featuredImage={featuredImage}
              title={title}
              description={description}
              hasOnlyDefaultVariant={hasOnlyDefaultVariant}
              totalInverntory={totalInverntory}
              price={priceRangeV2}
              normalizedVariants={normalizedVariants}
              variants={variants}
            />
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default ShopifyProductTemaplate

export const query = graphql`
  query ShopifyProduct($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      hasOnlyDefaultVariant
      totalInventory
      priceRangeV2 {
        minVariantPrice {
          amount
        }
      }
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        altText
      }
      variants {
        id
        title
        price
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
        }
        legacyResourceId
        inventoryQuantity
      }
      totalInventory
    }
  }
`

const { paginate } = require("gatsby-awesome-pagination")
const path = require("path")
const shopifyVariants = require("./src/utilities/ssrUtilities/shopifyVariants")
const createRelatedArticles = require("./src/utilities/ssrUtilities/createRelatedProducts")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogPost/BlogPost.js")
  const allBlogPostsTemplate = path.resolve(
    "./src/templates/AllBlogTemplate/AllBlogPosts.js"
  )
  const menuPageTemplate = path.resolve("./src/templates/MenuPage/MenuPage.js")
  const allShopifyProductsTemplate = path.resolve(
    "./src/templates/AllShopifyProductsTemplate/AllShopifyProductsTemplate.js"
  )
  const shopifyProductPage = path.resolve(
    "./src/templates/ShopifyProductTemplate/ShopifyProductTemaplate.js"
  )

  // Fetching Contentful Blogs

  const requestPost = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
    }
  `)
  const posts = requestPost.data.allContentfulBlog.edges

  // Fetching DatoCMS Menus

  const resquestMenu = await graphql(`
    query fetchFoodMenus {
      allDatoCmsMenu {
        nodes {
          slug
        }
      }
    }
  `)

  const menus = resquestMenu.data.allDatoCmsMenu.nodes

  // Fetching All Shopify Products
  // const requestShopifyProducts = await graphql(`
  //   query fetchShopifyProducts {
  //     allShopifyProduct {
  //       nodes {
  //         title
  //         handle
  //         tags
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
  //         hasOnlyDefaultVariant
  //         variants {
  //           id
  //           shopifyId
  //           title
  //           price
  //           image {
  //             localFile {
  //               childImageSharp {
  //                 gatsbyImageData
  //               }
  //             }
  //             altText
  //           }
  //           legacyResourceId
  //           inventoryQuantity
  //         }
  //       }
  //     }
  //   }
  // `)

  // const shopifyProducts = requestShopifyProducts.data.allShopifyProduct.nodes

  // ---------------------------------------- CONTENTFUL BLOG SECTION ---------------------------------------- //

  //Creating All Blog Posts with Pagination - Change itemsPerPage to control Posts Per Page
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 9,
    pathPrefix: "/blog",
    component: allBlogPostsTemplate,
  })

  //Creating a Single Blog Post
  posts.map(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        nextPost: post.next,
        prevPost: post.previous,
      },
    })
  })

  // ---------------------------------------- DATOCMS FOOD MENU SECTION ---------------------------------------- //

  menus.map(menu => {
    createPage({
      component: menuPageTemplate,
      path: `/menu/${menu.slug}`,
      context: {
        slug: menu.slug,
      },
    })
  })

  // ---------------------------------------- SHOPIFY SECTION ---------------------------------------- //

  // Creating All Shopify Products with Pagination - Change itemsPerPage to control Products Per Page
  // paginate({
  //   createPage,
  //   items: shopifyProducts,
  //   itemsPerPage: 6,
  //   pathPrefix: "/shop",
  //   component: allShopifyProductsTemplate,
  // })

  //Creating Single Shopify Product Page
  // shopifyProducts.map(product => {
  //   const normalizedVariants =
  //     !product.hasOnlyDefaultVariant && shopifyVariants(product.variants)
  //   const relatedArticles = createRelatedArticles(
  //     shopifyProducts,
  //     product.tags,
  //     product.handle
  //   )
  //   createPage({
  //     component: shopifyProductPage,
  //     path: `/shop/${product.handle}`,
  //     context: {
  //       handle: product.handle,
  //       normalizedVariants: normalizedVariants,
  //       relatedArticles: relatedArticles,
  //     },
  //   })
  // })
}

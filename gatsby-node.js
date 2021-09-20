const { paginate } = require("gatsby-awesome-pagination")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogPost/BlogPost.js")
  const allBlogPostsTemplate = path.resolve(
    "./src/templates/AllBlogTemplate/AllBlogPosts.js"
  )
  const menuPageTemplate = path.resolve("./src/templates/MenuPage/MenuPage.js")

  const resPost = await graphql(`
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
  const posts = resPost.data.allContentfulBlog.edges

  //Fetching Menus

  const resMenu = await graphql(`
    query fetchFoodMenus {
      allDatoCmsMenu {
        nodes {
          slug
        }
      }
    }
  `)

  const menus = resMenu.data.allDatoCmsMenu.nodes

  //Creating All Blog Posts with Pagination - Change itemsPerPage to control Posts per Page
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

  menus.map(menu => {
    createPage({
      component: menuPageTemplate,
      path: `/menu/${menu.slug}`,
      context: {
        slug: menu.slug,
      },
    })
  })
}

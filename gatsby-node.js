const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogPost/BlogPost.js")
  const allBlogPostsTemplate = path.resolve(
    "./src/templates/AllBlogTemplate/AllBlogPosts.js"
  )

  const res = await graphql(`
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
  const posts = res.data.allContentfulBlog.edges

  //Creating All Blog Posts with Pagination - Change number to control Posts per Page
  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: allBlogPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //Creating a Single Blog Post
  posts.map(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        nextPost: { title: post.next?.title, slug: post.next?.slug },
        prevPost: { title: post.previous?.title, slug: post.previous?.slug },
      },
    })
  })
}

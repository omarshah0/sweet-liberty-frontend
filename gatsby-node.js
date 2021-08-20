const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogPost/BlogPost.js")
  const res = await graphql(`
    query {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)
  const posts = res.data.allContentfulBlog.nodes
  posts.map(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.slug}`,
      context: {
        slug: post.slug,
      },
    })
  })
}

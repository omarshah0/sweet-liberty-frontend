const { paginate } = require("gatsby-awesome-pagination")
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

  console.log("Posts are ", posts)

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
        nextPost: {
          title: post.next.title || null,
          slug: post.next.slug || null,
        },
        prevPost: { title: "Omar Farooq", slug: "cheema-lakoo" },
      },
    })
  })
}

// nextPost: { title: post.next?.title, slug: post.next?.slug },
// prevPost: { title: post.previous?.title, slug: post.previous?.slug },

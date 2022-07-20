import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import BlogCard from "../../components/BlogCard"
import CategoriesDropDown from "../../components/CategoriesDropDown"
import { Container, Main, Pagination } from "../../components/UI"

const AllBlogPosts = ({ data, pageContext }) => {
  const posts = data.allContentfulBlog.nodes
  const [blogs, setBlogs] = useState(posts)

  const filterBlogsHandler = filter => {
    if (filter === "all") return setBlogs(posts)
    const newList = blogs.filter(blog => {
      if (blog.category) {
        return blog => blog.category.slug === filter
      }
      return false
    })
    return setBlogs(newList)
  }

  return (
    <Layout>
      <Main className="bg-brandLight">
        <Container>
          <div className="md:px-8 lg:px-16">
            <div className="mb-5 md:flex justify-between items-center">
              <h1 className="font-bebas text-6xl text-center md:text-8xl md:text-left text-brandRed">
                Happenings
              </h1>
              <CategoriesDropDown filterBlogsHandler={filterBlogsHandler} />
            </div>
            <div className="py-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 justify-center">
              {React.Children.toArray(
                blogs.map(blog => (
                  <BlogCard
                    title={blog.title}
                    category={blog.category}
                    slug={blog.slug}
                    thumbnail={blog.heroImage}
                  />
                ))
              )}
            </div>
            <div className="mt-20 pb-28">
              <Pagination {...pageContext} />
            </div>
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default AllBlogPosts

export const query = graphql`
  query MyBlogs($skip: Int!, $limit: Int!) {
    allContentfulBlog(limit: $limit, skip: $skip) {
      nodes {
        title
        slug
        category {
          title
          slug
        }
        heroImage {
          gatsbyImageData
          title
        }
      }
    }
  }
`

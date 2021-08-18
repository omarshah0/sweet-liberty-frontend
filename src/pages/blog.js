import React, { useState } from "react"

import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"
import CategoriesDropDown from "../components/CategoriesDropDown"
import { Container, Main } from "../components/UI"

const BlogPage = () => {
  const dummyData = [
    {
      category: "events",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "news",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "news",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "news",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "news",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "news",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "merch",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "merch",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "specials",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "specials",
      title: "Join us for drag queen brunch every sunday",
    },
    {
      category: "specials",
      title: "Join us for drag queen brunch every sunday",
    },
  ]

  const [blogs, setBlogs] = useState(dummyData)

  const filterBlogsHandler = filter => {
    const newList = dummyData.filter(blog => blog.category === filter)
    if (newList.length !== 0) return setBlogs(newList)
    setBlogs(dummyData)
  }

  return (
    <Layout>
      <Main>
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
                  <BlogCard title={blog.title} category={blog.category} />
                ))
              )}
            </div>
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default BlogPage

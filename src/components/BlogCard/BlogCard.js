import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BlogCard = ({ title, category }) => {
  return (
    <div className="h-blog-card bg-shopBg mb-5 md:mb-0 rounded-xl shadow-blog-card overflow-hidden max-w-blog-card">
      <div className="max-h-52 overflow-hidden">
        <StaticImage src="../../assets/blog-dummy.png" alt="Parkola" />
      </div>
      <div className="pt-6 px-6 pb-7 shadow-drop-down">
        <span className="block font-bebas text-2xl text-brandRed mb-2">
          {category}
        </span>
        <Link to="/blog">
          <h2 className="font-bebas text-4xl text-brandDark mb-3">{title}</h2>
        </Link>
        <Link
          to="/blog"
          className="inline-block font-cantataOne text-sm text-brandDark relative arrow-group"
        >
          Read more <span className="arrow"></span>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard

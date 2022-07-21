import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { RightArrow } from "../UI"

const BlogCard = ({ title, category, slug, thumbnail }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="h-blog-card bg-shopBg mb-5 md:mb-0 rounded-xl shadow-blog-card overflow-hidden max-w-blog-card min-h-blog-card flex flex-col"
    >
      <div className="h-52 overflow-hidden">
        {thumbnail?.gatsbyImageData ? (
          <GatsbyImage
            image={thumbnail?.gatsbyImageData}
            alt={thumbnail?.title || "My Sweet Liberty"}
            placeholder="blurred"
          />
        ) : (
          <div style={{ backgroundColor: "rgba(0,0,0,0.15", height: "100%" }} />
        )}
      </div>
      <div className="pt-6 px-6 pb-7 flex-grow flex flex-col">
        <span className="block font-bebas text-2xl text-brandRed mb-2">
          {category ? (
            React.Children.toArray(
              category.map(category => (
                <span className="mr-3">{category.title}</span>
              ))
            )
          ) : (
            <span className="mr-3">Uncategorized</span>
          )}
        </span>
        <h2 className="font-bebas text-4xl text-brandDark mb-3">{title}</h2>
        <p className="inline-block font-cantataOne text-sm text-brandDark mt-auto">
          Read more <RightArrow className="ml-2" />
        </p>
      </div>
    </Link>
  )
}

export default BlogCard

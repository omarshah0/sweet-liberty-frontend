import React from "react"
import { Link } from "gatsby"

const NextArticleBox = ({ title, slug, className }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className={`block bg-shopBg py-10 px-9 rounded-xl ${className}`}
    >
      <h3 className="font-frankRuhlLibre text-brandDark font-bold text-sm">
        Next Article
      </h3>
      <h4 className="font-cantataOne text-brandRed text-xs">{title}</h4>
    </Link>
  )
}

export default NextArticleBox

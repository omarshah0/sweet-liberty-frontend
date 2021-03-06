import React from "react"
import { Link } from "gatsby"

const PreviousArticleBox = ({ title, slug, className }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className={`block bg-shopBg py-10 px-9 rounded-xl ${className}`}
    >
      <h3 className="font-frankRuhlLibre text-brandDark font-bold text-sm">
        Previous Article
      </h3>
      <h4 className="font-cantataOne text-brandRed text-xs">{title}</h4>
    </Link>
  )
}

export default PreviousArticleBox

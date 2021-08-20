import React from "react"
import { Link } from "gatsby"

const PreviousArticleBox = ({ title, slug, className }) => {
  return (
    <div className={`bg-shopBg py-10 px-9 rounded-xl ${className}`}>
      <h3 className="font-frankRuhlLibre text-brandDark font-bold text-sm">
        Previous Article
      </h3>
      <Link
        to={`/blog/${slug}`}
        className="font-cantataOne text-brandRed text-xs"
      >
        {title}
      </Link>
    </div>
  )
}

export default PreviousArticleBox

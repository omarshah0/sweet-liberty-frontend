import React from "react"
import { Link } from "gatsby"
import LeftArrow from "./LeftArrow"

const BackToBlog = ({ className }) => {
  return (
    <div className={`bg-shopBg py-5 px-9 rounded-xl ${className}`}>
      <Link
        to="/blog"
        className="font-frankRuhlLibre text-brandDark font-bold text-sm"
      >
        <LeftArrow className="mr-3" /> Back to the blog
      </Link>
    </div>
  )
}

export default BackToBlog

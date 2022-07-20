import React from "react"
// import { Link } from "gatsby"

// const AuthorBox = ({ name, slug, createdAt, className }) => {
const AuthorBox = ({ name, createdAt, className }) => {
  return (
    <div className={`bg-shopBg py-10 px-9 rounded-xl ${className}`}>
      {/* <Link to={`/author/${slug}`}> */}
      <h3 className="font-frankRuhlLibre text-brandDark font-bold text-sm">
        Posted by: {name}
      </h3>
      {/* </Link> */}
      <time className="font-cantataOne text-brandRed text-xs">{createdAt}</time>
    </div>
  )
}

AuthorBox.defaultProps = {
  name: "Sweet Liberty Team",
  slug: "",
  createdAt: "Aug 20, 2021",
}

export default AuthorBox

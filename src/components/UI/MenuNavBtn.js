import React from "react"
import { Link } from "gatsby"

const MenuNavBtn = ({ icon, title, slug }) => {
  return (
    <Link
      to={`/menu/${slug}`}
      className={`flex min-w-max font-sourceSansProBold px-8 py-4 rounded transition tab__${slug}`}
    >
      <img src={icon} alt={title} className="mr-3" />
      <span className="block">{title}</span>
    </Link>
  )
}

export default MenuNavBtn

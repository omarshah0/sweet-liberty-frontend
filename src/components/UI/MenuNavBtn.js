import React from "react"
import { Link } from "gatsby"

const MenuNavBtn = ({ icon, title, slug }) => {
  return (
    <Link
      to={`/menus/${slug}`}
      className={`font-sourceSansProBold px-8 py-4 rounded transition tab__${slug}`}
    >
      <img src={icon} alt={title} />
      {title}
    </Link>
  )
}

export default MenuNavBtn

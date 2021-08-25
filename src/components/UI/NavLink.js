import React from "react"
import { Link } from "gatsby"

const NavLink = ({ title, url, small }) => {
  return (
    <Link
      to={url}
      className={`font-bebas ${
        small ? "text-4xl" : "text-6xl md:text-8xl lg:text-9xl"
      } text-brandLight hover:text-brandPink transition-colors`}
      activeClassName="text-brandPink"
    >
      {title}
    </Link>
  )
}

export default NavLink

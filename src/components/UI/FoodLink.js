import React from "react"
import { Link } from "gatsby"

const FoodLink = ({ title, url }) => {
  return (
    <Link
      to={url}
      className="font-bebas text-[60px] leading-[60px] lg:text-[70px] lg:leading-[70px] text-brandLight hover:text-brandPink transition-colors"
      activeClassName="text-brandPink"
    >
      {title}
    </Link>
  )
}

export default FoodLink

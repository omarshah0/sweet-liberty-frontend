import React from "react"
import { Link } from "gatsby"

const FoodLink = ({ title, url }) => {
  return (
    <Link
      to={url}
      className="font-bebas text-[70px] leading-[70px] text-brandLight hover:text-brandPink transition-colors"
    >
      {title}
    </Link>
  )
}

export default FoodLink

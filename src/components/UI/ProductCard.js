import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductCard = ({ title, price, image, alt, slug }) => {
  return (
    <div className="max-w-[338px] font-bebas mx-auto">
      <div className="group relative mb-8 shadow-product-card bg-gray-200 rounded-3xl p-2 overflow-hidden">
        <Link to={`/shop/${slug}`} className="block">
          <GatsbyImage image={image} alt={alt} className="h-[338px]" />
        </Link>
        <div className="bg-white/70 absolute bottom-[-100%] group-hover:bottom-0 left-0 right-0 min-h-[72px] py-3 grid place-items-center transition-all duration-150">
          <button className="block bg-brandPink font-sourceSansProBold text-base py-3 min-w-[196px] text-center text-white rounded-xl">
            Add to Card
          </button>
        </div>
      </div>
      <h2 className="block mb-2 text-brandDark text-[50px] leading-none">
        <Link to={`/shop/${slug}`}>{title}</Link>
      </h2>
      <span className="block text-brandPink text-[33px]">
        ${parseInt(price)}
      </span>
    </div>
  )
}

export default ProductCard

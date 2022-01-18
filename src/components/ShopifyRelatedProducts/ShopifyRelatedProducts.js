import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ShopifyRelatedProducts = ({ className, relatedArticles }) => {
  return (
    <div className={`font-bebas ${className}`}>
      <h2 className="text-brandPink text-4xl">Related Products</h2>
      <p className="text-brandDark text-lg mb-5">
        Quisque pretium dolor turpis, quis blandit turpis
      </p>
      <div className="mb-8 flex justify-between flex-wrap">
        {relatedArticles.map(article => (
          <ProductCard
            title={article.title}
            price={article.priceRangeV2.minVariantPrice.amount}
            handle={article.handle}
            image={
              article.featuredImage.localFile.childImageSharp.gatsbyImageData
            }
            alt={article.featuredImage.altText || "Sweet Liberty Shop"}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopifyRelatedProducts

const ProductCard = ({ image, title, price, handle, className, alt }) => {
  return (
    <Link className={`block font-bebas ${className}`} to={`/shop/${handle}`}>
      <div className="w-[332px] h-[332px] rounded-3xl overflow-hidden mb-7 bg-gray-300 grid place-items-center shadow-2xl">
        <GatsbyImage image={image} alt={alt} />
      </div>
      <p className="text-[50px] leading-none text-brandDark">{title}</p>
      <span className="block text-[33px] text-brandPink">${price}</span>
    </Link>
  )
}

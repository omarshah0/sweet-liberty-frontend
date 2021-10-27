import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ShopifyProducImages = ({
  featuredImage,
  variantsThumbnails,
  className,
}) => {
  const [featImage, setFeatImage] = useState({
    image: featuredImage.localFile.childImageSharp.gatsbyImageData,
    altText: featuredImage.localFile.altText,
  })
  const setFeaturedImage = (image, altText) => {
    setFeatImage({ image, altText })
  }

  return (
    <div className={`${className} flex`}>
      <div className="bg-gray-200 w-[582px] h-[582px] py-8 order-2">
        <GatsbyImage
          image={featImage.image}
          alt={featImage.altText}
          className="w-full h-full"
        />
      </div>
      <div className="order-1 mr-3">
        <div
          className="bg-gray-200 w-[109px] h-[109px] py-2 mb-[22px] cursor-pointer"
          onClick={() =>
            setFeaturedImage(
              featuredImage.localFile.childImageSharp.gatsbyImageData,
              featuredImage.localFile.altText
            )
          }
          role="button"
          tabIndex="0"
        >
          <GatsbyImage
            image={featuredImage.localFile.childImageSharp.gatsbyImageData}
            alt={featuredImage.localFile.altText}
            className="w-full h-full"
          />
        </div>
        {React.Children.toArray(
          variantsThumbnails.map(variant => {
            return (
              variant.image && (
                <div
                  className="bg-gray-200 w-[109px] h-[109px] py-2 mb-[22px] cursor-pointer"
                  onClick={() =>
                    setFeaturedImage(
                      variant.image.localFile.childImageSharp.gatsbyImageData,
                      variant.image.localFile.altText
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <GatsbyImage
                    image={
                      variant.image.localFile.childImageSharp.gatsbyImageData
                    }
                    alt={variant.image.localFile.altText}
                    className="w-full h-full"
                  />
                </div>
              )
            )
          })
        )}
      </div>
      <div></div>
    </div>
  )
}

export default ShopifyProducImages

import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ShopifyProducImages = ({
  featuredImage,
  variantsThumbnails,
  className,
}) => {
  const carouselRef = useRef(null)
  // const [scrollHeight, setScrollHeight] = useState(0)
  const [featImage, setFeatImage] = useState({
    image: featuredImage.localFile.childImageSharp.gatsbyImageData,
    altText: featuredImage.localFile.altText,
  })
  const setFeaturedImage = (image, altText) => {
    setFeatImage({ image, altText })
  }

  const scrollDown = () => {
    const element = carouselRef.current
    const maxScrollPosition = element.scrollHeight - element.clientHeight
    const scrolledValue = element.scrollTop
    if (scrolledValue >= maxScrollPosition) return
    element.scroll({
      top: scrolledValue + 110,
      behavior: "smooth",
    })
  }

  const scrollUp = () => {
    const element = carouselRef.current
    const scrolledValue = element.scrollTop
    if (scrolledValue <= 0) return
    element.scroll({
      top: scrolledValue - 110,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const element = carouselRef.current
    console.log("Elem is ", carouselRef)
    console.log("Scroll Height is ", element.scrollHeight)
    console.log("Client Height is ", element.clientHeight)
    const maxScrollPosition = element.scrollHeight - element.clientHeight
    console.log("Max Position is ", maxScrollPosition)
  })

  return (
    <div className={`${className} md:flex`}>
      <div className="bg-gray-200 mb-3 md:mb-0 md:w-[582px] md:h-[582px] order-2">
        <GatsbyImage
          image={featImage.image}
          alt={featImage.altText}
          className="w-full h-full"
        />
      </div>
      <div className="relative md:mr-3">
        <div
          className="order-1 flex md:flex-col md:h-[582px] overflow-auto"
          ref={carouselRef}
        >
          <div
            className="bg-gray-200 w-[109px] h-[109px] mb-3 cursor-pointer flex-shrink-0 mr-1 md:mr-0"
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
            variantsThumbnails.map((variant, index) => {
              const isLastItem = index === variantsThumbnails.length - 1
              return (
                variant.image && (
                  <div
                    className={`bg-gray-200 w-[109px] h-[109px] cursor-pointer flex-shrink-0 ${
                      isLastItem ? "ml-1 mr-0 md:ml-0" : "mx-1 md:mx-0 mb-3"
                    }`}
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
        <button
          className="absolute top-0 left-0 right z-20 w-full bg-red-500 text-white"
          onClick={scrollUp}
        >
          Scroll Up
        </button>
        <button
          className="absolute bottom-0 left-0 right z-20 w-full bg-red-500 text-white"
          onClick={scrollDown}
        >
          Scroll Down
        </button>
      </div>
    </div>
  )
}

export default ShopifyProducImages

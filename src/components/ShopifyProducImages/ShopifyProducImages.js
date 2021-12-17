import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { ImageDownArrow } from "../UI/Arrows"

const ShopifyProducImages = ({
  featuredImage,
  variantsThumbnails,
  className,
}) => {
  const carouselRef = useRef(null)
  const [showScrollButton, setShowScrollButton] = useState({
    up: true,
    down: true,
  })
  const [isScrollable, setIsScrollable] = useState(false)
  const [featImage, setFeatImage] = useState({
    image: featuredImage.localFile.childImageSharp.gatsbyImageData,
    altText: featuredImage.localFile.altText,
  })
  const setFeaturedImage = (image, altText) => {
    setFeatImage({ image, altText })
  }

  const scrollDown = () => {
    if (showScrollButton.down) {
      setShowScrollButton({ up: true, down: true })
    }
    const element = carouselRef.current
    const isVerticalScroll = element.scrollHeight - element.clientHeight !== 0
    const isHorizontalScroll = element.scrollWidth - element.clientWidth !== 0
    const maxScrollPosition = isVerticalScroll
      ? element.scrollHeight - element.clientHeight
      : element.scrollWidth - element.clientWidth
    const scrolledValue = isVerticalScroll
      ? element.scrollTop
      : element.scrollLeft
    if (scrolledValue >= maxScrollPosition)
      setShowScrollButton({ up: true, down: false })
    if (isVerticalScroll) {
      element.scroll({
        top: scrolledValue + 110,
        behavior: "smooth",
      })
    }
    if (isHorizontalScroll) {
      element.scroll({
        left: scrolledValue + 110,
        behavior: "smooth",
      })
    }
  }

  const scrollUp = () => {
    if (showScrollButton.up) {
      setShowScrollButton({ up: true, down: true })
    }
    const element = carouselRef.current
    const isVerticalScroll = element.scrollHeight - element.clientHeight !== 0
    const isHorizontalScroll = element.scrollWidth - element.clientWidth !== 0
    const scrolledValue = isVerticalScroll
      ? element.scrollTop
      : element.scrollLeft
    if (scrolledValue <= 0)
      return setShowScrollButton({ up: false, down: true })
    if (isVerticalScroll) {
      element.scroll({
        top: scrolledValue - 110,
        behavior: "smooth",
      })
    }
    if (isHorizontalScroll) {
      element.scroll({
        left: scrolledValue - 110,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const element = carouselRef.current
    const isVerticalScroll = element.scrollHeight - element.clientHeight !== 0
    const isHorizontalScroll = element.scrollWidth - element.clientWidth !== 0
    if (isVerticalScroll || isHorizontalScroll) {
      setIsScrollable(true)
    }
  }, [])

  return (
    <div className={`${className} md:flex mb-3`}>
      <div className="bg-gray-200 mb-3 md:mb-0 md:w-[582px] order-2">
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
            className="bg-gray-200 w-[109px] h-[109px] cursor-pointer flex-shrink-0 mr-1 md:mr-0 md:mb-3"
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
                      isLastItem ? "ml-1 mr-0 md:ml-0" : "mx-1 md:mx-0 md:mb-3"
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
        {showScrollButton.up && isScrollable && (
          <button
            className="absolute top-0 left-0 right z-[1] h-full md:h-auto md:w-full text-white bg-gradient-to-r md:bg-gradient-to-b from from-gray-200 to-white"
            onClick={scrollUp}
          >
            <ImageDownArrow className="w-5 h-5 fill-current text-gray-500 grid m-auto tranform rotate-90 md:rotate-180" />
          </button>
        )}
        {showScrollButton.down && isScrollable && (
          <button
            className="absolute bottom-0 right-0 md:left-0 right z-[1] h-full md:h-auto md:w-full text-white bg-gradient-to-l md:bg-gradient-to-t from from-gray-200 to-white"
            onClick={scrollDown}
          >
            <ImageDownArrow className="w-5 h-5 fill-current text-gray-500 grid m-auto tranform -rotate-90 md:rotate-0" />
          </button>
        )}
      </div>
    </div>
  )
}

export default ShopifyProducImages

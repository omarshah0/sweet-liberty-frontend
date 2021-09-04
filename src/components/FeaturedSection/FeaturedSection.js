import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

import { SlideOne, SlideTwo, SlideThree } from "./Slides"

const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index)
    }
  }

  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide + 1)
  }

  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide - 1)
  }

  return (
    <section className="relative bg-gray-400">
      <div className="hidden md:block pointer-events-none">
        <StaticImage
          src="../../assets/featured_leaf.png"
          className="absolute -top-56 right-0 z-20"
        />
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
      >
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Carousel>
      <div className="inline-flex absolute bottom-12 right-3 md:bottom-28 md:right-40">
        <button
          onClick={prevSlideHandler}
          className={`w-16 h-16 font-cantataOne rounded-full grid place-items-center border-4 transition-all ${
            currentSlide === 0
              ? "border-brandDark text-brandDark"
              : currentSlide === 1
              ? "border-white text-white"
              : currentSlide === 2
              ? "border-brandLight text-brandLight"
              : ""
          } text-5xl mr-1`}
        >
          <span className="relative right-1 bottom-1">{"<"}</span>
        </button>
        <button
          onClick={nextSlideHandler}
          className={`w-16 h-16 font-cantataOne rounded-full grid place-items-center border-4 transition-all ${
            currentSlide === 0
              ? "border-brandDark text-brandDark"
              : currentSlide === 1
              ? "border-white text-white"
              : currentSlide === 2
              ? "border-brandLight text-brandLight"
              : ""
          } text-5xl mr-4`}
        >
          <span className="relative left-1 bottom-1">{">"}</span>
        </button>
      </div>
    </section>
  )
}

export default FeaturedSection

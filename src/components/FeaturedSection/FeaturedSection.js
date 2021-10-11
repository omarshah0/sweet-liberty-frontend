import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { SlideOne, SlideTwo, SlideThree } from "./Slides"

const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlideHandler = () => {
    if (currentSlide === 2) return
    setCurrentSlide(currentSlide + 1)
  }

  const prevSlideHandler = () => {
    if (currentSlide === 0) return
    setCurrentSlide(currentSlide - 1)
  }

  return (
    <section
      className={`relative py-20 ${
        currentSlide === 0
          ? "bg-brandLight"
          : currentSlide === 1
          ? "bg-brandPink"
          : currentSlide === 2
          ? "bg-brandDark"
          : null
      }`}
    >
      <div className="hidden md:block pointer-events-none absolute -top-56 right-0 z-50 pointer-events-none">
        <StaticImage
          src="../../assets/featured_leaf.png"
          alt="Featured Leaf"
          placeholder="blurred"
        />
      </div>
      <SlideOne
        className={currentSlide === 0 ? "" : "hidden"}
        isVisible={currentSlide === 0}
      />
      <SlideTwo
        className={currentSlide === 1 ? "" : "hidden"}
        isVisible={currentSlide === 1}
      />
      <SlideThree
        className={currentSlide === 2 ? "" : "hidden"}
        isVisible={currentSlide === 2}
      />

      <div className="inline-flex absolute bottom-12 right-3 md:bottom-28 md:right-40 z-[60]">
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

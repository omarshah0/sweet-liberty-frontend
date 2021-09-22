import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../../UI"

const SlideOne = ({ className }) => {
  return (
    <div
      className={`bg-brandLight pt-20 pb-48 md:pb-28 xl:pt-36 relative ${className}`}
    >
      <Container>
        <div className="xl:px-12 relative">
          <h2 className="font-bebas text-brandDark mb-8 md:mb-20 text-5xl xl:text-8xl text-left">
            Featured Cocktail
          </h2>

          <div>
            <h3 className="relative text-center font-bebas xl:leading-none transition-all duration-1000 left-0">
              <span className="absolute -top-6 md:-top-10 md:left-24 text-7xl xl:text-heavy-comp text-brandPink z-[5]">
                The
              </span>
              <span className="relative">
                <span className="text-brandDark text-9xl xl:text-heavy relative">
                  Florida
                </span>
              </span>
              <span className="absolute -bottom-4 right-0 xl:bottom-0 xl:right-10 text-7xl xl:text-heavy-comp text-brandPink z-[5]">
                Cocktail
              </span>
            </h3>
            <p className="font-bebas text-brandDark text-left md:relative bottom-16  xl:text-5xl inline-block">
              Bacardi anejo • fresh lime
              <br /> fluffy pineapple • creme de menthe
            </p>
          </div>

          <div className="absolute top-0 transform translate-x-20 md:-top-12 md:right-24">
            <StaticImage
              src="../../../assets/cocktail_glass.png"
              alt="The Florida Cocktail"
              placeholder="blurred"
              className="rotate-glass"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SlideOne

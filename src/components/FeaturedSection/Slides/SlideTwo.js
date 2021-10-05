import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../../UI"

const SlideTwo = ({ className }) => {
  return (
    <Container className={`${className} h-screen grid place-items-center`}>
      <div className="relative">
        <h2 className="font-bebas text-brandLight mb-8 md:mb-20 text-5xl xl:text-8xl text-left">
          Featured Cocktail
        </h2>

        <div>
          <h3 className="relative text-center font-bebas xl:leading-none transition-all duration-1000 left-0">
            <span className="absolute -top-6 left-0 md:-top-8 md:left-60 text-7xl xl:text-heavy-comp text-white z-[5]">
              The
            </span>
            <span className="relative">
              <span className="text-brandLight text-9xl xl:text-heavy relative">
                Miami
              </span>
            </span>
            <span className="absolute -bottom-4 md:bottom-0 right-0 xl:right-60 text-7xl xl:text-heavy-comp text-white z-0 md:z-[5]">
              Martini
            </span>
          </h3>
          <p className="font-bebas text-brandLight text-left xl:text-5xl inline-block relative md:bottom-16">
            FORDS GIN • NOILLY PRAT • SEA SALT •
            <br />
            BLUE • LEMON GAS EXPLOSION
          </p>
        </div>

        <div className="absolute top-0 transform translate-x-20 md:-top-12 md:right-24">
          <StaticImage
            src="../../../assets/blue_cocktail.png"
            alt="The Florida Cocktail"
            placeholder="blurred"
            className="z-30"
          />
        </div>
      </div>
    </Container>
  )
}

export default SlideTwo

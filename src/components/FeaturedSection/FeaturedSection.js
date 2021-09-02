import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

import { SlideOne } from "./Slides"
import { Container } from "../UI"

const FeaturedSection = () => {
  return (
    <section className="relative bg-brandLight pt-36">
      <StaticImage
        src="../../assets/featured_leaf.png"
        className="pointer-events-none absolute -top-56 right-0 z-20"
      />
      <Container>
        <Carousel>
          <SlideOne />
          <SlideOne />
          <SlideOne />
        </Carousel>
      </Container>
    </section>
  )
}

export default FeaturedSection

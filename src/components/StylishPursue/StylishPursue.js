import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const StylishPursue = () => {
  return (
    <section className="lg:-mt-16">
      <StaticImage
        src="../../assets/pursue_happyness.png"
        alt="Pursue Happiness"
        placeholder="blurred"
        className="w-full"
      />
    </section>
  )
}

export default StylishPursue

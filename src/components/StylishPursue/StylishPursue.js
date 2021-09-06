import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const StylishPursue = () => {
  return (
    <section className="-mt-12">
      <StaticImage
        src="../../assets/pursue_happyness.png"
        alt="Pursue Happiness"
        placeholder="blurred"
        layout="fullWidth"
      />
    </section>
  )
}

export default StylishPursue

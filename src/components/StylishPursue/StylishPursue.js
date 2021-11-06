import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Lottie from "react-lottie"
import { InView } from "react-intersection-observer"

import NeonLight from "../../assets/Json/neon_light.json"

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: NeonLight,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const StylishPursue = () => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => (
        <section
          className="pointer-events-none relative clip-mask -top-5 md:-top-10 lg:-top-16 xl:-top-24"
          ref={ref}
        >
          <div className="hidden md:block absolute top-72 right-0 flip z-10 pointer-events-none">
            <StaticImage
              src="../../assets/pursue_leaf.png"
              placeholder="blurred"
            />
          </div>
          <Lottie options={defaultOptions} isStopped={!inView} />
        </section>
      )}
    </InView>
  )
}

export default StylishPursue

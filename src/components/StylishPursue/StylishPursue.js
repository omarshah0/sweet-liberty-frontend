import React from "react"
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
        <section className="pointer-events-none relative" ref={ref}>
          <Lottie options={defaultOptions} isStopped={!inView} />
        </section>
      )}
    </InView>
  )
}

export default StylishPursue

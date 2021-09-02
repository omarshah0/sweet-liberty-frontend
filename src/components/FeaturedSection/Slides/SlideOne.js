import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

const SlideOne = () => {
  const Stroked = styled(motion.span)`
    -webkit-text-stroke: 2px #257972;
    -webkit-text-fill-color: transparent;
    z-index: 20;
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 6px #257972;
    }
  `
  return (
    <div className="xl:px-12 relative">
      <h2 className="font-bebas text-brandDark mb-20 xl:text-8xl text-left">
        Featured Cocktail
      </h2>
      <InView threshold="0.45" triggerOnce>
        {({ ref, inView }) => (
          <div>
            <h3
              className="relative text-center font-bebas xl:leading-none transition-all duration-1000 left-0"
              ref={ref}
            >
              <span className="absolute -top-10 left-24 text-heavy-comp text-brandPink z-30">
                The
              </span>
              <span className="relative">
                <motion.span
                  className="text-brandDark xl:text-heavy relative"
                  initial={{ left: "100%" }}
                  animate={inView ? { left: "0%" } : { left: "100%" }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                >
                  Florida
                  <Stroked className="xl:text-heavy absolute left-0">
                    Florida
                  </Stroked>
                </motion.span>
              </span>
              <span className="absolute bottom-0 right-10 text-heavy-comp text-brandPink z-30">
                Cocktail
              </span>
            </h3>
            <p className="font-bebas text-brandDark text-left text-5xl inline-block relative bottom-16 -left-64">
              Bacardi anejo • fresh lime
              <br /> fluffy pineapple • creme de menthe
            </p>
          </div>
        )}
      </InView>
      <div className="absolute -top-12 right-24">
        <StaticImage
          src="../../../assets/cocktail_glass.png"
          alt="The Florida Cocktail"
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default SlideOne

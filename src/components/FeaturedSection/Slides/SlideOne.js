import React, { useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { Container } from "../../UI"
import TestVideo from "../../../assets/videos/test.mp4"

const SlideOne = ({ className, isVisible }) => {
  const videoRef = useRef(null)
  useEffect(() => {
    videoRef.current.play()
  }, [isVisible])
  return (
    <Container className={`${className} h-screen grid place-items-center`}>
      <div className="relative">
        <h2 className="font-bebas text-brandDark mb-8 md:mb-20 text-5xl xl:text-8xl text-left">
          Featured Cocktail
        </h2>

        <div>
          <h3 className="relative text-center font-bebas xl:leading-none transition-all duration-1000 left-0">
            <motion.span
              className="absolute -top-6 md:-top-10 md:left-24 text-7xl xl:text-heavy-comp text-brandPink z-[5]"
              initial={{ x: "-100vw" }}
              animate={{ x: "0vw" }}
              transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
              The
            </motion.span>
            <motion.span
              className="relative inline-block text-brandDark text-9xl xl:text-heavy"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.9],
              }}
            >
              Florida
            </motion.span>
            <motion.span
              className="absolute -bottom-4 right-0 xl:bottom-0 xl:right-10 text-7xl xl:text-heavy-comp text-brandPink z-[5]"
              initial={{ x: "100vw" }}
              animate={{ x: "0vw" }}
              transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
              Cocktail
            </motion.span>
          </h3>
          <p className="font-bebas text-brandDark text-left md:relative bottom-16  xl:text-5xl inline-block">
            Bacardi anejo • fresh lime
            <br /> fluffy pineapple • creme de menthe
          </p>
        </div>
        <motion.video
          src={TestVideo}
          className="absolute top-0 left-0 pointer-events-none"
          ref={videoRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
        />

        {/* <motion.div
              className="absolute top-0 transform translate-x-20 md:-top-12 md:right-24"
              initial={{ rotateY: 500, scale: 0, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
              <StaticImage
                src="../../../assets/cocktail_glass.png"
                alt="The Florida Cocktail"
                placeholder="blurred"
              />
            </motion.div> */}
      </div>
    </Container>
  )
}

export default SlideOne

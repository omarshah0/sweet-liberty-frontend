import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { TitleSolid, TitleStroke } from "../UI"

const Hero = () => {
  return (
    <div className="py-10 relative lg:min-h-screen lg:-mt-24 overflow-hidden lg:grid place-items-center xl:block">
      <motion.div
        className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full md:w-3/4 lg:w-auto"
        initial={{ opacity: 0, y: "-100%", x: "-50%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ ease: "easeOut", duration: 2, delay: 1 }}
      >
        <StaticImage
          src="../../assets/hero-center.png"
          alt="Sweet Liberty"
          placeholder="blurred"
        />
      </motion.div>
      <h1 className="font-bebas text-center md:text-left text-8xl md:text-hero text-brandLight leading-hero transform lg:mt-20">
        <motion.span
          className="inline-block transform"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 1.5 }}
        >
          <TitleSolid className="inline-block transform xl:translate-x-80">
            Life
          </TitleSolid>
          <br />
          <TitleSolid className="inline-block transform xl:translate-x-24">
            Liberty
          </TitleSolid>
          <br />
          <TitleStroke className="inline-block transform xl:translate-x-56">
            &amp; THE
          </TitleStroke>
        </motion.span>
        <br />
        <motion.span
          className="inline-block transform xl:ml-hero xl:-mt-6"
          initial={{ x: "100vw" }}
          animate={{ x: "0%" }}
          transition={{ ease: "linear", duration: 1.5 }}
        >
          <TitleSolid>PURSUIT</TitleSolid> <TitleStroke>OF</TitleStroke>
          <br />
          <TitleSolid>HAPPY HOUR</TitleSolid>
        </motion.span>
      </h1>
    </div>
  )
}

export default Hero

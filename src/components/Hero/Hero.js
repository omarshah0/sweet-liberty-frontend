import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { Container, TitleSolid, TitleStroke, Scroller } from "../UI"

const Hero = () => {
  return (
    <section className="mb-24 lg:mb-52 relative">
      <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
        <StaticImage
          src="../../assets/hero_leaf_left.png"
          alt="Sweet Liberty Leaf"
          placeholder="blurred"
          className="mt-60"
        />
        <StaticImage
          src="../../assets/hero_leaf_right.png"
          alt="Sweet Liberty Leaf"
          placeholder="blurred"
          className=""
        />
      </div>
      <Container>
        <div className="py-10 relative lg:min-h-screen lg:-mt-28 lg:grid place-items-center xl:block">
          <div
            className="absolute top-24 md:top-16 lg:top-[26rem] xl:top-40 left-2/4 transform -translate-x-2/4 w-full md:w-3/4 lg:w-auto"
            initial={{ opacity: 0, y: "-100%", x: "-50%" }}
            animate={{ opacity: 1, y: "-50%" }}
            transition={{ ease: "easeOut", duration: 2, delay: 1 }}
          >
            <StaticImage
              src="../../assets/hero-center.png"
              alt="Sweet Liberty"
              placeholder="blurred"
              className="transform hero-image-animation"
            />
          </div>
          <h1 className="font-bebas text-center md:text-left text-8xl md:text-hero text-brandLight leading-hero transform lg:mt-20">
            {/* Working Block */}
            <span
              className="inline-block hero-text-animation-left"
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
            </span>
            <br />
            <span
              className="inline-block transform xl:ml-hero xl:-mt-6 hero-text-animation-right"
              initial={{ x: "100vw" }}
              animate={{ x: "0%" }}
              transition={{ ease: "linear", duration: 1.5 }}
            >
              <TitleSolid>PURSUIT</TitleSolid> <TitleStroke>OF</TitleStroke>
              <br />
              <TitleSolid>HAPPY HOUR</TitleSolid>
            </span>
          </h1>
          <motion.div
            className="inline-flex items-center  p-6 absolute ml-8 -mt-2 md:-bottom-8 lg:bottom-36 md:-ml-4 xl:ml-32"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
          >
            <Link
              to="/reservation"
              className="font-bebas font-bold text-white text-5xl "
            >
              Reservations
            </Link>
            <span className="bg-white text-brandDark uppercase text-resky font-bold p-1 ml-3 mb-1 tracking-widest">
              Resy
            </span>
          </motion.div>
          <Scroller />
        </div>
      </Container>
    </section>
  )
}

export default Hero

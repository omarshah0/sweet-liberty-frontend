import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { TitleSolid, TitleStroke, Scroller } from "../UI"

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
      <div className="pl-6 md:pl-10 lg:pl-12 max-w-screen-2xl mx-auto relative">
        <div
          className="w-[285px] md:w-[516px] absolute top-0 md:top-10 right-0 md:left-0 md:mx-auto"
          initial={{ opacity: 0, y: "-100%", x: "-50%" }}
          animate={{ opacity: 1, y: "-50%" }}
          transition={{ ease: "easeOut", duration: 2, delay: 1 }}
        >
          <StaticImage
            src="../../assets/hero-center.png"
            alt="Sweet Liberty"
            placeholder="blurred"
            className="transform hero-image-animation w-full"
          />
        </div>
        <h1 className="font-bebas text-[75px] md:text-hero text-brandLight leading-hero transform pt-24 md:pt-0 mb-[75px] md:mb-[30px] sm-max:overflow-auto">
          {/* Working Block */}
          <span
            className="inline-block hero-text-animation-left mb-[30px] lg:mb-[50px] xl:mb-0"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ ease: "linear", duration: 1.5 }}
          >
            <TitleSolid className="inline-block transform translate-x-[5.8rem] xl:translate-x-80">
              Life
            </TitleSolid>
            <br />
            <TitleSolid className="inline-block transform xl:translate-x-24">
              Liberty
            </TitleSolid>
            <br />
            <TitleStroke className="inline-block transform translate-x-[3.3rem] xl:translate-x-56">
              &amp; THE
            </TitleStroke>
          </span>
          <br />
          <span
            className="inline-block pr-6 md:pr-10 lg:pr-12 transform lg:translate-x-[15.5rem] xl:translate-x-[33rem] xl:translate-y-[-38px] sm-max:float-right"
            initial={{ x: "100vw" }}
            animate={{ x: "0%" }}
            transition={{ ease: "linear", duration: 1.5 }}
          >
            <TitleSolid>PURSUIT</TitleSolid>
            <TitleStroke>OF</TitleStroke>
            <br />
            <TitleSolid>HAPPY HOUR</TitleSolid>
          </span>
        </h1>
        <motion.div
          className="flex items-center xl:absolute xl:left-[150px] xl:bottom-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.7 }}
        >
          <Link
            to="/reservation"
            className="font-bebas md:font-bold text-white text-[32px] md:text-5xl"
          >
            Reservations
          </Link>
          <span className="bg-white text-brandDark uppercase text-resky font-bold px-1 ml-3 mb-1 tracking-widest">
            Resy
          </span>
        </motion.div>
        <Scroller />
      </div>
    </section>
  )
}

export default Hero

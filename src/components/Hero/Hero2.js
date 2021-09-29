import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { Container, TitleSolid, TitleStroke, Scroller } from "../UI"

const Hero2 = () => {
  return (
    <section className="bg-brandDark max-w-[1440px] mx-auto mb-[220px] md:mb-[193px] lg:mb-[300px]">
      <div className="w-full relative pl-[17px] pr-[17px] lg:pl-[97px] lg:pr-0 max-w-[1220px]">
        <motion.div4
          className="absolute top-0 right-0 md:top-[55px] lg:top-[70px] md:left-[180px] lg:left-[462px] w-[270px] h-[360px] md:w-[495px] md:h-[625px] lg:w-[516px] lg:h-[652px] z-[1]"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "backOut" }}
        >
          <StaticImage
            src="../../assets/hero-center.png"
            alt="Sweet Liberty"
            placeholder="blurred"
            className="w-full h-full"
          />
        </motion.div4>
        <div className="relative">
          <h1 className="text-[75px] md:text-[125px] lg:text-[180px] md:leading-[92px] lg:leading-[133px] leading-[65px] text-brandLight font-bebas relative z-[2] pt-[53px] md:pt-2 overflow-hidden mb-[50px] md:mb-0">
            <motion.span
              className="inline-block mb-[30px] md:mb-[290px] lg:mb-0 lg:w-[450px]"
              initial={{ x: "-100vw" }}
              animate={{ x: "0" }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
              <TitleSolid className="float-right">Life</TitleSolid>
              <br />
              <TitleSolid>Liberty </TitleSolid>
              <br />
              <TitleStroke className="float-right">&amp; THE</TitleStroke>
            </motion.span>
            <br />
            <motion.span
              className="lg:mt-[-6px] float-right"
              initial={{ x: "100vw" }}
              animate={{ x: "0" }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
              <TitleSolid>PURSUIT</TitleSolid> <TitleStroke>OF</TitleStroke>
              <br />
              <TitleSolid>HAPPY HOUR</TitleSolid>
            </motion.span>
          </h1>
          <motion.div
            className="flex items-center absolute left-0 bottom-0"
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
        </div>
      </div>
    </section>
  )
}

export default Hero2

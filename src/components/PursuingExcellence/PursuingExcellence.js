import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

import { TitleSolid, TitleStroke } from "../UI"
import Brands from "./Brands"
import Awards from "./Awards"

import {
  SpritedAwards,
  BestBarsAwards,
  NewTimesAwards,
  TheDailyMealAwards,
  TimeOutAwards,
} from "./Data"

const PursuingExcellence = () => {
  const [data, setData] = useState(SpritedAwards)

  const dataHandler = key => {
    if (key === "img1") {
      return setData(SpritedAwards)
    }
    if (key === "img2") {
      return setData(BestBarsAwards)
    }
    if (key === "img3") {
      return setData(TimeOutAwards)
    }
    if (key === "img4") {
      return setData(NewTimesAwards)
    }
    if (key === "img5") {
      return setData(TheDailyMealAwards)
    }
  }

  return (
    <section className="relative pb-60 md:pb-44">
      <div className="mx-auto max-w-1440">
        <div className="absolute top-[-230px] left-0">
          <StaticImage
            src="../../assets/pursue_leaf.png"
            alt="Pursue Happiness"
            placeholder="blurred"
            className="w-[280px]"
          />
        </div>
        <div className="relative lg:flex lg:flex-col md:mb-80 lg:mb-64">
          <InView threshold={0.8} triggerOnce>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className="overflow-hidden pl-[20px] pr-[20px] mb-6 md:pl-[140px] md:pr-[45px] md:mb-16 lg:w-[1040px] lg:pl-[167px] lg:order-1"
              >
                <motion.h2
                  className="font-bebas text-[60px] leading-[60px] text-brandLight md:text-[80px] md:leading-[65px] lg:text-[116px] lg:leading-[119px]"
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5, ease: "linear" }}
                >
                  This is sweet liberty. Enjoyed by tourists, loved by locals.
                </motion.h2>
              </div>
            )}
          </InView>
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className="pr-[20px] md:pl-[140px] md:pr-[45px] lg:w-[970px] lg:pl-[167px] lg:pr-0 lg:order-3 lg:mb-[45px]"
              >
                <motion.p
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={
                    inView
                      ? { opacity: 1, x: "0vw" }
                      : { opacity: 0, x: "-100vw" }
                  }
                  transition={{ duration: 0.7, ease: "linear" }}
                  className="font-bebas pl-[20px] text-base leading-[36px] text-brandLight md:text-[26px] md:leading-[50px]"
                >
                  Situated in the up-and-coming Collins Park area alongside the
                  Bass Art Museum, Sweet Liberty offers guests world-class
                  cocktails and creative American food. Conceived and operated
                  by award-winning bartender John Lermayer and Dan Binkiewicz
                  along with restaurateurS David Martinez and MICHELLE
                  BERNSTEIN, Sweet Liberty brings an intelligent selection of
                  food and drink from sophisticated to simple to downright
                  delicious.
                </motion.p>
              </div>
            )}
          </InView>
          <div className="relative bg-happyHour w-[168px] ml-auto mr-[30px] top-12 z-[1] md:w-[463px] md:z-[0] lg:hidden">
            <StaticImage
              src="../../assets/hero-center.png"
              alt="Sweet Liberty Shirt"
              className="w-full"
            />
          </div>
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className="relative lg:order-2 lg:self-end lg:mr-[126px] lg:mb-[50px]"
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: "100vw" }}
                  animate={
                    inView
                      ? { opacity: 1, x: "0vw" }
                      : { opacity: 0, x: "100vw" }
                  }
                  transition={{ duration: 0.7, ease: "linear" }}
                >
                  <StaticImage
                    src="../../assets/pursue-dsc.png"
                    alt="Sweet Liberty Pursuing Excellence"
                    placeholder="blurred"
                    className="w-[355px] md:w-[631px] ml-[30px] lg:w-[1005px]"
                  />
                </motion.span>
                <StaticImage
                  src="../../assets/hero_leaf_left.png"
                  alt="Sweet Liberty Leaf"
                  className="w-[165px] flip absolute bottom-[-120px] right-0 md:hidden"
                />
              </div>
            )}
          </InView>
          <InView threshold={0.5} triggerOnce>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className="hidden lg:flex lg:justify-end order-4 lg:mr-[126px]"
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.4, ease: "linear" }}
                >
                  <StaticImage
                    src="../../assets/Sweet_Liberty_Team.png"
                    alt="Michy and Davide"
                    className="lg:w-[504px] lg:h-[540px] lg:mr-[41px]"
                  />
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.4, ease: "linear" }}
                >
                  <StaticImage
                    src="../../assets/Michy_David.png"
                    alt="Sweet Liberty Team"
                    className="w-[423px] lg:h-[447px]"
                  />
                </motion.span>
              </div>
            )}
          </InView>
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <h2
                ref={ref}
                className="absolute bottom-[-90px] left-0 font-bebas px-[20px] text-[60px] leading-none text-brandLight md:text-[125px] md:leading-[100px] md:bottom-[-280px] lg:bottom-[-155px] lg:left-[265px] lg:w-[515px]"
              >
                <motion.span
                  initial={{ x: "-100vw" }}
                  animate={inView ? { x: "0vw" } : { x: "-100vw" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleSolid>Pursuing</TitleSolid>{" "}
                </motion.span>
                <motion.span
                  initial={{ x: "100vw" }}
                  animate={inView ? { x: "0vw" } : { x: "100vw" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleStroke strokeWidth="1px">Excellence</TitleStroke>
                </motion.span>
              </h2>
            )}
          </InView>
        </div>
        <Brands className="mb-12" setData={dataHandler} />
        <Awards data={data} />
      </div>
    </section>
  )
}

export default PursuingExcellence

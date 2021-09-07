import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"
import styled from "styled-components"

const DoGoodWork = () => {
  const Title = styled(motion.span)`
    -webkit-text-stroke: 2px #ef5da8;
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 4px #ef5da8;
      -webkit-text-fill-color: transparent;
    }
  `
  const heading = "Our greatest award is being able to open every day"
  return (
    <section className="bg-black pt-20 pb-24">
      <div className="pl-6 md:pl-10 lg:pl-36 max-w-screen-2xl mx-auto relative">
        <InView threshold={0.1} triggerOnce>
          {({ ref, inView }) => (
            <div className="relative w-9/12" ref={ref}>
              <motion.h2
                className="pt-[520px] text-brandPink font-bebas text-merch leading-none relative"
                initial={{ x: "-100vw" }}
                animate={inView ? { x: "0vw" } : { x: "-100vw" }}
                transition={{ duration: 1.5, ease: "linear" }}
              >
                {heading}
              </motion.h2>
              <Title
                className="pt-[520px] text-brandPink font-bebas text-merch leading-none absolute inset-0 z-20"
                initial={{ x: "-100vw" }}
                animate={inView ? { x: "0vw" } : { x: "-100vw" }}
                transition={{ duration: 1.5, ease: "linear" }}
              >
                {heading}
              </Title>
              <span className="block text-brandLight font-bebas text-[68px] text-right">
                - John Lermayer
              </span>
            </div>
          )}
        </InView>
        <div className="pr-6 md:pr-10 lg:pr-36 max-w-screen-2xl mx-auto mt-[195px]">
          <div className="mb-[60px]">
            <Link
              to="/work"
              className="block font-frankRuhlLibre font-bold text-brandLight text-6xl mt-auto text-center"
            >
              Do Good Work{" "}
              <span className="w-16 h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandLight text-brandLight text-5xl mr-1">
                <span className="relative left-1 bottom-1">{">"}</span>
              </span>
            </Link>
          </div>
          <div className="font-bebas text-[26px] text-brandLight text-center">
            <span>
              2015 BEST NEW COCKTAIL BAR <br />
              2016 BEST COCKTAIL BAR
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <StaticImage
            src="../../assets/OpenEveryday/jonathan.png"
            alt="Jonathan Holding US Flag"
            placeholder="blurred"
          />
        </div>
      </div>
    </section>
  )
}

export default DoGoodWork

import React, { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion"
import styled from "styled-components"

import { useElementPosition } from "../../hooks"

const MenuBanner = () => {
  const divOneRef = useRef(null)
  const divTwoRef = useRef(null)
  const divThreeRef = useRef(null)
  const divFourRef = useRef(null)
  const divOnePos = useElementPosition(divOneRef, 800)
  const divTwoPos = useElementPosition(divTwoRef, 800)
  const divThreePos = useElementPosition(divThreeRef, 800)
  const divFourPos = useElementPosition(divFourRef, 800)
  const { scrollY } = useViewportScroll()
  const threshold = 400
  const elOneInput = [divOnePos, divOnePos + threshold]
  const elTwoInput = [divTwoPos, divTwoPos + threshold]
  const elThreeInput = [divThreePos, divThreePos + threshold]
  const elFourInput = [divFourPos, divFourPos + threshold]
  const opacityOutput = [0, 1]
  const easeOption = {
    stiffness: 300,
    damping: 100,
  }

  //   ----------------------------Physisc Block Start--------------------------------

  //   --------------------------------Div Number 1-----------------------------------
  const opacityOne = useSpring(
    useTransform(scrollY, elOneInput, opacityOutput),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xLeftOne = useSpring(
    useTransform(scrollY, elOneInput, [-800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xRightOne = useSpring(
    useTransform(scrollY, elOneInput, [800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions

  //   --------------------------------Div Number 2-----------------------------------
  const opacityTwo = useSpring(
    useTransform(scrollY, elTwoInput, opacityOutput),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xLeftTwo = useSpring(
    useTransform(scrollY, elTwoInput, [-400, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xRightTwo = useSpring(
    useTransform(scrollY, elTwoInput, [400, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions

  //   --------------------------------Div Number 3------------------------------------
  const opacityThree = useSpring(
    useTransform(scrollY, elThreeInput, opacityOutput),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xLeftThree = useSpring(
    useTransform(scrollY, elThreeInput, [-800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xRightThree = useSpring(
    useTransform(scrollY, elThreeInput, [800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions

  //   --------------------------------Div Number 4------------------------------------
  const opacityFour = useSpring(
    useTransform(scrollY, elFourInput, opacityOutput),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xLeftFour = useSpring(
    useTransform(scrollY, elFourInput, [-800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions
  const xRightFour = useSpring(
    useTransform(scrollY, elFourInput, [800, 0]),
    easeOption
  ) // The Number 4000 Represents the Starting of our Div which has those aniamtions

  //   ----------------------------Physisc Block End------------------------------------

  const Title = styled.h3`
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 2px #257972;
      -webkit-text-stroke: 4px #257972;
      -webkit-text-fill-color: transparent;
    }
  `

  const TitlePink = styled.h3`
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 2px #ef5da8;
      -webkit-text-stroke: 4px #ef5da8;
      -webkit-text-fill-color: transparent;
    }
  `

  const Span = styled(motion.span)`
    display: inline-block;
  `

  return (
    <section className="bg-brandLight xl:py-36">
      {/* ----------------------------This is Block One----------------------------- */}
      <div
        className="flex justify-between items-center items-center max-w-1440 mx-auto mb-3 relative"
        ref={divOneRef}
      >
        <motion.span style={{ opacity: opacityOne }} className="order-1">
          <StaticImage
            src="../../assets/MenuBanner/banner-cocktail-glass.png"
            alt="The Miami Martini"
          />
        </motion.span>
        <motion.span style={{ opacity: opacityOne }} className="order-3">
          <StaticImage
            src="../../assets/MenuBanner/banner-martini.png"
            alt="The Florida Cocktail"
            className="ml-10 lg:ml-0"
          />
        </motion.span>
        <Title className="font-bebas text-brandDark md:text-transparent absolute md:static text-7xl md:text-8xl text-center lg:text-left top-1/2 left-1/2 transform md:transform-none -translate-x-1/2 -translate-y-1/2 xl:text-banner order-2">
          <Span style={{ x: xLeftOne, opacity: opacityOne }} className="mr-2">
            Cocktail
          </Span>
          <Span style={{ x: xRightOne, opacity: opacityOne }}>Menu</Span>
        </Title>
      </div>
      {/* ----------------------------This is Block Two----------------------------- */}
      <div
        className="flex justify-between max-w-1440 mx-auto mb-3 relative"
        ref={divTwoRef}
      >
        <motion.span style={{ opacity: opacityTwo }}>
          <StaticImage
            src="../../assets/MenuBanner/buns-of-liberty.png"
            alt="Buns of Liberty"
          />
        </motion.span>
        <h3 className="font-bebas text-brandDark xl:text-banner text-7xl absolute md:static top-1/2 left-1/2 transform md:transform-none z-20 text-center xl:text-left -translate-x-1/2 -translate-y-1/2">
          <motion.span
            className="inline-block"
            style={{ x: xLeftTwo, opacity: opacityTwo }}
          >
            Food Menu
          </motion.span>
        </h3>
        <motion.span style={{ opacity: opacityTwo }}>
          <StaticImage
            src="../../assets/MenuBanner/buns-of-liberty-burger.png"
            alt="Buns of Liberty Burger"
            className="ml-10 xl:ml-0"
          />
        </motion.span>
        <Title className="font-bebas xl:text-banner">
          <motion.span
            className="hidden md:inline-block"
            style={{ x: xRightTwo, opacity: opacityTwo }}
          >
            Food
          </motion.span>
        </Title>
      </div>
      {/* ----------------------------This is Block Three----------------------------- */}
      <div
        className="flex justify-between items-center max-w-1440 mx-auto mb-3 relative"
        ref={divThreeRef}
      >
        <motion.span style={{ opacity: opacityThree }} className="order-1">
          <StaticImage
            src="../../assets/MenuBanner/eggs.png"
            alt="Brunch Eggs"
          />
        </motion.span>
        <motion.span style={{ opacity: opacityThree }} className="order-3">
          <StaticImage
            src="../../assets/MenuBanner/brunch.png"
            alt="Sunday Brunch"
            className="ml-10 lg:ml-0"
          />
        </motion.span>
        <TitlePink className="font-bebas text-brandPink md:text-transparent absolute md:static text-7xl md:text-8xl text-center xl:text-left top-1/2 left-1/2 transform md:transform-none -translate-x-1/2 -translate-y-1/2 xl:text-banner order-2">
          <Span style={{ x: xLeftThree, opacity: opacityThree }}>Brunch</Span>
          <Span style={{ x: xRightThree, opacity: opacityThree }}>Menu</Span>
        </TitlePink>
      </div>
      {/* ----------------------------This is Block Four----------------------------- */}
      <div
        className="flex justify-between items-center max-w-1440 mx-auto relative"
        ref={divFourRef}
      >
        <motion.span style={{ opacity: opacityFour }}>
          <StaticImage
            src="../../assets/MenuBanner/sweet-liberty-drink.png"
            alt="Buns of Liberty"
          />
        </motion.span>
        <h3 className="font-bebas text-brandDark xl:text-banner text-7xl absolute md:static top-1/2 left-1/2 transform md:transform-none z-20 text-center xl:text-left -translate-x-1/2 -translate-y-1/2">
          <motion.span
            className="inline-block"
            style={{ x: xLeftFour, opacity: opacityFour }}
          >
            Happy Hour
          </motion.span>
        </h3>
        <motion.span style={{ opacity: opacityFour }}>
          <StaticImage
            src="../../assets/MenuBanner/sweet-liberty-banana.png"
            alt="Buns of Liberty Burger"
            className="ml-10 xl:ml-0"
          />
        </motion.span>
        <Title className="font-bebas xl:text-banner">
          <motion.span
            className="hidden md:inline-block"
            style={{ x: xRightFour, opacity: opacityFour }}
          >
            Hai
          </motion.span>
        </Title>
      </div>
    </section>
  )
}

export default MenuBanner

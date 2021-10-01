import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import Marquee from "react-fast-marquee"

const MenuBanner = () => {
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

  const Span = styled.span`
    display: inline-block;
  `

  return (
    <section className="bg-brandLight xl:py-36">
      {/* ----------------------------This is Block Two----------------------------- */}
      <Link to="/menu/food" className="block mb-4">
        <Marquee gradient={false} direction="left" pauseOnHover speed={50}>
          <div className="flex justify-between items-center">
            <StaticImage
              src="../../assets/MenuBanner/banner-cocktail-glass.png"
              alt="The Miami Martini"
              placeholder="blurred"
            />
            <Title className="font-bebas text-brandDark md:text-transparent absolute md:static text-7xl md:text-8xl text-center lg:text-left top-1/2 left-1/2 transform md:transform-none -translate-x-1/2 -translate-y-1/2 xl:text-banner">
              Cocktail Menu
            </Title>
            <StaticImage
              src="../../assets/MenuBanner/banner-martini.png"
              alt="The Florida Cocktail"
              placeholder="blurred"
            />
          </div>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Two----------------------------- */}
      <Link to="/menu/food" className="block mb-4">
        <Marquee gradient={false} direction="right" pauseOnHover speed={50}>
          <div className="flex justify-between items-center">
            <StaticImage
              src="../../assets/MenuBanner/buns-of-liberty-burger.png"
              alt="Buns of Liberty"
              placeholder="blurred"
            />
            <h3 className="font-bebas text-brandDark xl:text-banner text-7xl">
              Food Menu
            </h3>
            <StaticImage
              src="../../assets/MenuBanner/buns-of-liberty-burger.png"
              alt="Buns of Liberty Burger"
              placeholder="blurred"
            />
          </div>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Three----------------------------- */}
      <Link to="/menu/brunch" className="block mb-4">
        <Marquee gradient={false} direction="left" pauseOnHover speed={50}>
          <div className="flex justify-between items-center">
            <StaticImage
              src="../../assets/MenuBanner/eggs.png"
              alt="Brunch Eggs"
              placeholder="blurred"
            />
            <StaticImage
              src="../../assets/MenuBanner/brunch.png"
              alt="Sunday Brunch"
              placeholder="blurred"
            />
            <TitlePink className="font-bebas text-brandPink text-7xl md:text-8xl xl:text-banner">
              Brunch Menu
            </TitlePink>
          </div>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Four----------------------------- */}
      <Link to="/menu/happy-hour" className="block mb-4">
        <Marquee gradient={false} direction="right" pauseOnHover speed={50}>
          <div className="flex justify-between items-center">
            <StaticImage
              src="../../assets/MenuBanner/sweet-liberty-drink.png"
              alt="Buns of Liberty"
              placeholder="blurred"
            />

            <h3 className="font-bebas text-brandDark xl:text-banner text-7xl ">
              Happy Hour
            </h3>
            <StaticImage
              src="../../assets/MenuBanner/sweet-liberty-banana.png"
              alt="Buns of Liberty Burger"
              placeholder="blurred"
            />
          </div>
        </Marquee>
      </Link>
    </section>
  )
}

export default MenuBanner

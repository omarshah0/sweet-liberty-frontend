import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import Marquee from "react-fast-marquee"

const MenuBanner = () => {
  const Title = styled.h3`
    -webkit-text-stroke: 2px #257972;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 4px #257972;
    }
  `

  const TitlePink = styled.h3`
    -webkit-text-stroke: 2px #ef5da8;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 4px #ef5da8;
    }
  `

  return (
    <section className="bg-brandLight xl:pt-36 pb-12">
      {/* ----------------------------This is Block One----------------------------- */}
      <Link to="/menu/food" className="block mb-0 overflow-hidden">
        <Marquee gradient={false} direction="left" pauseOnHover speed={30}>
          <StaticImage
            src="../../assets/MenuBanner/banner-cocktail-glass.png"
            alt="The Miami Martini"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <Title className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Cocktail Menu
          </Title>
          <StaticImage
            src="../../assets/MenuBanner/banner-martini.png"
            alt="The Florida Cocktail"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <Title className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Cocktail Menu
          </Title>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Two----------------------------- */}
      <Link to="/menu/food" className="block mb-0 overflow-hidden">
        <Marquee gradient={false} direction="right" pauseOnHover speed={30}>
          <StaticImage
            src="../../assets/MenuBanner/buns-of-liberty-burger.png"
            alt="Buns of Liberty"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <h3 className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Food Menu
          </h3>
          <StaticImage
            src="../../assets/MenuBanner/buns-of-liberty-burger.png"
            alt="Buns of Liberty Burger"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <h3 className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Food Menu
          </h3>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Three----------------------------- */}
      <Link to="/menu/brunch" className="block mb-0">
        <Marquee gradient={false} direction="left" pauseOnHover speed={30}>
          <StaticImage
            src="../../assets/MenuBanner/eggs.png"
            alt="Brunch Eggs"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <TitlePink className="font-bebas text-brandPink text-[83px] md:text-[130px] lg:text-[190px]">
            Brunch Menu
          </TitlePink>
          <StaticImage
            src="../../assets/MenuBanner/brunch.png"
            alt="Sunday Brunch"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <TitlePink className="font-bebas text-brandPink text-[83px] md:text-[130px] lg:text-[190px]">
            Brunch Menu
          </TitlePink>
        </Marquee>
      </Link>
      {/* ----------------------------This is Block Four----------------------------- */}
      <Link to="/menu/happy-hour" className="block mb-0">
        <Marquee gradient={false} direction="right" pauseOnHover speed={30}>
          <StaticImage
            src="../../assets/MenuBanner/sweet-liberty-drink.png"
            alt="Buns of Liberty"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />

          <h3 className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Happy Hour
          </h3>
          <StaticImage
            src="../../assets/MenuBanner/sweet-liberty-banana.png"
            alt="Buns of Liberty Burger"
            placeholder="blurred"
            className="mx-4 w-[105px] h-[70px] md:w-[250px] md:h-[160px] lg:w-[320px] lg:h-[210px]"
          />
          <h3 className="font-bebas text-brandDark text-[83px] md:text-[130px] lg:text-[190px]">
            Happy Hour
          </h3>
        </Marquee>
      </Link>
    </section>
  )
}

export default MenuBanner

import React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../UI"

const ShowAndEvents = () => {
  return (
    <section className="py-20 md:py-40 xl:py-96 bg-brandPink relative">
      <div className="absolute inset-0 pointer-events-none z-[0]">
        <StaticImage
          src="../../assets/events_sec_bg.png"
          alt="Book Event"
          className="h-full w-full"
        />
      </div>
      <Container className="text-center relative z-[1]">
        <h2 className="font-bebas text-[60px] leading-[60px] mb-[25px] md:text-[110px] md:leading-[90px] md:mb-[50px] lg:text-[150px] text-brandLight mx-auto lg:w-[900px] lg:leading-[122px] lg:mb-10">
          Fruit cock tail drag show
        </h2>
        <p className="font-bebas text-[35px] leading-[35px] mb-[25px] md:mb[50px] md:text-[47px] text-brandLight lg:mb-10">
          Every sunday 12:30 PM & 2:30 PM shows
        </p>
        <a
          href="http://pursuehappinessfoundation.com"
          target="_blank"
          rel="noreferrer"
          className="block font-frankRuhlLibre font-bold text-brandLight text-6xl mt-auto text-center"
        >
          More Events{" "}
          <span className="w-16 h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandLight text-brandLight text-5xl mr-1">
            <span className="relative left-1 bottom-1">{">"}</span>
          </span>
        </a>
      </Container>
    </section>
  )
}

export default ShowAndEvents

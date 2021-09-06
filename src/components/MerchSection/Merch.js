import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

import { Container, MerchCard, TitleWithStroke } from "../UI"
import { StaticImage } from "gatsby-plugin-image"

import Jacket from "../../assets/Merch/jacket_1.png"
import Tee from "../../assets/Merch/tee.png"
import Cap from "../../assets/Merch/cap.png"

const Merch = () => {
  return (
    <InView threshold="0.15" triggerOnce>
      {({ ref, inView }) => (
        <section className="bg-brandLight" ref={ref}>
          <Container>
            <div className="relative pb-100">
              <h2 className="font-bebas text-merch text-brandDark relative leading-hero ml-10">
                <TitleWithStroke
                  className={`block relative transition-all duration-1000 ease-in-out ${
                    inView ? "left-10" : "left-full"
                  }`}
                >
                  Order Your
                </TitleWithStroke>
                <motion.span className="inline-block">
                  <TitleWithStroke
                    className={`block relative transition-all delay-150 duration-1000 ease-in-out ${
                      inView ? "left-52" : "-left-full"
                    }`}
                  >
                    Sweet Liberty
                  </TitleWithStroke>
                </motion.span>
                <TitleWithStroke
                  className={`block relative transition-all delay-250 duration-1000 ease-in-out ${
                    inView ? "left-0" : "left-full"
                  }`}
                >
                  Merch Now
                </TitleWithStroke>
              </h2>
              <div className="flex items-center absolute top-64 right-72">
                <div className="relative top-20 left-4">
                  <StaticImage
                    src="../../assets/Merch/girl_standing.png"
                    alt="Girl Standing on Beach"
                    placeholder="blurred"
                  />
                </div>
                <div>
                  <StaticImage
                    src="../../assets/Merch/miami_is_lit.png"
                    alt="Two Girls Sitting on Beach - Miami is Shit"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mb-36">
              <MerchCard
                img={Jacket}
                title="Miami Jacket"
                description="Red - Womens"
                price="$150"
                link="/"
              />
              <MerchCard
                img={Tee}
                title="Sweet Tee"
                description="Red - Womens"
                price="$50"
                link="/"
              />
              <MerchCard
                img={Cap}
                title="Sweet Cap"
                description="Red - Womens"
                price="$80"
                link="/"
              />
            </div>
            <div className="text-center pb-36">
              <Link
                to="/shop"
                className="font-frankRuhlLibre text-brandDark text-6xl"
              >
                Shop Now{" "}
                <span className="w-16 h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandDark text-brandDark text-5xl mr-1">
                  <span className="relative left-0 bottom-1">{">"}</span>
                </span>
              </Link>
            </div>
          </Container>
        </section>
      )}
    </InView>
  )
}

export default Merch

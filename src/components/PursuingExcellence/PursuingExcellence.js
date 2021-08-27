import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

import { Container, TitleSolid, TitleStroke } from "../UI"

const PursuingExcellence = () => {
  return (
    <section>
      <Container>
        <InView threshold={0.3} triggerOnce>
          {({ ref, inView }) => (
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7 }}
              className="font-bebas text-5xl text-center mb-6 text-brandLight leading-none lg:text-pursue xl:w-3/5 xl:text-left xl:ml-40"
            >
              This is sweet liberty. Enjoyed by the tourists, loved by the
              locals
            </motion.h2>
          )}
        </InView>

        <div className="lg:flex items-center  xl:justify-end xl:px-48 mb-11">
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
                className="font-bebas text-2xl text-center lg:text-left mb-6 text-brandLight lg:w-100 lg:mr-8 xl:mr-20"
              >
                Situated in the up-and-coming Collins Park area alongside the
                Bass Art Museum, Sweet Liberty offers guests world-class
                cocktails and creative American food. Conceived and operated by
                award-winning bartender John Lermayer and Dan Binkiewicz along
                with restaurateurS David Martinez and MICHELLE BERNSTEIN, Sweet
                Liberty brings an intelligent selection of food and drink from
                sophisticated to simple to downright delicious.
              </motion.p>
            )}
          </InView>
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-center lg:text-justify"
              >
                <StaticImage
                  src="../../assets/hero-center.png"
                  alt="Sweet Liberty"
                />
              </motion.div>
            )}
          </InView>
        </div>
        <div className="xl:ml-40">
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1.3, ease: "linear" }}
              >
                <StaticImage
                  src="../../assets/pursue-dsc.png"
                  alt="Sweet Liberty Pursuing Excellence"
                />
              </motion.div>
            )}
          </InView>
          <h2 className="font-bebas text-7xl md:text-hero leading-hero text-brandLight relative bottom-6 md:bottom-14 ml-6 md:ml-2 lg:ml-10">
            <InView threshold={0.2} triggerOnce>
              {({ ref, inView }) => (
                <motion.span
                  ref={ref}
                  initial={{ x: -200 }}
                  animate={inView ? { x: 0 } : { x: -200 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleSolid>Pursuing</TitleSolid>
                </motion.span>
              )}
            </InView>
            <br />
            <InView threshold={0.2} triggerOnce>
              {({ ref, inView }) => (
                <motion.span
                  ref={ref}
                  initial={{ x: 200 }}
                  animate={inView ? { x: 0 } : { x: 200 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleStroke className="relative xl:left-80 xl:ml-9 tracking-wide md:tracking-normal">
                    Excellence
                  </TitleStroke>
                </motion.span>
              )}
            </InView>
          </h2>
        </div>
      </Container>
    </section>
  )
}

export default PursuingExcellence

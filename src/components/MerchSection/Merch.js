import React from "react"
import { Link } from "gatsby"
import { InView } from "react-intersection-observer"

import { Container, TitleWithStroke, FormButton } from "../UI"
import { StaticImage } from "gatsby-plugin-image"

const Merch = () => {
  return (
    <InView threshold="0.15" triggerOnce>
      {({ ref, inView }) => (
        <section className="relative bg-brandLight" ref={ref}>
          <div className="absolute -top-10 left-0 pointer-events-none">
            <StaticImage
              src="../../assets/pursue_leaf.png"
              className="w-[320px] h-[908px]"
            />
          </div>
          <Container>
            <div className="relative pt-[100px] pb-0 lg:pb-[36rem] xl:pb-[37rem]">
              <h2 className="font-bebas text-[7.875rem] md:text-[8.875rem] leading-[7rem] lg:text-[190px] xl:text-merch text-brandDark relative lg:leading-hero xl:ml-10">
                <TitleWithStroke
                  className={`block relative transition-all duration-1000 ease-in-out ${
                    inView ? "xl:left-10" : "left-full"
                  }`}
                >
                  Order Your
                </TitleWithStroke>
                <span className="inline-block">
                  <TitleWithStroke
                    className={`block relative transition-all delay-150 duration-1000 ease-in-out ${
                      inView ? "xl:left-52" : "-left-full"
                    }`}
                  >
                    Sweet Liberty
                  </TitleWithStroke>
                </span>
                <TitleWithStroke
                  className={`block relative transition-all delay-250 duration-1000 ease-in-out ${
                    inView ? "left-0" : "left-full"
                  }`}
                >
                  Merch Now
                </TitleWithStroke>
              </h2>
              <div className="flex items-center relative top-[-200px] md:top-[-145px] lg:absolute lg:top-[23rem] lg:right-[4.8rem] xl:right-[18.8rem]">
                <div className="relative top-20 left-4 z-10">
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
              {/* //Using Static Image At The Moment , so Replace with Merch Card  Named Import ffrom UI*/}
              {/* Card One  */}
              <div className="font-bebas text-brandDark text-center">
                <StaticImage
                  src="../../assets/Merch/test_jacket.png"
                  alt="Miami Jacket"
                  placeholder="blurred"
                  className="mb-14 w-full h-[315px] object-cover"
                />
                <h3 className="text-7xl w-48 mx-auto mb-4">Miami Jacket</h3>
                <h3 className="text-5xl mb-4">Red - Womens</h3>
                <span className="block text-4xl mb-4">$150</span>
                <FormButton
                  className="border-brandLight"
                  font="font-bebas text-brandLight text-2xl"
                >
                  View Product
                </FormButton>
              </div>
              {/* Card Two */}
              <div className="font-bebas text-brandDark text-center">
                <StaticImage
                  src="../../assets/Merch/tee.png"
                  alt="Sweet Tee"
                  placeholder="blurred"
                  className="mb-14 w-full h-[315px] object-cover"
                />
                <h3 className="text-7xl w-48 mx-auto mb-4">Sweet Tee</h3>
                <h3 className="text-5xl mb-4">Red - Womens</h3>
                <span className="block text-4xl mb-4">$50</span>
                <FormButton
                  className="border-brandLight"
                  font="font-bebas text-brandLight text-2xl"
                >
                  View Product
                </FormButton>
              </div>
              {/* Card Three */}
              <div className="font-bebas text-brandDark text-center">
                <StaticImage
                  src="../../assets/Merch/cap.png"
                  alt="Sweet Tee"
                  placeholder="blurred"
                  className="mb-14 w-full h-[315px] object-cover"
                />
                <h3 className="text-7xl w-48 mx-auto mb-4">Sweet Cap</h3>
                <h3 className="text-5xl mb-4">Red - Womens</h3>
                <span className="block text-4xl mb-4">$80</span>
                <FormButton
                  className="border-brandLight"
                  font="font-bebas text-brandLight text-2xl"
                >
                  View Product
                </FormButton>
              </div>
              {/* //End of Section */}
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

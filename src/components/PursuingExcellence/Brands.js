import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import Lottie from "react-lottie"

import lottieData from "../../assets/Json/data.json"

const Brands = () => {
  const [startLottie, setStartLottie] = useState(null)
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className="mt-36 relative">
      <ScrollMenu>
        <div
          className="relative"
          onMouseEnter={() => setStartLottie("img")}
          onMouseLeave={() => setStartLottie(null)}
        >
          <StaticImage
            src="../../assets/best_bars.png"
            alt="Timeout Logo"
            placeholder="blurred"
            layout="fixed"
            className="ml-5 mr-12"
          />
          <span className="absolute top-[-25px] left-0 z-[2]">
            <Lottie
              options={defaultOptions}
              width="220px"
              speed={3}
              direction={startLottie === "img" ? 1 : -1}
            />
          </span>
        </div>
        <div className="mr-12">
          <StaticImage
            src="../../assets/sprited_awards.png"
            alt="Timeout Logo"
            placeholder="blurred"
            layout="fixed"
            className=" mr-12"
          />
        </div>
        <StaticImage
          src="../../assets/timeout.png"
          alt="Timeout Logo"
          placeholder="blurred"
          layout="fixed"
          className="mr-12"
        />
        <StaticImage
          src="../../assets/best_bars.png"
          alt="Timeout Logo"
          placeholder="blurred"
          layout="fixed"
          className=" mr-12"
        />
        <StaticImage
          src="../../assets/sprited_awards.png"
          alt="Timeout Logo"
          placeholder="blurred"
          layout="fixed"
          className=" mr-12"
        />
        <StaticImage
          src="../../assets/timeout.png"
          alt="Timeout Logo"
          placeholder="blurred"
          layout="fixed"
          className=""
        />
      </ScrollMenu>
    </div>
  )
}

export default Brands

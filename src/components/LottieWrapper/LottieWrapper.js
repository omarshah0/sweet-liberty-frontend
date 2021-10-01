import React from "react"
import Lottie from "react-lottie"

import lottieData from "../../assets/Json/data.json"

const LottieWrapper = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  startLottie,
  img,
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  console.log(`${img} is hovered: ${startLottie == img}`)

  return (
    <div
      key={img}
      className={`${
        className && className
      } relative mr-12 h-[300px] grid place-items-center`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]">
        <Lottie
          options={defaultOptions}
          width="220px"
          speed={3}
          direction={startLottie === img ? 1 : -1}
        />
      </span>
    </div>
  )
}

export default LottieWrapper

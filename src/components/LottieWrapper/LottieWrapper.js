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

  return (
    <div
      key={img}
      className={`${
        className && className
      } relative mr-12 h-[300px] grid place-items-center`}
    >
      {children}
      <span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="button"
        tabIndex="0"
      >
        <Lottie
          options={defaultOptions}
          width="220px"
          speed={3}
          isStopped={startLottie !== img}
        />
      </span>
    </div>
  )
}

export default LottieWrapper

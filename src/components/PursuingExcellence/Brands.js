import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ScrollMenu } from "react-horizontal-scrolling-menu"

import LottieWrapper from "../LottieWrapper"
import { useDrag } from "../../hooks"

const Brands = ({ className, setData }) => {
  const [startLottie, setStartLottie] = useState(null)
  const { dragStart, dragStop, dragMove } = useDrag()

  const mouseEnterHandler = key => {
    setStartLottie(key)
    setData(key)
  }

  const mouseLeaveHandler = () => {
    setStartLottie(null)
  }

  const handleDrag =
    ({ scrollContainer }) =>
    ev =>
      dragMove(ev, newPos => {
        if (scrollContainer.current) {
          const currentScroll = scrollContainer.current.scrollLeft
          scrollContainer.current.scrollLeft = currentScroll + newPos
        }
      })

  return (
    <div
      className={`${className} mt-36 relative`}
      onMouseLeave={dragStop}
      role="button"
      tabIndex="0"
    >
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {/* ---------------------------------------- Logo 1 ---------------------------------------- */}
        <LottieWrapper
          className="mx-5 lottie-image-filter"
          img="img1"
          startLottie={startLottie}
          onMouseEnter={() => mouseEnterHandler("img1")}
          onMouseLeave={() => mouseLeaveHandler}
        >
          <StaticImage
            src="../../assets/sprited_awards.png"
            alt="Sprited Awards Logo"
            placeholder="blurred"
            layout="fixed"
            className="filter-white"
          />
        </LottieWrapper>
        {/* ---------------------------------------- Logo 2 ---------------------------------------- */}
        <LottieWrapper
          className="lottie-image-filter"
          img="img2"
          startLottie={startLottie}
          onMouseEnter={() => mouseEnterHandler("img2")}
          onMouseLeave={() => mouseLeaveHandler}
        >
          <StaticImage
            src="../../assets/best_bars.png"
            alt="Best Bars Logo"
            placeholder="blurred"
            layout="fixed"
            className="filter-white"
          />
        </LottieWrapper>
        {/* ---------------------------------------- Logo 3 ---------------------------------------- */}
        <LottieWrapper
          className="lottie-image-filter"
          img="img3"
          startLottie={startLottie}
          onMouseEnter={() => mouseEnterHandler("img3")}
          onMouseLeave={() => mouseLeaveHandler}
        >
          <StaticImage
            src="../../assets/timeout.png"
            alt="Timeout Logo"
            placeholder="blurred"
            layout="fixed"
            className="filter-white"
          />
        </LottieWrapper>
        {/* ---------------------------------------- Logo 4 ---------------------------------------- */}
        <LottieWrapper
          className="lottie-image-filter"
          img="img4"
          startLottie={startLottie}
          onMouseEnter={() => mouseEnterHandler("img4")}
          onMouseLeave={() => mouseLeaveHandler}
        >
          <StaticImage
            src="../../assets/new_times.png"
            alt="Miami New Times"
            placeholder="blurred"
            layout="fixed"
            className="filter-white"
          />
        </LottieWrapper>
        {/* ---------------------------------------- Logo 5 ---------------------------------------- */}
        <LottieWrapper
          className="lottie-image-filter"
          img="img5"
          startLottie={startLottie}
          onMouseEnter={() => mouseEnterHandler("img5")}
          onMouseLeave={() => mouseLeaveHandler}
        >
          <StaticImage
            src="../../assets/the_daily_meal.png"
            alt="The Daily Meal"
            placeholder="blurred"
            layout="fixed"
            className="filter-white"
          />
        </LottieWrapper>
      </ScrollMenu>
    </div>
  )
}

export default Brands

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

  if (isThouchpad) {
    ev.stopPropagation()
    return
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext()
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev()
  }
}

import React from "react"

import { useScrollValue } from "../../hooks"

const ScrollTop = () => {
  const scrollValue = useScrollValue()
  console.log("Scroll Value is ", scrollValue)
  const scrollTopHandler = () => {
    window.scrollTo(0, 0)
  }
  return (
    scrollValue > 1200 && (
      <button
        className="fixed bottom-8 right-8 z-[100000]"
        onClick={scrollTopHandler}
      >
        <span className="w-16 h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandPink brandDark text-brandPink text-5xl mr-1 mix-blend-difference">
          <span className="relative left-[-4px] transform -rotate-90">
            {">"}
          </span>
        </span>
      </button>
    )
  )
}

export default ScrollTop

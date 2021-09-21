import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react"
import ResizeObserver from "resize-observer-polyfill"
import styled from "styled-components"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion"

const SmoothScroll = ({ children }) => {
  //Scroll Prgoress
  const ProgressContainer = styled(motion.div)`
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 4px;
    z-index: 100000;
  `

  const Span = styled(motion.span)`
    display: block;
    width: 100%;
    background-color: orangered;
  `

  //Scroll Percentage
  const [currentPrecent, setCurrentPercent] = useState(null)

  // scroll container
  const scrollRef = useRef(null)

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY, scrollYProgress } = useViewportScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  // const physics = { damping: 18, mass: 1, stiffness: 75 } // easing of smooth scroll
  const physics = { damping: 20, mass: 20, stiffness: 50 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(
    () =>
      yRange.onChange(v => {
        setCurrentPercent(Math.trunc(yRange.current))
      }),
    [yRange]
  )

  return (
    <>
      <ProgressContainer>
        <Span style={{ height: `${currentPrecent}vh` }} />
      </ProgressContainer>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="fixed top-0 left-0 w-full overflow-auto will-transform"
      >
        {children}
      </motion.div>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll

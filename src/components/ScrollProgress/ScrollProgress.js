import React, { useEffect, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"

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

const ScrollProgress = () => {
  const [currentPrecent, setCurrentPercent] = useState(null)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(
    () =>
      yRange.onChange(v => {
        setCurrentPercent(Math.trunc(yRange.current))
      }),
    [yRange]
  )

  return (
    <ProgressContainer>
      <Span animate={{ height: `${currentPrecent}vh` }} />
    </ProgressContainer>
  )
}

export default ScrollProgress

import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Scroller = () => {
  const Parent = styled.div`
    display: none;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(0, -50%);
    @media screen and (min-height: 900px) {
      display: inline-block;
    }
    @media screen and (min-width: 768px) {
      bottom: -30px;
      left: 47%;
    }
    @media screen and (min-width: 1024px) {
      bottom: -20px;
      left: 47%;
    }
    @media screen and (min-width: 1280px) {
      bottom: -80px;
      left: 47%;
    }
  `
  const Div = styled.div`
    width: 23px;
    height: 35px;
    border-radius: 33px;
    border: 2px solid white;
    display: inline-block;
    position: relative;
  `
  const Span = styled(motion.span)`
    display: block;
    width: 5px;
    height: 4px;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    top: 25%;
    left: 38%;
  `
  return (
    <Parent>
      <Div>
        <Span
          initial={{ y: 0 }}
          animate={{ y: 13 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        />
      </Div>
    </Parent>
  )
}

export default Scroller

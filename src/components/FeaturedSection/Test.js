import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SlideOne, SlideTwo, SlideThree } from "./Slides"

gsap.registerPlugin(ScrollTrigger)

const Test = () => {
  const panels = useRef([])
  const panelsContainer = useRef()

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel
  }

  useEffect(() => {
    const totalPanels = panels.current.length

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: true,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    })
  }, [])

  return (
    <div
      className="bg-brandLight w-[300%] h-[100vh] flex flex-nowrap"
      ref={panelsContainer}
    >
      <section
        className="grid place-items-center h-full w-full bg-brandLight"
        ref={e => createPanelsRefs(e, 0)}
      >
        <SlideOne />
      </section>
      <section
        className="grid place-items-center h-full w-full bg-brandPink"
        ref={e => createPanelsRefs(e, 1)}
      >
        <SlideTwo />
      </section>
      <section
        className="grid place-items-center h-full w-full bg-brandDark"
        ref={e => createPanelsRefs(e, 2)}
      >
        <SlideThree />
      </section>
    </div>
  )
}

export default Test

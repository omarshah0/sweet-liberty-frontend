import React from "react"

import Provider from "./src/system/Provider"

const BodyComponents = [
  <script key="seven-roms" src="https://www.sevenrooms.com/widget/embed.js" />,
]

// const HeadComponents = [
//   <script
//     key="gsap-main"
//     src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
//   />,
//   <script key="gsap-scrollTrigger" src="/scripts/ScrollTrigger.min.js" />,
// ]

export const wrapRootElement = Provider
export const onRenderBody = (
  { setPostBodyComponents, setHeadComponents },
  pluginOptions
) => {
  setPostBodyComponents(BodyComponents)
  // setHeadComponents(HeadComponents)
}

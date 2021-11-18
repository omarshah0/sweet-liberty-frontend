import React from "react"

import Provider from "./src/system/Provider"

const BodyComponents = [
  <script
    ket="seven-roms"
    src="https://www.sevenrooms.com/widget/embed.js"
  ></script>,
]

export const wrapRootElement = Provider
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(BodyComponents)
}

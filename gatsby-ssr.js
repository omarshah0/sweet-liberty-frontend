import React from "react"

import Provider from "./src/system/Provider"

const BodyComponents = [
  <script src="https://www.sevenrooms.com/widget/embed.js"></script>,
  <script
    dangerouslySetInnerHTML={{
      __html: `SevenroomsWidget.init({
    venueId: "mysweetliberty",
    triggerId: "sr-res-root",
    type: "reservations",
    styleButton: true,
    clientToken: "",
})`,
    }}
  />,
]

export const wrapRootElement = Provider
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(BodyComponents)
}

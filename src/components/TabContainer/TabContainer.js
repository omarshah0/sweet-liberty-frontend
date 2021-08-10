import React from "react"

import { Tab } from "../UI"

const TabContainer = ({ className }) => {
  return (
    <div className={`md:flex md:gap-6 md:justify-center ${className}`}>
      <Tab title="Food" icon="" />
      <Tab title="Happy Hour" icon="" />
      <Tab title="Cocktails" icon="" activeTab />
      <Tab title="Specials" icon="" />
      <Tab title="Brunch" icon="" />
      <Tab title="Beer &amp; Wine" icon="" />
    </div>
  )
}

export default TabContainer

import React from "react"

const Tab = ({ title, icon }) => {
  return (
    <button
      className={`group min-w-max hover:text-white font-sourceSansProBold px-8 py-4 rounded transition}`}
    >
      {icon && <img src={icon} alt={icon.name} className={`inline mr-3`} />}
      {title}
    </button>
  )
}

export default Tab

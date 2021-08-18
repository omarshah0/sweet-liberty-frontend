import React, { useState, useRef } from "react"

import { useOutsideClick } from "../../hooks"

const CategoriesDropDown = ({ filterBlogsHandler }) => {
  const [dropDown, setDropDown] = useState(false)
  const [active, setActive] = useState("all")
  const outsideRef = useRef()

  const dropDownHandler = () => {
    setDropDown(!dropDown)
  }

  const activeLinkHandler = id => {
    setActive(id)
    filterBlogsHandler(id)
  }

  useOutsideClick(outsideRef, () => {
    setDropDown(false)
  })

  return (
    <div className="relative" ref={outsideRef}>
      <button
        className="bg-brandRed text-white text-base px-8 py-3 rounded w-full md:w-auto"
        onClick={dropDownHandler}
      >
        Categories
      </button>
      {dropDown && (
        <div className="md:absolute mt-2 md:mt-0 top-10 -right-6 bg-shopBg z-10 py-8 md:w-56">
          <ul>
            <li
              className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                active === "events" ? "text-brandPink" : "text-brandDark"
              }`}
              onClick={() => activeLinkHandler("events")}
              role="presentation"
            >
              Events
            </li>
            <li
              className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                active === "news" ? "text-brandPink" : "text-brandDark"
              }`}
              onClick={() => activeLinkHandler("news")}
              role="presentation"
            >
              News
            </li>
            <li
              className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                active === "specials" ? "text-brandPink" : "text-brandDark"
              }`}
              onClick={() => activeLinkHandler("specials")}
              role="presentation"
            >
              Specials
            </li>
            <li
              className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                active === "merch" ? "text-brandPink" : "text-brandDark"
              }`}
              onClick={() => activeLinkHandler("merch")}
              role="presentation"
            >
              Merch
            </li>
            <li
              className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                active === "all" ? "text-brandPink" : "text-brandDark"
              }`}
              onClick={() => activeLinkHandler("all")}
              role="presentation"
            >
              All
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default CategoriesDropDown

import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { useOutsideClick } from "../../hooks"

const CategoriesDropDown = ({ filterBlogsHandler }) => {
  const data = useStaticQuery(graphql`
    query MyCategories {
      allContentfulCategory {
        nodes {
          title
          slug
        }
      }
    }
  `)

  const categories = data.allContentfulCategory.nodes

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
        <div className="md:absolute mt-2 md:mt-0 top-10 -right-6 bg-shopBg z-10 py-8 md:w-56 shadow-drop-down">
          <ul>
            {React.Children.toArray(
              categories.map(category => (
                <li
                  className={`cursor-pointer font-frankRuhlLibre uppercase  text-xl mb-2 transition hover:bg-brandLight px-7 ${
                    active === category.slug
                      ? "text-brandPink"
                      : "text-brandDark"
                  }`}
                  onClick={() => activeLinkHandler(category.slug)}
                  role="presentation"
                >
                  {category.title}
                </li>
              ))
            )}
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

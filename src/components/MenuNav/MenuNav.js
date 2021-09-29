import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { MenuNavBtn } from "../UI"

const MenuNav = ({ slug }) => {
  const { allDatoCmsMenu } = useStaticQuery(graphql`
    query getAllMenus {
      allDatoCmsMenu {
        nodes {
          menuNameNavigation
          menuIcon {
            url
          }
          slug
        }
      }
    }
  `)

  const [test, setTest] = useState(0)

  const scrollRef = useRef(null)
  const lora = useRef(null)

  useEffect(() => {
    console.log("Scroll Ref is ", scrollRef)
    console.log("El Pos is ", lora)
    const scrollContainerWidth = scrollRef.current.offsetWidth
    const elPos = lora.current.offsetLeft
  }, [test])

  return (
    <nav>
      <ul
        className={`flex gap-4 md:gap-6 justify-between mb-24 pb-4 overflow-x-auto nav__${slug} nav-scroll`}
        ref={scrollRef}
      >
        {allDatoCmsMenu.nodes.map(m => (
          <li key={m.slug}>
            <MenuNavBtn
              title={m.menuNameNavigation}
              icon={m.menuIcon.url}
              slug={m.slug}
            />
          </li>
        ))}
        <li ref={lora}>
          <MenuNavBtn title="Lora Lassan" slug="/menu/lora" />
        </li>
      </ul>
      <button onClick={() => setTest(test + 1)}>Cheema</button>
    </nav>
  )
}

export default MenuNav

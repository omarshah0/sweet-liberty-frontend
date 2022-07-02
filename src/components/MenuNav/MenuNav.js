import React from "react"
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

  return (
    <nav>
      <ul
        className={`flex justify-between mb-24 pb-4 overflow-x-auto nav__${slug} nav-scroll`}
      >
        {allDatoCmsMenu.nodes.map((m, i) => (
          <li key={m.slug}>
            <MenuNavBtn
              title={m.menuNameNavigation}
              icon={m.menuIcon.url}
              slug={m.slug}
              className={i === 0 ? "ml-0 md:ml-0" : "ml-4 md:ml-6"}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuNav

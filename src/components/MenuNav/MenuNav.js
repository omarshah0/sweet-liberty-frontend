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
        className={`flex gap-4 md:gap-6 justify-between mb-24 pb-4 overflow-x-auto nav__${slug} nav-scroll`}
      >
        {allDatoCmsMenu.nodes.map((m, i) => (
          <li key={m.slug}>
            <MenuNavBtn
              title={m.menuNameNavigation}
              icon={m.menuIcon.url}
              slug={m.slug}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuNav

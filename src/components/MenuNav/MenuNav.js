import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { MenuNavBtn } from "../UI"

const MenuNav = () => {
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
  console.log("Menu is ", allDatoCmsMenu)
  return (
    <nav>
      <ul className="flex">
        {allDatoCmsMenu.nodes.map(m => (
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

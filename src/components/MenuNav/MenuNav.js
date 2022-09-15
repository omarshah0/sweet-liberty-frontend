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
          <li
            key={m.slug}
            className={i === 0 ? "ml-0 md:ml-0" : "ml-4 md:ml-6"}
          >
            <MenuNavBtn
              title={m.menuNameNavigation}
              icon={m.menuIcon.url}
              slug={m.slug}
            />
          </li>
        ))}
        <li className="ml-4 md:ml-6">
          <MenuNavBtn
            title="Spirits List"
            icon={null}
            slug="https://drive.google.com/file/d/1xQg7bkMT7KLRZyVNc_FU89QU-m5bLiP0/view"
            outerLink
          />
        </li>
      </ul>
    </nav>
  )
}

export default MenuNav

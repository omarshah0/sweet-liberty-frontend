import React, { Fragment } from "react"

import { Container } from "../UI"
import ThemeContext from "../../system/ThemeContext"

const MenuItemCard = ({ data }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <React.Fragment>
          {React.Children.toArray(
            data.map(d => (
              <div
                className={`py-5 md:py-8 lg:py-12 ${
                  d.DarkSection
                    ? `${theme.darkSectionBg} mt-8 md:mt-12 lg:mt-16`
                    : ""
                } relative`}
              >
                <Container
                  className={`${
                    d.Border ? "border-4 border-brandGold py-6" : ""
                  }`}
                >
                  <h3
                    className={`uppercase font-frankRuhlLibre text-xl font-bold ${
                      d.DarkSection
                        ? `${theme.darkSectionSubMenuTitle}`
                        : `${theme.subMenuTitle}`
                    } mb-6`}
                  >
                    {d.SubMenuTitle}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-32 lg:gap-x-36 gap-y-10 md:gap-y-14 lg:gap-y-18">
                    {React.Children.toArray(
                      d.item?.map(item => (
                        <div
                          className={`${
                            d.DarkSection
                              ? `${theme.darkSectionItemText}`
                              : `${theme.itemText}`
                          }`}
                        >
                          <h4
                            className={`inline uppercase font-frankRuhlLibre text-xl font-bold`}
                          >
                            {item.ItemName}
                          </h4>
                          <span
                            className={`font-cantataOne text-sm inline float-right mt-1`}
                          >
                            {item.Price}
                          </span>
                          <p
                            className={`font-cantataOne  text-sm pt-2 md:w-4/5`}
                          >
                            {item.Description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </Container>
                {d.DarkSection && (
                  <Fragment>
                    <div
                      className={`${theme.darkSectionBg} absolute left-0 right-0`}
                      style={{ top: "-15px", height: "11px" }}
                    ></div>
                    <div
                      className={`h-2 ${theme.darkSectionBg}  absolute left-0 right-0`}
                      style={{ bottom: "-15px", height: "11px" }}
                    ></div>
                  </Fragment>
                )}
              </div>
            ))
          )}
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  )
}

export default MenuItemCard

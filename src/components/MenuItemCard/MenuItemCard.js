import React, { Fragment, useContext } from "react"

import { Container } from "../UI"
import ThemeContext from "../../system/ThemeContext"

const MenuItemCard = ({ data }) => {
  console.log("Data is ", data)
  const { theme } = useContext(ThemeContext)

  const Vegan = () => {
    return (
      <span
        className={`uppercase align-top font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[2px] ${theme.vegBg} ${theme.vegText}`}
      >
        V
      </span>
    )
  }

  const Vegetarian = () => {
    return (
      <span
        className={`uppercase align-top font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[2px] ${theme.vegBg} ${theme.vegText}`}
      >
        Vg
      </span>
    )
  }

  const GlutenFree = () => {
    return (
      <span
        className={`uppercase align-top font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[2px] ${theme.vegBg} ${theme.vegText}`}
      >
        Gf
      </span>
    )
  }

  return (
    <React.Fragment>
      {React.Children.toArray(
        data.map(d => (
          <div
            className={`py-5 md:py-8 lg:py-12 ${
              d.darkSection ? `dark-section mt-8 md:mt-12 lg:mt-16` : ""
            } relative`}
          >
            <Container
              className={`${d.border ? "border-4 border-brandGold py-6" : ""}`}
            >
              <h3 className="uppercase font-frankRuhlLibre text-xl font-bold mb-6 menu-sub-category">
                {d.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-32 lg:gap-x-36 gap-y-10 md:gap-y-14 lg:gap-y-18">
                {React.Children.toArray(
                  d.foodItem?.map(item => (
                    <div className="food-item">
                      <h4
                        className={`inline font-frankRuhlLibre text-xl font-bold`}
                      >
                        {item.name}
                        <span className="ml-[4px]">
                          {item.vegan && <Vegan />}
                          {item.vegetarian && <Vegetarian />}
                          {item.glutenFree && <GlutenFree />}
                        </span>
                      </h4>
                      <span
                        className={`font-cantataOne text-sm inline float-right mt-1`}
                      >
                        {item.price}
                      </span>
                      <p className={`font-cantataOne  text-sm pt-2 md:w-4/5`}>
                        {item.ingredients}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </Container>
            {d.darkSection && (
              <Fragment>
                <div
                  className={`dark-section absolute left-0 right-0`}
                  style={{ top: "-15px", height: "11px" }}
                ></div>
                <div
                  className={`h-2 dark-section absolute left-0 right-0`}
                  style={{ bottom: "-15px", height: "11px" }}
                ></div>
              </Fragment>
            )}
          </div>
        ))
      )}
    </React.Fragment>
  )
}

export default MenuItemCard

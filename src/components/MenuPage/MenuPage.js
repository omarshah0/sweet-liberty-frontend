import React, { useState, useEffect, useContext } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"

import MenuItemCard from "../MenuItemCard"
import ThemeContext from "../../system/ThemeContext"
import LeafLeft from "../../assets/leaf_left.png"
import LeafRight from "../../assets/leaf_right.png"
import {
  Container,
  Main,
  MenuTitle,
  TabButton,
  PrimaryDealBox,
  SecondaryDealBox,
} from "../UI"
import { createHashName } from "../../utilities"

const MenuPage = () => {
  const { allDatoCmsMenu } = useStaticQuery(graphql`
    query DatoQuery {
      allDatoCmsMenu {
        nodes {
          menuNameNavigation
          menuNameFull
          menuIcon {
            url
          }
          backgroundColor {
            hex
          }
          menu {
            title
            border
            darkSection
            foodItem {
              name
              ingredients
              price
              vegan
              vegetarian
              glutenFree
            }
          }
          dealBoxTop {
            title
            firstPriceTitle
            firstPrice
            secondPriceTitle
            secondPrice
            consumerInformation
          }
          secondMenuTitle
          secondMenu {
            title
            border
            darkSection
            foodItem {
              name
              ingredients
              price
            }
          }
          dealBoxSecondMenu {
            title
            price
          }
        }
      }
    }
  `)
  const tabs = allDatoCmsMenu.nodes
  const { hash } = useLocation()
  const [tab, setTab] = useState(0)
  const { themeHandler, theme } = useContext(ThemeContext)
  const [loading, setLoading] = useState(hash.length !== 0)
  const [first, setFirst] = useState(true)

  console.log("Hash is ", loading)

  useEffect(() => {
    if (hash.length === 0) return
    const index = allDatoCmsMenu.nodes.findIndex(x => {
      const testhash = hash.toLowerCase().replace("#", "")
      const menuName = createHashName(x.menuNameNavigation)
      return menuName === testhash
    })
    if (index === -1) return
    themeHandler(tabs[index].menuNameNavigation)
    setTab(index)
    setLoading(false)
  }, [hash])

  return (
    <Main backgroundColor={tabs[tab].backgroundColor.hex}>
      <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
        <img src={LeafLeft} alt="Sweet Liberty" width="381px" height="824px" />
        <img src={LeafRight} alt="Sweet Liberty" width="220px" height="497px" />
      </div>
      {loading ? (
        <div className="bg-brandPink text-center">
          <h1>Loading</h1>
        </div>
      ) : (
        <Tabs selectedIndex={tab} onSelect={i => setTab(i)}>
          <Container>
            <div className="md:px-36">
              <TabList
                className={`flex gap-4 md:gap-6 justify-between mb-24 pb-4 overflow-x-auto`}
              >
                {React.Children.toArray(
                  tabs.map((t, index) => (
                    <Tab
                      className={`class__${createHashName(
                        t.menuNameNavigation
                      )}__${index === tab ? "active" : ""}`}
                    >
                      <Link to={`#${createHashName(t.menuNameNavigation)}`}>
                        <TabButton
                          title={t.menuNameNavigation}
                          icon={t.menuIcon?.url}
                          isActive={index === tab}
                        />
                      </Link>
                    </Tab>
                  ))
                )}
              </TabList>
            </div>
          </Container>
          <div className=" pb-8 md:pb-12 lg:pb-16">
            {React.Children.toArray(
              tabs.map(t => (
                <TabPanel>
                  <MenuTitle title={t.menuNameFull} className="mb-14" />
                  {t.dealBoxTop[0] && (
                    <PrimaryDealBox className="mb-14" data={t.dealBoxTop[0]} />
                  )}
                  <MenuItemCard data={t.menu} />
                  {t.secondMenuTitle && (
                    <MenuTitle title={t.secondMenuTitle} className="mb-14" />
                  )}
                  {t.dealBoxSecondMenu[0] && (
                    <SecondaryDealBox
                      className="mb-14"
                      data={t.dealBoxSecondMenu[0]}
                    />
                  )}
                  {t.SecondMenu && <MenuItemCard data={t.secondMenu} />}
                  <Container>
                    <div className={"pt-44 text-center font-cantataOne"}>
                      <div className="mb-4 flex justify-center items-center">
                        <div className="flex items-center mr-14">
                          <span
                            className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
                          >
                            V
                          </span>
                          <span className={`text-sm ${theme.infoText}`}>
                            Vegan
                          </span>
                        </div>
                        <div className="flex items-center mr-14">
                          <span
                            className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
                          >
                            Vg
                          </span>
                          <span className={`text-sm ${theme.infoText}`}>
                            Vegetarian
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
                          >
                            Gf
                          </span>
                          <span className={`text-sm ${theme.infoText}`}>
                            Gluten Free
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className={`text-xs ${theme.infoText}`}>
                          Consuming raw or undercooked meats, poultry, seafood,
                          shellfish, or eggs may increase your risk of foodborne
                          illness.
                        </p>
                      </div>
                    </div>
                  </Container>
                </TabPanel>
              ))
            )}
          </div>
        </Tabs>
      )}
    </Main>
  )
}

export default MenuPage

import React, { useState, useEffect, useContext } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useStaticQuery, graphql } from "gatsby"

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
import { nameFormatter } from "../../utilities"

const MenuPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
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
  const [activeTab, setActiveTab] = useState(
    nameFormatter(tabs[0].menuNameNavigation)
  )
  const { themeHandler } = useContext(ThemeContext)
  const [bodyColor, setBodyColor] = useState(tabs[0].backgroundColor.hex)

  const tabClickHandler = (backgroundColor, tabName) => {
    const newName = nameFormatter(tabName)
    setBodyColor(nameFormatter(backgroundColor))
    setActiveTab(`tab__${newName}`)
  }

  useEffect(() => {
    themeHandler(bodyColor)
  }, [bodyColor, themeHandler])

  return (
    <Main backgroundColor={bodyColor}>
      <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
        <img src={LeafLeft} alt="Sweet Liberty" width="381px" height="824px" />
        <img src={LeafRight} alt="Sweet Liberty" width="220px" height="497px" />
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <Container>
          <div className="md:px-36">
            <TabList
              className={`flex gap-4 md:gap-6 justify-between mb-24 pb-4 overflow-x-auto tablist-scrollbar tablist-scrollbar-${activeTab} ${activeTab}`}
            >
              {React.Children.toArray(
                tabs.map(t => (
                  <Tab
                    onClick={() =>
                      tabClickHandler(
                        t.backgroundColor.hex,
                        t.menuNameNavigation
                      )
                    }
                  >
                    <TabButton
                      title={t.menuNameNavigation}
                      icon={t.menuIcon?.url}
                    />
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
              </TabPanel>
            ))
          )}
        </div>
      </Tabs>
    </Main>
  )
}

export default MenuPage

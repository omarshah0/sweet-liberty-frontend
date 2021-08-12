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
  const { allStrapiMenus } = useStaticQuery(graphql`
    query MyQuery($sort: StrapiMenusSortInput = { fields: id }) {
      allStrapiMenus(sort: $sort) {
        nodes {
          MenuNameNavigation
          MenuNameFull
          BackgroundColor
          MenuIcon {
            formats {
              thumbnail {
                url
              }
            }
          }
          SubMenu {
            Border
            DarkSection
            SubMenuTitle
            item {
              Description
              ItemName
              Price
            }
          }
          DealBoxTop {
            Title
            FirstPriceTitle
            FirstPrice
            SecondPriceTitle
            SecondPrice
            ConsumerInformation
          }
          SecondMenuTitle
          SecondMenu {
            Border
            DarkSection
            SubMenuTitle
            item {
              Description
              ItemName
              Price
            }
          }
          DealBoxSecondMenu {
            Name
            Price
          }
        }
      }
    }
  `)
  const tabs = allStrapiMenus.nodes
  const [activeTab, setActiveTab] = useState(
    nameFormatter(tabs[0].MenuNameNavigation)
  )
  const { themeHandler } = useContext(ThemeContext)
  const [bodyColor, setBodyColor] = useState(tabs[0].BackgroundColor)

  const tabClickHandler = (backgroundColor, tabName) => {
    const newName = nameFormatter(tabName)
    setBodyColor(backgroundColor)
    setActiveTab(`tab__${newName}`)
  }

  useEffect(() => {
    themeHandler(bodyColor)
  }, [bodyColor, themeHandler])

  return (
    <Main backgroundColor={bodyColor}>
      <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
        <img src={LeafLeft} alt="Sweet Liberty" />
        <img src={LeafRight} alt="Sweet Liberty" />
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
                      tabClickHandler(t.BackgroundColor, t.MenuNameNavigation)
                    }
                  >
                    <TabButton
                      title={t.MenuNameNavigation}
                      icon={t.MenuIcon?.formats?.thumbnail.url}
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
                <MenuTitle title={t.MenuNameFull} className="mb-14" />
                {t.DealBoxTop && (
                  <PrimaryDealBox className="mb-14" data={t.DealBoxTop} />
                )}
                <MenuItemCard data={t.SubMenu} />
                {t.SecondMenuTitle && (
                  <MenuTitle title={t.SecondMenuTitle} className="mb-14" />
                )}
                {t.DealBoxSecondMenu && (
                  <SecondaryDealBox
                    className="mb-14"
                    data={t.DealBoxSecondMenu}
                  />
                )}
                {t.SecondMenu && <MenuItemCard data={t.SecondMenu} />}
              </TabPanel>
            ))
          )}
        </div>
      </Tabs>
    </Main>
  )
}

export default MenuPage

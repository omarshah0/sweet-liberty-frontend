import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import MenuNav from "../../components/MenuNav"
import MenuItemCard from "../../components/MenuItemCard"
import LeafLeft from "../../assets/leaf_left.png"
import LeafRight from "../../assets/leaf_right.png"
import {
  Container,
  Main,
  MenuTitle,
  PrimaryDealBox,
  SecondaryDealBox,
} from "../../components/UI"

const MenuPage = ({ data: { datoCmsMenu } }) => {
  return (
    <Layout isDark={datoCmsMenu.darkTheme}>
      <Main
        backgroundColor={datoCmsMenu.backgroundColor.hex}
        className={`page__${datoCmsMenu.slug}`}
      >
        <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
          <img
            src={LeafLeft}
            alt="Sweet Liberty"
            width="381px"
            height="824px"
          />
          <img
            src={LeafRight}
            alt="Sweet Liberty"
            width="220px"
            height="497px"
          />
        </div>
        <Container>
          <div className="md:px-36">
            <MenuNav slug={datoCmsMenu.slug} />
          </div>
        </Container>
        <div className="pb-8 md:pb-12 lg:pb-16">
          <MenuTitle title={datoCmsMenu.menuNameFull} className="mb-14" />
          {datoCmsMenu.dealBoxTop[0] && (
            <PrimaryDealBox
              className="mb-14 menu-box-top"
              data={datoCmsMenu.dealBoxTop[0]}
            />
          )}
          <MenuItemCard data={datoCmsMenu.menu} />
          {datoCmsMenu.secondMenuTitle && (
            <MenuTitle title={datoCmsMenu.secondMenuTitle} className="mb-14" />
          )}
          {datoCmsMenu.dealBoxSecondMenu[0] && (
            <SecondaryDealBox
              className="mb-14 menu-box-bottom"
              data={datoCmsMenu.dealBoxSecondMenu[0]}
            />
          )}
          {datoCmsMenu.SecondMenu && (
            <MenuItemCard data={datoCmsMenu.secondMenu} />
          )}
          {/* <Container>
          <div className={"pt-44 text-center font-cantataOne"}>
          <div className="mb-4 flex justify-center items-center">
          <div className="flex items-center mr-14">
          <span
          className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
          >
          V
          </span>
          <span className={`text-sm ${theme.infoText}`}>Vegan</span>
          </div>
          <div className="flex items-center mr-14">
          <span
          className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
          >
          Vg
          </span>
          <span className={`text-sm ${theme.infoText}`}>Vegetarian</span>
          </div>
          <div className="flex items-center">
          <span
          className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] ${theme.vegBg} ${theme.vegText}`}
                >
                Gf
                </span>
                <span className={`text-sm ${theme.infoText}`}>Gluten Free</span>
                </div>
                </div>
                <div>
                <p className={`text-xs ${theme.infoText}`}>
                Consuming raw or undercooked meats, poultry, seafood, shellfish,
                or eggs may increase your risk of foodborne illness.
                </p>
                </div>
                </div>
            </Container> */}
        </div>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsMenu(slug: { eq: $slug }) {
      menuNameNavigation
      menuNameFull
      slug
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
      darkTheme
    }
  }
`

export default MenuPage

import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout"
import MenuNav from "../../components/MenuNav"
import MenuItemCard from "../../components/MenuItemCard"
import {
  Container,
  Main,
  MenuTitle,
  PrimaryDealBox,
  SecondaryDealBox,
} from "../../components/UI"

const types = [
  { shortForm: "v", longForm: "Vegan" },
  {
    shortForm: "vg",
    longForm: "Vegetarian",
  },
  { shortForm: "gf", longForm: "Gluten Free" },
]

const MenuPage = ({ data: { datoCmsMenu } }) => {
  return (
    <Layout isDark={datoCmsMenu.darkTheme}>
      <Main
        backgroundColor={datoCmsMenu.backgroundColor.hex}
        className={`page__${datoCmsMenu.slug}`}
      >
        <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
          <StaticImage
            src="../../assets/leaf_left.png"
            alt="Sweet Liberty"
            className="w-[381px] h-[824px] z-[1]"
            placeholder="blurred"
          />
          <StaticImage
            src="../../assets/leaf_right.png"
            alt="Sweet Liberty"
            className="w-[220px] h-[497px]"
            placeholder="blurred"
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
          <MenuItemCard
            data={datoCmsMenu.menu}
            types={types}
            stylingSlug={datoCmsMenu.slug}
          />
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
            <MenuItemCard
              data={datoCmsMenu.secondMenu}
              types={types}
              stylingSlug={datoCmsMenu.slug}
            />
          )}
          <Container>
            <div className={"pt-44 text-center font-cantataOne"}>
              <div className="mb-4 flex justify-center items-center types-container">
                {React.Children.toArray(
                  types.map(t => (
                    <div className="flex items-center mr-14">
                      <span
                        className={`uppercase font-frankRuhlLibre font-bold text-[8px] py-[3px] px-[10px] rounded-[10px] mr-[10px] type__box__${datoCmsMenu.slug}`}
                      >
                        {t.shortForm}
                      </span>
                      <span
                        className={`text-sm type__text__${datoCmsMenu.slug}`}
                      >
                        {t.longForm}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <div>
                <p className={`text-xs type__text__${datoCmsMenu.slug}`}>
                  Consuming raw or undercooked meats, poultry, seafood,
                  shellfish, or eggs may increase your risk of foodborne
                  illness.
                </p>
              </div>
            </div>
          </Container>
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
          category {
            shortForm
            longForm
          }
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
          category {
            shortForm
            longForm
          }
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

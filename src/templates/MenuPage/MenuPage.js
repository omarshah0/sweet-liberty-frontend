import React, { Fragment, useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/SEO"
import Layout from "../../components/Layout"
import MenuNav from "../../components/MenuNav"
import MenuItemCard from "../../components/MenuItemCard"
import FoodItemImageModal from "../../components/FoodItemImageModal"
import {
  Container,
  Main,
  MenuTitle,
  PrimaryDealBox,
  SecondaryDealBox,
} from "../../components/UI"

const MenuPage = ({ data: { datoCmsMenu, allDatoCmsCategory } }) => {
  const [modal, setModal] = useState({ show: false, image: null })

  const foodMenuClickHandler = image => {
    if (!image) return
    document.body.style.overflow = "hidden"
    setModal({ show: true, image: image })
  }

  const closeModalHandler = () => {
    document.body.style.overflow = "auto"
    setModal({ show: false, image: null })
  }

  return (
    <Fragment>
      <Seo
        title={datoCmsMenu.seo.title + " | Sweet Liberty"}
        description={datoCmsMenu.seo.description}
        twitterCard={datoCmsMenu.seo.twitterCard}
        imageUrl={datoCmsMenu.seo.image.url}
      />
      <Layout
        isDark={datoCmsMenu.darkTheme}
        menuPageDark={datoCmsMenu.darkTheme}
        smallLogo
      >
        <Main
          backgroundColor={datoCmsMenu.backgroundColor?.hex || "#111827"}
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
              stylingSlug={datoCmsMenu.slug}
              onClick={foodMenuClickHandler}
            />
            {datoCmsMenu.secondMenuTitle && (
              <MenuTitle
                title={datoCmsMenu.secondMenuTitle}
                className="mb-14"
              />
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
                stylingSlug={datoCmsMenu.slug}
              />
            )}
            <Container>
              <div className={"pt-44 text-center font-cantataOne"}>
                <div className="mb-4 flex justify-center items-center types-container">
                  {React.Children.toArray(
                    allDatoCmsCategory.nodes.map(t => (
                      <div className="flex flex-wrap items-center mr-14">
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
      {modal.show && modal.image && (
        <FoodItemImageModal
          image={modal.image}
          closeModal={closeModalHandler}
        />
      )}
    </Fragment>
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
          image {
            gatsbyImageData
            alt
          }
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
      seo {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
    allDatoCmsCategory {
      nodes {
        shortForm
        longForm
      }
    }
  }
`

export default MenuPage

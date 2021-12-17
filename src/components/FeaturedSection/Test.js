import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import "./styles.css"

function Test() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.defaults({ overwrite: "auto" })
    gsap.set(".content-wrap", { transformPerspective: 400, z: 0.01 })

    gsap.set(".banner", { visibility: "visible" })

    const tl = gsap.timeline({ defaults: { ease: "none" } })

    ScrollTrigger.create({
      scroller: "#scroll_gsap_omar_container",
      scrub: true,
      animation: tl,
    })

    tl.addLabel("florida", 0)
      .to("#content_florida", 1, { xPercent: -100 }, "florida")
      .to("#content_florida .content-inner", 1, { xPercent: 100 }, "florida")
      .to("#content_florida .featured-coctail", 1, { xPercent: 35 }, "florida")
      .to("#content_florida .txt-top", 1, { xPercent: 20 }, "florida")
      .to("#content_florida .txt-middle", 1, { xPercent: -35 }, "florida")
      .to("#content_florida .txt-bottom", 1, { xPercent: 15 }, "florida")
      .to("#content_florida .coctail", 1, { xPercent: -30 }, "florida")
      .fromTo(
        "#content_florida .coctail",
        1 / 2,
        { backgroundPosition: "-31500px 50%" },
        { backgroundPosition: "0px 50%", repeat: 1, ease: "steps(35)" },
        "florida"
      )
      .fromTo(
        "#content_miami .featured-coctail",
        1,
        { xPercent: -35 },
        { xPercent: 0 },
        "florida"
      )
      .fromTo(
        "#content_miami .txt-top",
        1,
        { xPercent: -20 },
        { xPercent: 0 },
        "florida"
      )
      .fromTo(
        "#content_miami .txt-middle",
        1,
        { xPercent: 35 },
        { xPercent: 0 },
        "florida"
      )
      .fromTo(
        "#content_miami .txt-bottom",
        1,
        { xPercent: -15 },
        { xPercent: 0 },
        "florida"
      )
      .fromTo(
        "#content_miami .coctail",
        1,
        { xPercent: 30 },
        { xPercent: 0 },
        "florida"
      )
      .fromTo(
        "#content_miami .coctail",
        1 / 3,
        { backgroundPosition: "0px 50%" },
        { backgroundPosition: "-28000px 50%", repeat: 2, ease: "steps(35)" },
        "florida"
      )

      .addLabel("miami")
      .to("#content_miami", 1, { xPercent: -100 }, "miami")
      .to("#content_miami .content-inner", 1, { xPercent: 100 }, "miami")
      .to("#content_miami .featured-coctail", 1, { xPercent: 35 }, "miami")
      .to("#content_miami .txt-top", 1, { xPercent: 20 }, "miami")
      .to("#content_miami .txt-middle", 1, { xPercent: -35 }, "miami")
      .to("#content_miami .txt-bottom", 1, { xPercent: 15 }, "miami")
      .to("#content_miami .coctail", 1, { xPercent: -30 }, "miami")
      .fromTo(
        "#content_miami .coctail",
        1 / 3,
        { backgroundPosition: "0px 50%" },
        { backgroundPosition: "-28000px 50%", repeat: 2, ease: "steps(35)" },
        "miami"
      )
      .fromTo(
        "#content_colada .featured-coctail",
        1,
        { xPercent: -35 },
        { xPercent: 0 },
        "miami"
      )
      .fromTo(
        "#content_colada .txt-top",
        1,
        { xPercent: -20 },
        { xPercent: 0 },
        "miami"
      )
      .fromTo(
        "#content_colada .txt-middle",
        1,
        { xPercent: 35 },
        { xPercent: 0 },
        "miami"
      )
      .fromTo(
        "#content_colada .txt-bottom",
        1,
        { xPercent: -15 },
        { xPercent: 0 },
        "miami"
      )
      .fromTo(
        "#content_colada .coctail",
        1,
        { xPercent: 30 },
        { xPercent: 0 },
        "miami"
      )
      .fromTo(
        "#content_colada .coctail",
        1 / 2,
        { backgroundPosition: "-28000px 50%" },
        { backgroundPosition: "0px 50%", repeat: 1, ease: "steps(35)" },
        "miami"
      )
  })

  return (
    <section id="gsap_section">
      <div id="banner" className="banner">
        <div id="scroll_gsap_omar_container">
          <div className="panel" />
          <div className="panel" />
          <div className="panel" />
        </div>
        <div id="animation_gsap_omar_container" className="gsap_omar_container">
          <div id="content_colada" className="content">
            <div className="content-inner">
              <div className="bg" />
              <div className="content-wrap">
                <div className="featured-coctail">FEATURED COCKTAIL</div>
                <div className="coctail-name">
                  <div className="txt-middle">COLADA</div>
                  <div className="txt-top">OUR PINA</div>
                  <div className="txt-bottom">COCKTAIL</div>
                  <div className="ingredients">
                    <span>FORDS GIN </span>
                    <span>• </span>
                    <span>NOILLY PRAT </span>
                    <span>• </span>
                    <span>SEA SALT </span>
                    <span>• </span>
                    <br />
                    <span>BLUE </span>
                    <span>• </span>
                    <span>LEMON GAS EXPLOSION</span>
                  </div>
                </div>
                <div className="coctail" />
              </div>
            </div>
          </div>
          <div id="content_miami" className="content">
            <div className="content-inner">
              <div className="bg" />
              <div className="content-wrap">
                <div className="featured-coctail">FEATURED COCKTAIL</div>
                <div className="coctail-name">
                  <div className="txt-middle">ZOMBIE</div>
                  <div className="txt-top">BLUE</div>
                  <div className="txt-bottom">COCKTAIL</div>
                  <div className="ingredients">
                    <span>PLANTATION 3 STAR </span>
                    <span>• </span>
                    <span>CLAIRIN RUM </span>
                    <span>• </span>
                    <span>BACARDI FALERNUM </span>
                    <span>• </span>
                    <span>ABSINTHE </span>
                    <span>• </span>
                    <span>CINNAMON </span>
                    <span>• </span>
                    <span>PRESSED LIME &amp; GRAPEFRUIT </span>
                    <span>• </span>
                    <span>BLUE</span>
                  </div>
                </div>
                <div className="coctail" />
              </div>
            </div>
          </div>
          <div id="content_florida" className="content">
            <div className="content-inner">
              <div className="bg" />
              <div className="content-wrap">
                <div className="featured-coctail">FEATURED COCKTAIL</div>
                <div className="coctail-name">
                  <div className="txt-middle">FLORIDA</div>
                  <div className="txt-top">THE</div>
                  <div className="txt-bottom">COCKTAIL</div>
                  <div className="ingredients">
                    <span>BACARDI ANEJO </span>
                    <span>• </span>
                    <span>FRESH LIME </span>
                    <span>• </span>
                    <br />
                    <span>FLUFFY PINEAPPLE </span>
                    <span>• </span>
                    <span>CREME DE MENTHE</span>
                  </div>
                </div>
                <div className="coctail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test

import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import "./styles.css"

function Test() {
  function handleResize() {
    ScrollTrigger.refresh(true)
  }
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    var tl = gsap.timeline({ defaults: { ease: "none" } })
    ScrollTrigger.create({
      trigger: ".featured-coctail-section",
      pin: true,
      scrub: true,
      start: "top top",
      end: () => "+=" + window.innerWidth * 3,
      snap: {
        snapTo: [0, 0.5, 1],
        delay: 0,
        duration: { min: 0.5, max: 1.5 },
        inertia: true,
      },
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

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <section className="featured-coctail-section" id="featured">
      <div className="featured-anim-banner">
        <div className="featured-anim-container">
          <div id="content_colada" className="featured-anim-content">
            <div className="content-inner">
              <div className="bg"></div>
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
                <div className="coctail"></div>
              </div>
            </div>
          </div>
          <div id="content_miami" className="featured-anim-content">
            <div className="content-inner">
              <div className="bg"></div>
              <div className="content-wrap">
                <div className="featured-coctail">FEATURED COCKTAIL</div>
                <div className="coctail-name">
                  <div className="txt-middle">ZOMBIE</div>
                  <div className="txt-top">BLUE</div>
                  <div className="txt-bottom">COCKTAIL</div>
                  <div className="ingredients">
                    <span>PLANTATION PINEAPPLE </span>
                    <span>• </span>
                    <span>CRUZAN COCONUT </span>
                    <span>• </span>
                    <span>BACARDI CUATRO </span>
                    <span>• </span>
                    <span>FRESH PINEAPPLE </span>
                    <span>• </span>
                    <span>COCONUT CREAM </span>
                    <span>• </span>
                    <span>JAMAICAN COFFEE </span>
                    <span>• </span>
                    <span>PEDRO XIMENEZ</span>
                  </div>
                </div>
                <div className="coctail"></div>
              </div>
            </div>
          </div>
          <div id="content_florida" className="featured-anim-content">
            <div className="content-inner">
              <div className="bg"></div>
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
                <div className="coctail"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test

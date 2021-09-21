import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"
import Lottie from "react-lottie"

import lottieData from "../../assets/Json/data.json"

import { Container, TitleSolid, TitleStroke } from "../UI"

const PursuingExcellence = () => {
  const [startLottie, setStartLottie] = useState(null)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <section className="relative pb-16">
      <div className="hidden md:inline-block absolute -top-96 left-0">
        <StaticImage
          src="../../assets/pursue_leaf.png"
          alt="Pursue Happiness"
          placeholder="blurred"
        />
      </div>
      <div className="hidden lg:block absolute top-[56rem] -right-20 z-20">
        <StaticImage
          src="../../assets/px_leaf_right.png"
          alt="Sweet Liverty"
          placeholder="blurred"
        />
      </div>
      <Container className="relative z-20">
        <InView threshold={0.3} triggerOnce>
          {({ ref, inView }) => (
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7 }}
              className="font-bebas text-5xl text-center mb-6 text-brandLight leading-none lg:text-pursue xl:w-3/5 xl:text-left xl:ml-40"
            >
              This is sweet liberty. Enjoyed by the tourists, loved by the
              locals
            </motion.h2>
          )}
        </InView>

        <div className="lg:flex items-center  xl:justify-end xl:px-48 mb-11">
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
                className="font-bebas text-2xl text-center lg:text-left mb-6 text-brandLight lg:w-100 lg:mr-8 xl:mr-20"
              >
                Situated in the up-and-coming Collins Park area alongside the
                Bass Art Museum, Sweet Liberty offers guests world-class
                cocktails and creative American food. Conceived and operated by
                award-winning bartender John Lermayer and Dan Binkiewicz along
                with restaurateurS David Martinez and MICHELLE BERNSTEIN, Sweet
                Liberty brings an intelligent selection of food and drink from
                sophisticated to simple to downright delicious.
              </motion.p>
            )}
          </InView>
          <InView threshold={0.3} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-center lg:text-justify"
              >
                <StaticImage
                  src="../../assets/hero-center.png"
                  alt="Sweet Liberty"
                  placeholder="blurred"
                />
              </motion.div>
            )}
          </InView>
        </div>
        <div className="xl:ml-40 relative">
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1.3, ease: "linear" }}
              >
                <StaticImage
                  src="../../assets/pursue-dsc.png"
                  alt="Sweet Liberty Pursuing Excellence"
                  placeholder="blurred"
                />
              </motion.div>
            )}
          </InView>
          <h2 className="font-bebas text-7xl md:text-hero leading-hero text-brandLight relative bottom-6 md:bottom-14 ml-6 md:ml-2 lg:ml-10">
            <InView threshold={0.2} triggerOnce>
              {({ ref, inView }) => (
                <motion.span
                  ref={ref}
                  initial={{ x: -200 }}
                  animate={inView ? { x: 0 } : { x: -200 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleSolid>Pursuing</TitleSolid>
                </motion.span>
              )}
            </InView>
            <br />
            <InView threshold={0.2} triggerOnce>
              {({ ref, inView }) => (
                <motion.span
                  ref={ref}
                  initial={{ x: 200 }}
                  animate={inView ? { x: 0 } : { x: 200 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <TitleStroke className="relative xl:left-80 xl:ml-9 tracking-wide md:tracking-normal">
                    Excellence
                  </TitleStroke>
                </motion.span>
              )}
            </InView>
          </h2>
        </div>
        <div className="md:px-10 lg:px-0 xl:px-40 grid md:grid-cols-2 place-items-center lg:grid-cols-4 relative z-20">
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="relative"
              >
                {/* ----------------------Working Part---------------------- */}
                <span className="absolute top-[-25px] left-0">
                  <Lottie
                    options={defaultOptions}
                    isStopped={startLottie !== "img"}
                    width="220px"
                  />
                </span>
                <StaticImage
                  src="../../assets/timeout.png"
                  alt="Timeout Logo"
                  layout="fixed"
                  placeholder="blurred"
                  onMouseEnter={() => setStartLottie("img")}
                  onMouseLeave={() => setStartLottie(null)}
                  className="cursor-pointer"
                />
              </motion.div>
            )}
          </InView>
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, ease: "linear", delay: 0.3 }}
                className="relative"
              >
                <span className="absolute top-[-20px] left-[-38px]">
                  <Lottie
                    options={defaultOptions}
                    isStopped={startLottie !== "img2"}
                    width="220px"
                  />
                </span>
                <StaticImage
                  src="../../assets/best_bars.png"
                  alt="Best Bars Logo"
                  layout="fixed"
                  placeholder="blurred"
                  onMouseEnter={() => setStartLottie("img2")}
                  onMouseLeave={() => setStartLottie(null)}
                  className="cursor-pointer"
                />
              </motion.div>
            )}
          </InView>
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, ease: "linear", delay: 0.6 }}
                className="relative"
              >
                <span className="absolute top-[-40px] left-[2px]">
                  <Lottie
                    options={defaultOptions}
                    isStopped={startLottie !== "img3"}
                    width="220px"
                  />
                </span>
                <StaticImage
                  src="../../assets/sprited_awards.png"
                  alt="Sprited Awards Logo"
                  layout="fixed"
                  placeholder="blurred"
                  onMouseEnter={() => setStartLottie("img3")}
                  onMouseLeave={() => setStartLottie(null)}
                  className="cursor-pointer"
                />
              </motion.div>
            )}
          </InView>
          <InView threshold={0.2} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, ease: "linear", delay: 0.9 }}
                className="relative"
              >
                <span className="absolute top-[-20px] left-[-38px]">
                  <Lottie
                    options={defaultOptions}
                    isStopped={startLottie !== "img4"}
                    width="220px"
                  />
                </span>
                <StaticImage
                  src="../../assets/tales_of_cocktails.png"
                  alt="Tales of Cocktails Logo"
                  layout="fixed"
                  placeholder="blurred"
                  onMouseEnter={() => setStartLottie("img4")}
                  onMouseLeave={() => setStartLottie(null)}
                  className="cursor-pointer"
                />
              </motion.div>
            )}
          </InView>
          {/* ----------------------Working Part---------------------- */}
        </div>
        <div className="text-center mt-10">
          <p className="font-bebas text-brandLight text-2xl">
            2015 Best New Cocktail Bar
          </p>
          <p className="font-bebas text-brandLight text-2xl">
            2016 Best Cocktail Bar
          </p>
        </div>
      </Container>
      <div className="transform scale-125 absolute -bottom-6 md:-bottom-20 z-10 left-0 right-0">
        <svg
          viewBox="0 0 1440 247"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M-1 0V248.741C-0.099375 248.861 0.80125 248.921 1.76192 248.981C8.12633 250.899 14.791 250 21.0953 247.662C24.878 244.246 28.5405 249.401 31.9629 245.205C37.7269 242.148 43.611 237.173 49.6752 235.495C55.6793 237.653 61.8036 230.46 68.0479 230.52C74.2923 230.161 80.5966 223.927 86.961 228.902C93.3255 220.631 99.81 221.41 106.294 229.142C110.617 229.322 115 223.987 119.323 229.681C127.129 228.662 134.874 232.378 142.62 230.76C150.305 237.533 157.93 229.741 165.556 229.202C173.181 226.025 180.746 238.012 188.251 225.845C195.817 222.968 203.322 215.056 210.827 221.35C218.332 224.047 225.837 224.766 233.343 216.495C236.825 212.719 240.307 217.454 243.79 214.757C249.014 213.198 254.237 217.394 259.461 212.419C264.684 219.012 269.908 214.097 275.132 210.681C279.335 207.864 283.537 208.463 287.68 210.381C294.945 208.703 302.21 205.406 309.475 210.741C316.74 216.854 323.945 214.877 331.211 211.76C338.416 214.457 345.681 209.123 352.946 213.318C360.151 220.031 367.416 210.981 374.681 215.236C378.583 209.782 382.486 218.533 386.329 214.697C392.753 215.895 399.178 214.337 405.482 212.059C411.786 210.441 418.031 207.744 424.215 206.605C430.339 205.706 436.404 201.57 442.348 197.555C446.01 197.734 449.673 189.643 453.395 193.239C457.118 191.681 460.78 195.397 464.503 188.983C468.226 183.409 471.948 187.665 475.731 184.908C479.814 174.119 483.957 184.728 488.039 183.11C493.563 177.655 499.087 179.753 504.611 181.791C510.135 183.349 515.719 183.769 521.302 181.791C526.886 183.649 532.53 188.024 538.174 183.289C541.837 186.466 545.439 181.192 549.042 182.57C553.004 182.39 557.027 182.93 560.99 181.851C565.013 183.349 568.976 176.996 572.998 181.491C580.744 186.946 588.429 181.851 596.114 184.368C603.8 190.002 611.545 184.788 619.23 187.125C626.916 190.122 634.601 190.482 642.286 188.864C649.972 189.403 657.597 192.76 665.282 188.864C672.908 187.065 680.533 184.548 688.158 186.286C691.401 184.968 694.643 189.283 697.885 186.946C702.748 190.062 707.552 188.324 712.355 188.684C717.158 192.939 721.962 187.305 726.705 191.501C729.947 191.501 733.189 189.223 736.432 192.4C739.734 198.034 743.096 188.204 746.519 192.04C753.784 191.92 760.869 189.343 767.894 187.845C774.918 188.624 781.943 185.927 789.028 184.908C796.053 183.829 803.198 188.384 810.403 186.886C814.246 184.968 818.028 192.819 821.871 188.924C825.714 200.312 829.496 185.747 833.339 190.901C839.944 187.725 846.608 190.362 853.213 191.081C859.817 182.99 866.482 185.387 873.026 188.924C875.848 194.618 878.731 193.479 881.492 188.924C884.314 191.681 887.136 189.463 889.958 189.703C897.584 194.198 905.089 191.081 912.534 194.198C919.979 195.217 927.424 202.29 934.93 199.832C942.435 196.655 950 204.687 957.745 202.11C961.408 196.296 965.07 207.444 968.793 202.29C974.317 198.573 979.901 204.447 985.485 201.93C991.068 205.227 996.652 203.968 1002.3 200.791C1006.14 204.328 1009.98 198.034 1013.88 200.611C1017.79 200.851 1021.69 193.119 1025.59 200.611C1033.4 203.249 1041.2 199.053 1049.07 200.731C1056.87 206.425 1064.74 199.772 1072.55 201.151C1080.35 200.731 1088.22 197.135 1096.02 202.17C1099.62 207.684 1103.23 204.807 1106.83 201.99C1114.03 196.356 1121.18 206.845 1128.26 199.652C1135.35 195.097 1142.31 200.671 1149.22 193.778C1152.88 200.012 1156.54 186.466 1160.15 189.823C1163.75 189.283 1167.29 181.551 1170.77 184.608C1174.86 184.848 1179 187.605 1183.08 181.551C1190.23 179.214 1197.37 175.438 1204.52 178.734C1211.66 179.214 1218.75 178.075 1225.89 179.214C1233.04 187.725 1240.18 179.034 1247.39 183.11C1254.59 182.51 1261.8 192.76 1269.06 190.542C1272.84 199.233 1276.69 195.517 1280.53 193.299C1289.12 194.678 1297.82 203.009 1306.53 198.094C1315.23 194.138 1324 198.873 1332.77 201.151C1341.53 198.454 1350.3 209.123 1359 202.889C1367.71 200.012 1376.36 211.7 1384.94 203.728C1389.32 197.015 1393.65 208.343 1398.03 204.088C1404.58 205.107 1411.12 208.883 1417.6 203.488C1424.09 204.208 1430.57 207.205 1437 201.331C1437.96 201.031 1438.92 200.791 1439.88 200.492V0H-1Z"
            fill="#257972"
          />
        </svg>
      </div>
    </section>
  )
}

export default PursuingExcellence

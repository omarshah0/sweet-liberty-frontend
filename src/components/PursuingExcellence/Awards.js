import React from "react"
import { AnimatePresence, motion } from "framer-motion"

const Awards = ({ data }) => {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { ease: "linear" } },
  }
  return (
    <motion.div
      className="px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {data.map((award, index) => (
        <motion.p
          key={index}
          className="font-bebas text-center text-brandLight text-[21px] leading-[28px] md:text-[26px] md:leading-[31px]"
          variants={item}
        >
          {award}
        </motion.p>
      ))}
    </motion.div>
  )
}

export default Awards

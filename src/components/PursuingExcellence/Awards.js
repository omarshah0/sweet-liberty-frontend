import React from "react"
import { motion } from "framer-motion"

const Awards = ({ data }) => {
  return (
    <motion.div
      className="px-6"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {data.map((award, index) => (
        <p
          key={index}
          className="font-bebas text-center text-brandLight text-[21px] leading-[28px] md:text-[26px] md:leading-[31px]"
        >
          {award}
        </p>
      ))}
    </motion.div>
  )
}

export default Awards

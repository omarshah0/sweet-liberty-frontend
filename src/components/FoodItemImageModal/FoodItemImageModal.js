import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const FoodItemImageModal = ({
  closeModal,
  image: { gatsbyImageData, alt },
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 grid place-items-center py-5 px-4 lg:px-10 z-50">
      <div className="relative xl:w-[768px] xl:h-[600px] bg-red-400">
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          className="w-full h-full"
        />
        <button className="absolute right-[-10px] -top-10" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M19.8787 59.7334L59.7338 19.8783"
              stroke="#C0F3D4"
              strokeWidth="5"
            />
            <path
              d="M59.4419 60.1235L19.5868 20.2684"
              stroke="#C0F3D4"
              strokeWidth="5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default FoodItemImageModal

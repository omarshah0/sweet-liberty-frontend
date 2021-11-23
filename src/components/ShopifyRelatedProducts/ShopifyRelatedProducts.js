import React from "react"

const ShopifyRelatedProducts = ({ className }) => {
  return (
    <div className={`font-bebas ${className}`}>
      <h2 className="text-brandPink text-4xl">Related Products</h2>
      <p className="text-brandDark text-lg mb-5">
        Quisque pretium dolor turpis, quis blandit turpis
      </p>
      <div className="mb-8 flex justify-between flex-wrap">
        <ProductCard title="Sweet Tee" price="45" className="mb-8 md:mb-0" />
        <ProductCard
          title="Miami Jacket"
          price="155"
          className="mb-8 md:mb-0"
        />
        <ProductCard title="Snapback" price="99" />
      </div>
    </div>
  )
}

export default ShopifyRelatedProducts

const ProductCard = ({ image, title, price, url, className }) => {
  return (
    <div className={`font-bebas ${className}`}>
      <div className="w-[332px] h-[332px] rounded-3xl overflow-hidden mb-7 bg-gray-300 mx-auto grid place-items-center shadow-2xl">
        <span>Image Goes Here</span>
      </div>
      <p className="text-[50px] leading-none text-brandDark">{title}</p>
      <span className="block text-[33px] text-brandPink">${price}</span>
    </div>
  )
}

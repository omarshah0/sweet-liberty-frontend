// A utility function to convert single object title: 'S / Black' into two key paris, size: "S" and color: "Black"

function shopifyProductVariantNormalize(variants) {
  console.log("SSR Rec ", variants)
  const newArray = []
  variants.map(v => {
    let size = ""
    let color = ""
    let splitTitle = v.title.split("/")
    size = splitTitle[0].replace(/\s+/g, "")
    color = splitTitle[1].replace(/\s+/g, "")
    return newArray.push({ ...v, size, color })
  })

  // A utility function to filter array for duplicates and having no image

  return {
    colorFilter: uniqueArrayByColor(newArray),
    sizeFilter: uniqueArrayBySize(newArray),
  }
}

function uniqueArrayByColor(array) {
  const uniqueArrayByColor = array.filter(
    (v, i, a) => a.findIndex(t => t.color === v.color) === i
  )
  return uniqueArrayByColor
}

function uniqueArrayBySize(array) {
  const uniqueArrayBySize = array.filter(
    (v, i, a) => a.findIndex(t => t.size === v.size) === i
  )
  return uniqueArrayBySize
}

module.exports = shopifyProductVariantNormalize

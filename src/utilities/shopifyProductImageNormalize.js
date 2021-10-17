// A utility function to convert single object title: 'S / Black' into two key paris, size: "S" and color: "Black"

export default function shopifyProductImageNormalize(variants) {
  // A utility function to filter array for having no image
  const duplicatesRemovedArray = variants.filter((thing, index, self) => {
    return index === self.findIndex(t => t.image && thing.image)
  })
  return duplicatesRemovedArray
}

import axios from "axios"

async function getProductVariantQuantity(id) {
  try {
    const req = await axios("/.netlify/functions/getSingleProduct", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { id: id },
    })
    return req
  } catch (e) {
    return e
  }
}

export default getProductVariantQuantity

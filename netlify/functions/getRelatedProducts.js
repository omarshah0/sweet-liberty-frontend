require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const Shopify = require("shopify-api-node")

const client = new Shopify({
  shopName: process.env.SHOPIFY_STORE_URL,
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_ADMIN_PASSWORD,
})

exports.handler = async (event, context) => {
  const productId = "41672418623710"
  const id2 = "7331111174366"
  console.log("Hitting With Bay")
  try {
    const data = await client.productVariant.get(productId)
    console.log("Data is ", data)
    const newData = await client.collectionListing.get(id2)
    console.log("Data is ", newData)
    return {
      statusCode: 200,
      body: JSON.stringify({ data: newData, message: "success" }),
    }
  } catch (e) {
    console.log("Error is ", e)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e }),
    }
  }
}

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
  const { id } = JSON.parse(event.body)
  try {
    const data = await client.productVariant.get(id)
    console.log("Data us ", data)
    return {
      statusCode: 200,
      body: JSON.stringify({ data, data }),
    }
  } catch (e) {
    console.log("Error is ", e)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e }),
    }
  }
}

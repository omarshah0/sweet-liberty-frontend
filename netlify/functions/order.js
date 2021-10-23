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
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Order Placed Successfully" }),
    }
  } catch (e) {
    console.log("Error is ", e)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e }),
    }
  }
}

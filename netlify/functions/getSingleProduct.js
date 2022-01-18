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
    const storefrontId = Buffer.from(data.admin_graphql_api_id).toString(
      "base64"
    )
    return {
      statusCode: 200,
      body: JSON.stringify({ ...data, storefrontId }),
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e }),
    }
  }
}

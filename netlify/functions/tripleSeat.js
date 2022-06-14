const axios = require("axios")

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const url =
    "https://api.tripleseat.com/v1/leads/create.js?lead_form_id=10277&public_key=dcf4a100a65951fea91005e6f6b17fc52ec760cf"
  const res = await axios({
    url: url,
    method: "POST",
    data: data,
  })
  return {
    statusCode: 200,
    body: JSON.stringify({ status: res.status, data: res.data }),
  }
}

const crypto = require("crypto")
const oauth = require("oauth-1.0a")
const request = require("request")

const key = "xkGl9GHIusVM5LZkIuzywFY5RvrJiXVPFYxUexe4"
const secret = "Whi75ecjWEj7tA6h8nL4JymDcZVzBM8mcKD28cWc"

exports.handler = async (event, context) => {
  const booking = {
    id: 333,
    name: "OMAR-API",
    customer_id: null,
    site_id: null,
    location_id: null,
  }

  try {
    const url = `https://api.tripleseat.com/v1/bookings.json?booking=${JSON.stringify(
      booking
    )}`

    console.log("URL IS ", url)

    const request_data = {
      url: url,
      method: "POST",
    }
    const res = await doRequest(request_data)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: res }),
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e }),
    }
  }
}

function doRequest(request_data) {
  const tripleseat = oauth({
    consumer: {
      key: key,
      secret: secret,
    },
    signature_method: "HMAC-SHA1",
    hash_function: function (base, key) {
      return crypto.createHmac("sha1", key).update(base).digest("base64")
    },
  })
  return new Promise(function (resolve, reject) {
    request(
      {
        url: request_data.url,
        method: request_data.method,
        headers: tripleseat.toHeader(tripleseat.authorize(request_data)),
      },
      function (err, res, event) {
        if (err) {
          reject(err)
        }
        resolve(event)
      }
    )
  })
}

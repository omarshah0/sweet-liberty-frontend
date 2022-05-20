const crypto = require("crypto")
const oauth = require("oauth-1.0a")
const request = require("request")

const key = "xkGl9GHIusVM5LZkIuzywFY5RvrJiXVPFYxUexe4"
const secret = "Whi75ecjWEj7tA6h8nL4JymDcZVzBM8mcKD28cWc"

exports.handler = async (event, context) => {
  const booking = {
    id: 9217,
    name: "OMAR-API-CONFIG",
    start_date: "05-16-2023",
    end_date: "05-17-2023",
    status: "PROSPECT",
    customer_id: 5253,
    account_id: 8247996,
    site_id: 5676,
    location_id: 9217,
  }

  try {
    const url = "https://api.tripleseat.com/v1/bookings.json"

    const request_data = {
      url: url,
      method: "POST",
      body: booking,
    }
    const res = await doRequest(request_data)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: JSON.parse(res) }),
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
    const auth = tripleseat.toHeader(tripleseat.authorize(request_data))
    request(
      {
        url: request_data.url,
        method: request_data.method,
        body: JSON.stringify(request_data.body),
        headers: { ...auth, "Content-Type": "application/json" },
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

import axios from "axios"
// import addOAuthInterceptor from "axios-oauth-1.0a"

// Specify the OAuth options
const options = {
  algorithm: "HMAC-SHA1",
  key: "xkGl9GHIusVM5LZkIuzywFY5RvrJiXVPFYxUexe4",
  secret: "Whi75ecjWEj7tA6h8nL4JymDcZVzBM8mcKD28cWc",
}

// Create a client whose requests will be signed
const client = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.tripleseat.com",
  headers: {
    Authorization:
      'OAuth oauth_consumer_key="xkGl9GHIusVM5LZkIuzywFY5RvrJiXVPFYxUexe4",oauth_consumer_secret="Whi75ecjWEj7tA6h8nL4JymDcZVzBM8mcKD28cWc",oauth_signature_method="HMAC-SHA1"',
  },
})

// // Specify the OAuth options
// const options = {
//   algorithm: "HMAC-SHA1",
//   key: "xkGl9GHIusVM5LZkIuzywFY5RvrJiXVPFYxUexe4",
//   secret: "Whi75ecjWEj7tA6h8nL4JymDcZVzBM8mcKD28cWc",
// }

// Add interceptor that signs requests
// addOAuthInterceptor(client, options)

export const testAuth = () => {
  client.get("/oauth/test_request")
}

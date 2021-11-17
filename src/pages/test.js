import React, { useEffect } from "react"
import axios from "axios"

const TestPage = () => {
  useEffect(() => {
    async function callApi() {
      try {
        const req = await axios("/.netlify/functions/getRelatedProducts", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: { id: "Omar Farooq" },
        })
        console.log(req)
      } catch (e) {
        console.log("error is ", e)
      }
    }
    callApi()
  })
  return <div>Calls APi</div>
}

export default TestPage

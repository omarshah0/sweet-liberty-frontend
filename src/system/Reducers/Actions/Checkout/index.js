const ADD_CONTACT_AND_SHIPPING_INFORMATION =
  "ADD_CONTACT_AND_SHIPPING_INFORMATION"
const ADD_SHIPPING_METHOD = "ADD_SHIPPING_METHOD"

export function addInformationMessage(payload) {
  return buildMessage(ADD_CONTACT_AND_SHIPPING_INFORMATION, payload)
}

export function addShippingMethodMessage(payload) {
  return buildMessage(ADD_SHIPPING_METHOD, payload)
}

function buildMessage(type, payload) {
  return { type, payload }
}

const messageHandlers = {
  [ADD_CONTACT_AND_SHIPPING_INFORMATION]: addInformation,
  [ADD_SHIPPING_METHOD]: addShippingMethod,
}

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type]

  if (!handler) return state

  return handler(state, payload)
}

function addInformation(state, payload) {
  console.log("Information Method Payload ", payload)
  return state
}

function addShippingMethod(state, payload) {
  console.log("Shipping Method Payload ", payload)
  return state
}

const initialState = {
  checkout: {
    contactInformation: {
      emailOrMobile: "",
    },
    shippingAddress: {
      countryRegion: "",
      streetAddress: "",
      houseNumber: "",
      townCity: "",
      state: "",
      zip: "",
    },
    shippingMethod: {
      name: "economy",
      price: 0,
    },
  },
}

export function checkoutReducer(state = initialState, action) {
  if (!action) return state

  return handleMessage(state, action)
}

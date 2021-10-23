const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const UPDATE_QUANTITY = "UPDATE_QUANTITY"

export function addToCartMessage(product, count) {
  return buildMessage(ADD_TO_CART, { product, count })
}

export function removeFromCartMessage(productId) {
  return buildMessage(REMOVE_FROM_CART, { productId })
}

export function updateQuantityMessage(productId, quantity) {
  return buildMessage(UPDATE_QUANTITY, { productId, quantity })
}

function buildMessage(type, payload) {
  return { type, payload }
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [UPDATE_QUANTITY]: updateQuantity,
}

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type]

  if (!handler) return state

  return handler(state, payload)
}

function addToCart(state, product) {
  const filterArrayById = state.products.filter(p => p.id !== product.id)
  const updatedArray = [...filterArrayById, product]

  ///

  return {
    ...state,
    products: updatedArray,
  }
}

function removeFromCart(state, id) {
  const updatedArray = state.products.filter(p => p.id !== id)

  return {
    ...state,
    products: updatedArray,
  }
}

function updateQuantity(state, { id, quantity }) {
  const updatedArray = state.products.map(p => {
    if (p.id === id) {
      p.quantity = quantity
    }
    return p
  })

  return {
    ...state,
    products: updatedArray,
  }
}

const initialState = {
  products: [],
}

export function cartReducer(state = initialState, action) {
  if (!action) return state

  return handleMessage(state, action)
}

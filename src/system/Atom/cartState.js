import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const localStorage =
  typeof window !== `undefined` ? require("node-localstorage") : null

const { persistAtom } = recoilPersist({
  key: "recoil-seet-liberty-shopping-cart", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
})

const cartState = atom({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export default cartState

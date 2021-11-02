import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { LocalStorage } from "node-localstorage"

const localStoragePolyfill =
  typeof window === `undefined` ? new LocalStorage("./node") : localStorage

const { persistAtom } = recoilPersist({
  key: "recoil-seet-liberty-shopping-cart", // this key is using to store data in local storage
  storage: localStoragePolyfill, // configurate which stroage will be used to store the data
})

const cartState = atom({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export default cartState

import React from "react"
import PropTypes from "prop-types"
import { RecoilRoot } from "recoil"

export default function ReduxWrapper({ element }) {
  return <RecoilRoot>{element}</RecoilRoot>
}

ReduxWrapper.propTypes = {
  element: PropTypes.node,
}

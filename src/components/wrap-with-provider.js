import React, { useEffect } from "react"
import gsap from "gsap"
import { Provider } from "react-redux"

import store from "../store/store"

// eslint-disable-next-line react/display-name,react/prop-types
const WrapWithProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}

export default WrapWithProvider
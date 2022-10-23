const { useState } = require("react")

const useForceUpdate = () => {
  const [state, setState] = useState(0)
  return () => setState((state) => state + 1)
}

export default useForceUpdate

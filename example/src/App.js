import React, { useRef, useCallback } from 'react'
import { useOuterClickNotifier } from 'use-outer-click-notifier'

const App = () => {
  const innerRef = useRef(null)
  const handleOuterClick = useCallback(
    // memorized callback for optimized performance
    e => {
      window.alert('outside click')
    },
    [] // adjust deps to your needs
  )
  useOuterClickNotifier(handleOuterClick, innerRef)
  return (
    <div>
      <div ref={innerRef} style={{ width: 100, height: 100 }} />
    </div>
  )
}
export default App

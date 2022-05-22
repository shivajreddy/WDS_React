import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const func21 = () => {
    setCount((cs) => {
      console.log(cs)
      return cs + 1
    })
  }
  return (
    <>
      <div>Counter</div>
      <h2>Count = {count}</h2>
      <button onClick={func21}>+</button>
    </>
  )
}

export default Counter
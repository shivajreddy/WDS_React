import React, { useState } from 'react'


function Counter() {

  const [curr_state, setState] = useState({ count: 0, theme: 'blue' })

  const func21 = () => {
    setState(prevState => {
      console.log(prevState)
      return { ...prevState, count: prevState.count + 1 }
    });
  }
  return (
    <>
      <div>Counter</div>
      <h2>Count = {curr_state.count}{curr_state.theme}</h2>
      <button onClick={func21}>+</button>
    </>
  )
}

export default Counter

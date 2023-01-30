import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counterSlice'

// Now we can use the React Redux hooks to let React components interact with 
// the Redux store. We can read data from the store with useSelector, and dispatch 
// actions using useDispatch. Create a src/features/counter/Counter.js file with 
// a <Counter> component inside, then import that component into App.js and render 
// it inside of <App>.

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>The Count Value is {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
    </div>
  )
}

export default App

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../actions"

function CounterApp() {
    const dispatch=useDispatch()
    const stateValue=useSelector((state)=>state)
  return (
    <>
    
      <h1>Counter App using redux</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <p>{ stateValue}</p>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  )
}

export default CounterApp
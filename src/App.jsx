import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementOnNumber } from "./reduxToolKit/features/counterSlice";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);

  return (

    <>
      <h1>{count}</h1>

      <input type="number" value={num} onChange={(e) =>{setNum(e.target.value)}}/>

      <button
        onClick={() => {
          dispatch(increment())
        }}>
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement())
        }}>
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(incrementOnNumber(Number(num)))
        }}>
        Increment on Input
      </button>
    </>
  )
}

export default App

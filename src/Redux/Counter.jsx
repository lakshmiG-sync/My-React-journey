import {React,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount,reset } from './counterSlice';
function Counter() {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    const[amount,setAmount]=useState(5); //local state
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>
            +
        </button>
        <button onClick={()=>dispatch(decrement())}>
            -
        </button>
        <div>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=>dispatch(incrementByAmount(amount))}>Add amount</button> {/* Global state */}
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
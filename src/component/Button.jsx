import React,{useState} from 'react'

function Button() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>👌</button>
    </div>
  )
}

export default Button
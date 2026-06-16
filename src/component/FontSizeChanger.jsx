import React,{useState} from 'react'

function FontSizeChanger() {
    const [size,setSize]=useState(10)
  return (
    <div>
        <p style={{fontSize:`${size}px`}}>Welcome to kce</p>
        <button onClick={()=>setSize(size+2)}>➕</button>
        <button onClick={()=>setSize(size-2)}>➖</button>
    </div>
  )
}

export default FontSizeChanger
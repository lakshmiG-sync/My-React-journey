import React,{useState} from 'react'

function State() {
    const[name,setName]=useState('tamil')
  return (
    <div>
        <input type='text'
      placeholder='Enter name'
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
        <p>Hello! {name}</p>
    </div>
  )
}

export default State
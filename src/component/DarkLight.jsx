import React,{useState} from 'react'

function DarkLight() {
    const[mode,setMode]=useState(false)
  return (
    <div style={{backgroundColor:mode?"black":"white",color:mode?"white":"black",height:"100vh"}}>
        <button onClick={()=>setMode(!mode)}>
            Dark
        </button>
    </div>
  )
}

export default DarkLight
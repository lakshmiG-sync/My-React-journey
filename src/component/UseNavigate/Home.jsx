import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    const[regno,setRegno]=useState("");
    const[error,setError]=useState("");
    const searchResult=(e)=>{
        e.preventDefault();
        if(regno.trim()==""){
            setError("Please provide register number");
        }
        navigate(`/result/${regno}`)
    }
  return (
    <div>
        <h1>Karpagam college of engineering</h1>
        <h2>Student Result Portal</h2>
        <form>
            <input type="text" value={regno}
                placeholder="Enter register number"
                onChange={(e)=>setRegno(e.target.value)}
            />
            <br></br>
            <button onClick={searchResult}>View Result</button>
        </form>
    </div>
  )
}

export default Home
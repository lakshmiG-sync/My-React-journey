import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function PasswordChecker() {
    const[pass,setPass]=useState("");
    const[msg,setMsg]=useState("");
    useEffect(()=>{
        if(pass.length==0){
            setMsg("");
        }
        else if(pass.length<8){
            setMsg("Too Short");
        }
        else{
            setMsg("Good password");
        }
    },[pass])
  return (
    <div>
        <input type='password' placeholder='Enter password'
        value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <p>{msg}</p>
    </div>
  )
}

export default PasswordChecker
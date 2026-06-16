import React,{useState} from 'react'
import { useEffect } from 'react';

function FetchUser() {
    const[user,setUser]=useState([]); //as the input is array type
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users") //fake Api objects
        .then(res=>res.json())   // the values to json
        .then(data=>setUser(data)) // then to the user
    },[])
    return (
    <div>
        <table style={{border:"1"}}>
            <tr>
            <th>User Name</th>
            <th>email</th>
            <th>address</th>
            </tr>
        {user.map((u,index)=>{
            return(
            <tr key={index}>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.address.street}</td>
            </tr>
            ); 
        })}
        </table>
    </div>
  )
}

export default FetchUser
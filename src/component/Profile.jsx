import React,{useState} from 'react'

function Profile() {
    const[user,setUser]=useState({name:'',age:''})
  return (
    <div>
        <input type='text' 
        placeholder='Enter name' 
        onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <input type='text' placeholder='Enter age' onChange={(e)=>setUser({...user,age:e.target.value})}/>        
        <p>{user.name} {user.age}</p>
    </div>
  )
}

export default Profile
import React, { useState } from 'react'

function UserRegistration() {
    const[user,setUser]=useState(
       { first_name:"",
        last_name:"",
        email:"",
        dob:"",
        mobile:0,
        course:"",
        duration:""
})
const[loading,setLoading]=useState(false)
const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
}
  return (
    <div>
        {!loading?(
            <>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Online Course Registration Form</h1>
                <div className='divcontainer'>
                    <div className=''>
                        <label > First Name </label>
                        <br></br><input type='text' placeholder='Enter Your First Name' onChange={(e)=>setUser({...user,first_name:e.target.value})}/>
                    </div>
                    <div>
                        <label > Last Name </label>
                        <br></br><input type='text' placeholder='Enter Your Last Name' onChange={(e)=>setUser({...user,last_name:e.target.value})}/>
                    </div>
                </div>
                <div className='mainContent'>
                    <label > Email </label>
                    <input type='email' placeholder='Email Address' onChange={(e)=>setUser({...user,email:e.target.value})}/>
                    <br></br><label > Date of Birth </label>
                    <input type='date' onChange={(e)=>setUser({...user,dob:e.target.value})}/>
                    <br/><br/><label > Phone/Moblie </label>
                    <input type='tel' placeholder='Mobile Number' onChange={(e)=>setUser({...user,mobile:e.target.value})}/>
                    <br/><br/><label > Choose the course you want to enroll in </label>
                    <select  onChange={(e)=>setUser({...user,course:e.target.value})}>
                        <option value="select">--select--</option>
                        <option value="JAVA APPLICATION">Java Application</option>
                    </select>
                    <br></br><label>Preferred Course Duration</label>
                    <div>
                        <input type='radio' value="6 months"  onChange={(e)=>setUser({...user,duration:e.target.value})}/> 6 Months
                        <br></br><input type='radio'value="12 months" onChange={(e)=>setUser({...user,duration:e.target.value})}/> 12 Months
                    </div>
                </div>
                <input type='submit' value="Apply To Enroll"/>
            </form>
            </>
        ):(
            <>
            <div>
                <h1>User Details</h1>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>Email: {user.email}</p>
                <p>DOB: {user.dob}</p>
                <p>Phone/Mobile: {user.mobile}</p>
                <p>Course: {user.course}</p>
                <p>Duration: {user.duration}</p>
            </div>
            </>
        )}
    </div>
  )
}

export default UserRegistration
import React from 'react'
import bmw from '../assets/bmw.jpg'
function Car() {
  const car={
        name:"BMW",
        color:"red",
        model:"LXI 2025",
        pic:bmw
    }
  return (
    <div>
        <h1>Car Details</h1>
        <img src={car.pic} height="150px" width="200px"></img>
        <p>name:{car.name}</p>
        <p>color:{car.color}</p>
        <p>model:{car.model}</p>
    </div>
  )
}

export default Car
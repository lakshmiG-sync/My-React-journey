import React from 'react'

function Welcome(props) {
    const college="KCE"
  return (
    <div>
        <h1>Welcome to {college}</h1>
        <h5>Name : {props.name}, Department : {props.dept}</h5>
    </div>
  )
}

export default Welcome
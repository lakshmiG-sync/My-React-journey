import React from 'react'

function Courses() {
    const course=["java","react","ds"]
  return (
    <div>Courses
        <ul>
            {course.map((c,index)=>(
                <li key={index}>{c}</li>
            ))}
        </ul>
    </div>
  )
}

export default Courses
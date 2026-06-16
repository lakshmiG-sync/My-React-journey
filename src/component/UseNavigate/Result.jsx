import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import students from './students';
function Result() {
    const {regno}=useParams();
    const navigate=useNavigate();
    const student=students.find(
        (stud)=>stud.regno===regno
    )
    if(!student){
        return(
        <div>
            <h2>Student Not found</h2>
            <button onClick={()=>navigate('/')}>Back to Home</button>
        </div>
        )
    }
   
  return (
    <div>
        <h1>Student Result</h1>
        <h2>Name: {student.name}</h2>
        <h2>Year: {student.year}</h2>
        <h2>Dept: {student.dept}</h2>
        <div style={{display:"flex", flexDirection:"column" }}>
            <table style={{border:"1px solid black"}}>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
                    {
                        student.subjects.map((sub,index)=>(
                            <tr>
                                <td>{sub.name}</td>
                                <td>{sub.mark}</td>
                            </tr>
                        ))
                    }
            </table>
        </div>
        <button onClick={()=>navigate(`/`)}>Back to home</button>
    </div>
  )
}

export default Result
import React from 'react'
import { frie } from './frie'
function Fries() {
  return (
    <div>
      <h1  style={{fontSize:"30px",color:'rgb(239, 144, 19)',position:"left",fontWeight:"bold"}}>Fries</h1>
      <div className='container' style={{flexWrap:"wrap"}}>
          {frie.map((fri,index)=>(
          <div key={index} style={{display:"flex",flexDirection:"row",border:"1px solid white",boxShadow:"2px 3px 10px black",padding:"5px",borderRadius:"10px",width:"380px",alignItems: "space-between"}} >
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-around",margin:"10px",width:"200px",height:"px",padding:"0px 0px 0px 0px"}}>
                <h2 style={{fontSize:"20px"}}>{fri.name}</h2>
                <p style={{fontSize:"12px"}}>{fri.content}</p>
                <p style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>{fri.price}</p>
            </div> 
            <div style={{
              width: "130px",
              height: "130px", 
              backgroundImage: `url(${fri.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              margin:"10px",
              boxSizing: "border-box",
            }}></div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Fries
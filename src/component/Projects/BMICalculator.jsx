import React, { useState } from 'react';

function BMICalculator() {
  const[height,setHeight]=useState('');
  const[weight,setWeight]=useState('');
  const[value,setValue]=useState(null);
  const[Status,setStatus]=useState('');
  const[urll,setUrll]=useState('');

  const calculateBMI=()=>{
    const h=height/100;
    const w=weight;
    const Val=w/(h * h);
    setValue(Val.toFixed(2)); 
    if(Val<18.5){
        setUrll("https://tse3.mm.bing.net/th/id/OIP.yK9DTFG67dgzmIACXiUl5gHaLW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"); 
        setStatus("Under Weight");
      }else if(Val>=18.5 && Val<=24.9){
        setUrll("https://th.bing.com/th/id/OIP.6rfSmCqQwRxsAChPyzCrXQHaH0?w=178&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"); 
        setStatus("Normal Weight");
      }else if(Val>=25 && Val<=29.9){
        setUrll("https://th.bing.com/th/id/OIP.hileC2tqHBArVVqM3wi3IgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"); 
        setStatus("Over Weight");
      }
      else{
        setUrll("https://th.bing.com/th/id/OIP.hileC2tqHBArVVqM3wi3IgHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3");
        setStatus("Obesity")
      }
    };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>BMI CALCULATOR</h2>
      <div className='container'>
        {!value ? (
          <>
            <input 
              type='number' 
              placeholder='Enter height' 
              value={height}
              onChange={(e)=>setHeight(e.target.value)} 
              style={{ width: "200px", margin: "5px", padding: "5px" }}
            />
            <input 
              type='number' 
              placeholder='Enter weight'
              value={weight}
              onChange={(e)=>setWeight(e.target.value)} 
              style={{ width: "200px", margin: "5px", padding: "5px" }}
            />
            <button onClick={calculateBMI} style={{ width: "120px", margin: "10px", padding: "5px" }}>
              Calculate BMI
            </button>
            </>
        ) : (
          <>
            <h3>BMI: {value}</h3>
            {Status && <h2>Status: {Status}</h2>}  
            {urll && <img src={urll} alt="BMI Status" style={{ marginTop: "20px", display: "block", marginLeft: "auto", marginRight: "auto", width:"100px", height:"150px" }} />}
                    
          </>
        )}
        
      </div>
    </div>
  );
}

export default BMICalculator;
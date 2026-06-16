import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [value, setValue] = useState(null);
  const [urll, setUrll] = useState('');

  const calculateBMI = () => {
    const h = height/ 100;
    const w = weight;
    const value = w / (h * h);
    setBmi(value.toFixed(1)); 
    if (value < 18.5) {
        setUrll("https://tse3.mm.bing.net/th/id/OIP.yK9DTFG67dgzmIACXiUl5gHaLW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"); 
      } else if (value >= 18.5 && value < 24.9) {
        setUrll("https://th.bing.com/th/id/OIP.6rfSmCqQwRxsAChPyzCrXQHaH0?w=178&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"); 
      } else {
        setUrll("https://th.bing.com/th/id/OIP.hileC2tqHBArVVqM3wi3IgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"); 
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
              placeholder='Enter height (cm)' 
              value={height}
              onChange={(e) => setHeight(e.target.value)} 
              style={{ width: "200px", margin: "5px", padding: "5px" }}
            />
            <input 
              type='number' 
              placeholder='Enter weight (kg)'
              value={weight}
              onChange={(e) => setWeight(e.target.value)} 
              style={{ width: "200px", margin: "5px", padding: "5px" }}
            />
            <button onClick={calculateBMI} style={{ width: "120px", margin: "10px", padding: "5px", cursor: "pointer" }}>
              Calculate BMI
            </button>
            </>
        ) : (
          <>
            <h3>Your BMI: {bmi}</h3>
            {urll && <img src={urll} alt="BMI Status" style={{ marginTop: "20px", display: "block", marginLeft: "auto", marginRight: "auto", width:"100px", height:"150px" }} />}
          </>
        )}
        
      </div>
    </div>
  );
}

export default BMICalculator;
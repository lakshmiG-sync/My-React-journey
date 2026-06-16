import React from 'react';
import {cars} from './cars';
import '../App.css'
function Car1() {
  return (
    <div className="container">
      {cars.map((car, index) => (
        <div key={index} className="car-card">
          <article><h2>{car.name}</h2>
          <img src={car.url} alt={car.name} style={{ width: '150px',height:"200px", borderRadius: '8px' }} />
          <p><strong>Color:</strong> {car.color}</p>
          <p><strong>Price:</strong> {car.price}</p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Car1;
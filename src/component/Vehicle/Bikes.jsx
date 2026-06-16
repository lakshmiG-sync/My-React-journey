import React from 'react'
import { bike } from './bike'
function Bikes() {
  return (
    <div className="container">
          {bike.map((b, index) => (
            <div key={index} className="car-card">
              <article><h2>{b.name}</h2>
              <img src={b.url} alt={b.name} style={{ width: '150px',height:"200px", borderRadius: '8px' }} />
              <p><strong>Color:</strong> {b.color}</p>
              <p><strong>Price:</strong> {b.price}</p>
              </article>
            </div>
          ))}
    </div>
  )
}

export default Bikes
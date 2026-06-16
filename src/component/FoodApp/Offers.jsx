import React from 'react'

function Offers() {
  return (
    <div className='container'>
        <div style={{
            width: "300px",
            height: "200px", 
            backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(3, 8, 29, 0.85) 100%), url(https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.jpg?b=1&s=612x612&w=0&k=20&c=UiqM76EUPIKf0_dngsgutOGn8gLE37hVxowsK-o2GD8=)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            display: "flex", 
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            boxSizing: "border-box"
        }}>
            <div>
                <p style={{ 
                    color: "#fc8019", 
                    margin: 0, 
                    fontSize: "14px", 
                    fontWeight: "600" 
                }}>
                    McDonald's East London
                </p>
                <h2 style={{ 
                    color: "white", 
                    margin: "5px 0 0 0", 
                    fontSize: "24px", 
                    fontWeight: "bold",
                    letterSpacing: "-0.2px"
                }}>
                    First Order Discount
                </h2>
            </div>
        </div>
        <div style={{
            width: "300px",
            height: "200px", 
            backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(3, 8, 29, 0.85) 100%), url(https://images.pexels.com/photos/3184182/pexels-photo-3184182.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            display: "flex", 
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            boxSizing: "border-box"
        }}>
            <div>
                <p style={{ 
                    color: "#fc8019", 
                    margin: 0, 
                    fontSize: "14px", 
                    fontWeight: "600" 
                }}>
                    McDonald's East London
                </p>
                <h2 style={{ 
                    color: "white", 
                    margin: "5px 0 0 0", 
                    fontSize: "24px", 
                    fontWeight: "bold",
                    letterSpacing: "-0.2px"
                }}>
                    Vegan Discount
                </h2>
            </div>
        </div>
        <div style={{
            width: "300px",
            height: "200px", 
            backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(3, 8, 29, 0.85) 100%), url(https://images.pexels.com/photos/4698506/pexels-photo-4698506.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            display: "flex", 
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            boxSizing: "border-box"
        }}>
            <div>
                <p style={{ 
                    color: "#fc8019", 
                    margin: 0, 
                    fontSize: "14px", 
                    fontWeight: "600" 
                }}>
                    McDonald's East London
                </p>
                <h2 style={{ 
                    color: "white", 
                    margin: "5px 0 0 0", 
                    fontSize: "24px", 
                    fontWeight: "bold",
                    letterSpacing: "-0.2px"
                }}>
                    Free ice Cream Offer
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Offers
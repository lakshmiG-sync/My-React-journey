import React from 'react'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
function FoodOrderFront() {
  return (
    <div>
        <div style={{display:"flex",justifyItems:"",border:"1px solid grey",flexDirection:"row",justifyContent:"space-around",margin:"20px",padding:"20px",alignItems:"left",borderRadius:"10px"}}>
            <p style={{fontSize:"10px",fontWeight:"bold"}}>Get 5% Off your first order,<u style={{color:'rgb(239, 144, 19)',fontWeight:'bold'}}>Promo:ORDER5</u></p>
            <p style={{fontSize:"10px",fontWeight:"bold"}}>Regent Street,A4,A4201, London <u style={{color:'rgb(239, 144, 19)'}}>Change Location</u></p>
        </div>
    </div>
  )
}

export default FoodOrderFront
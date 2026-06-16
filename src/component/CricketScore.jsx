import React,{useState} from 'react'
import { useEffect } from 'react';

function CricketScore() {
    const[runs,setRuns]=useState(0);
    const[overs,setOvers]=useState(0);
    const[wickets,setWickets]=useState(0);
    const[matchStatus,setMatchStatus]=useState("Live");
    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setRuns((prevRuns)=>prevRuns+Math.floor(Math.random()*7));
            if(Math.random()>0.8){
                setWickets((prevWickets)=>prevWickets+1);
            }
            setOvers((prevOvers)=>(prevOvers+0.5).toFixed(2));
        },2000);
        return()=>clearInterval(intervalID);
    },[]);
  return (
    <div>
        <h1>🏏Cricket Score Update</h1>
        <h2>Status: {matchStatus}</h2>
        <div>
            <h3>India vs Australia</h3>
            <p><strong>Runs:</strong> {runs}</p>
            <p><strong>Overs:</strong> {overs}</p>
            <p><strong>Wickets:</strong>{wickets}</p>
        </div>
    </div>
  )
}

export default CricketScore

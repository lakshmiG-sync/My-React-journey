import React from 'react'

function mapConcepts() {
    const myList=[1,2,3,4,5];
  return (
    <div>
        {myList.map((num)=><p>{num*2}</p>)}
    </div>
  )
}

export default mapConcepts
import React, { useState } from 'react'
import './progressBar.css'
const ProgressBar = () => {
    const [state,setState] = useState(0)
    console.log(state)
  return (
    <div className='container'>
         <div className='progressBar'>
        <div className={`innerProgress`} style={{width:state}}>
                <p>{state}</p>
        </div>
    </div>
    <button onClick = {()=>{
        setState(prev=>prev+10)
    }}>start</button>
    </div>
  )
}

export default ProgressBar
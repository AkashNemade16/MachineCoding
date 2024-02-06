import React,{FC, useState,useEffect} from 'react'
import './progressBar.css'
const ProgressBar:FC  = () => {
    const [state,setState] = useState<any>([])
    const [counter,setCounter] = useState<number>(0)
    useEffect(() => { 
        if(counter < 100){
            const interval = setInterval(() => {
                setCounter(counter + 1)
            },100)
            return () => clearInterval(interval)
        }
     },[counter])
        
    const handleClick = () => {
        setState([...state,{
            id:Date.now(),
            counter:counter
        }])
        setCounter((counter) => counter= 0)
    }
    
    console.log(state)
    console.log(counter)
  return (
    <div>
        <button onClick={handleClick} className='progressBar__button'>Add ProgressBar</button>
            {state ? state.map((item:any,index:any) => {
                return <div key={item.id} className='progressBar'>
                    <div className='progressBar__progress' style={{width:`${counter}%`}}>
                        <p>{state.counter}</p>
                    </div>
                    </div>
            }):null}
    </div>
    
  )
}

export default ProgressBar
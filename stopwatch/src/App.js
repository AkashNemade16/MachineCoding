
import React,{useState,useRef} from 'react';
import './App.css';

function App() {
  const [time,setTime] = useState(Date.now());
  const [now] = useState(Date.now())
  const intervalRef = useRef(null)
  const handleStart = () => {
    intervalRef.current = setInterval(()=>{
      setTime(Date.now())
    },10)
}
let timePassed = (time-now)/1000
const handleStop = () => {
  clearInterval(intervalRef.current)
}
  
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className='stopwatch_container'>
      <div className='time_display'>
              <h1>{timePassed.toFixed(3)}</h1>
          </div>
        <div className='buttons'>
          <button onClick={handleStart}>start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default App;

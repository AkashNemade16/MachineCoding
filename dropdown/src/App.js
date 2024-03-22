import React,{useState} from 'react'
import './App.css';


function App() {
  const [value,setValue] = useState('First')
  console.log(value)
  return (
    <div className="App">
      <select onChange={(e)=>setValue(e.target.value)}>
        <option >First</option>
        <option >Second</option>
        <option >Third</option>
        <option >Fourth</option>
      </select>
    </div>
  );
}

export default App;

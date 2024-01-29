import './App.css';
import {useState} from 'react';
function App() {
  const [flightOptions,setFlightOptions]= useState('one way flight');
  return (
    <div className="App">
    <form>
      <select value={flightOptions} name='flights' id='flight' onChange={(event)=>setFlightOptions(event.target.value)}>
        <option value={'One way flight'}>One way flight</option>
        <option value={'Return flight'}>Return flight</option>
      </select>
    </form>
    </div>
  );
}

export default App;
      
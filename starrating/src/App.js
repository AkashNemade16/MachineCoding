import { useState } from 'react';
import './App.css';
import Starrating from './Starrating';
function App() {
  const [rating,setRating] = useState(3)
  return (
    <div className="App">
      <Starrating
       value={rating}
       max = {5}
       onChange={setRating}
      />
    </div>
  );
}

export default App;

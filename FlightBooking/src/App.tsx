import { useState } from 'react';
import './App.css';
const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;
function formatDate(date: Date) { // Update the type of the parameter to Date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
}
function App() {
  const [flight, setFlight] = useState('one-way');
  const [date,setDate] = useState(formatDate(new Date(Date.now() + DAY_IN_SECONDS)));
  const [returnDate,setReturnDate] = useState(date);

  console.log(flight);
  console.log(date);
  
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      if(flight === 'one-way'){
        alert(`You have booked a one way flight on ${date}`);
      }else{
        alert(`You have booked a two way flight on ${date} and return date is ${returnDate}`);
      }
      console.log('form submitted');
    }}>
    <div className="App">
        FlightBooking
        <div className='flight'>
          <div className='option'>
            <select className='select' value={flight} onChange={(e)=>setFlight(e.target.value)} >
              <option value='one-way' >One-way-flight</option>
              <option value='two-way'>Two-way-flight</option>
            </select>
          </div>
           <div>
          <input value={date} onChange={(e)=>setDate(e.target.value)}  className='input1' type='date' min={TODAY}/>
          </div>
          {
            flight === 'two-way' && (
              <div>
                <input value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className='input1' type='date'/>
              </div>
            )
          }
          <div className='button'>
            <button className='button'>Book</button>
          </div>
        </div>
    </div>
    </form>
  );
}

export default App;

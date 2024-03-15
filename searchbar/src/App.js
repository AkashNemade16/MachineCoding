import {useState} from 'react'
function App() {
  const [value, setValue] = useState('');
  const data = [
    'apple',
    'banana',
    'mango',
    'orange',
    'strawberry'
  ];
 const search = data.filter((item)=>(item.includes(value)))
  return (
    <div className="App">
      <input placeholder='Please type to search' value={value} onChange={(e) => setValue(e.target.value)} />
      {search}
    </div>
  );
}

export default App;

import './App.css';
import Accordin from './Accordin';
function App() {
  const items = [
    {
      title: 'Item 1',
      content: 'Content for Item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for Item 2',
    },
    {
      title: 'Item 3',
      content: 'Content for Item 3',
    },
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordin items={items} />
    </div>
  );
}

export default App;

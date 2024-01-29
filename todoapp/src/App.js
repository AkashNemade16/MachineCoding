import React,{useState} from 'react';
import './App.css';

function App() {
  const [todo,setTodo] = useState([]);
  const [newTodo,setNewTodo] = useState('');
  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }
  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo)=>
      todo.id!==id
    ))
  }

  const toggleTodo = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodo([...todo, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo('');
      }
    };

  console.log(todo)
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
        type='text'
          value={newTodo}
          placeholder='please add a todo' 
          onChange={handleChange}       
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div>
        {
          todo.map((item)=>(
            <li key={item.id}>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={()=>toggleTodo(item.id)}
              />
              <span>
              {item.text}
              </span>
              <button onClick={()=>deleteTodo(item.id)}>Delete</button>
            </li>
          ))
        }
      </div>

    </div>
  );
}

export default App;

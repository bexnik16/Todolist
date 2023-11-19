import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { todo: input }]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <img src='https://media.istockphoto.com/id/1030756432/nl/vector/grappige-cartoon-karakter-houden-klembord-met-te-doen-lijst-vector.jpg?s=170667a&w=0&k=20&c=6ha_plNi94aI2kkApd80PzX3LqNKLKN-U0MdWjanDpA='></img>
      <div className="input-container">
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add" onClick={addTodo}>Add</button>
      </div>
  
      <div className="todo-list">
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <div className="todo-content">
            <div className="todo-text">
              <p className='todo'>{todo.todo}</p>
            </div>
            <div className="delete-container">
              <button className='delete' onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
  
      }   
      export default App;
import React, { useState, ChangeEvent } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodo] = useState<string[]>([]);
  function handleChange(event: ChangeEvent<{ value: string }>) {
    setInputValue(event.target.value);
  }
  function addTodo() {
    setTodo((prevState: string[]) => {
      return [...prevState, inputValue];
    });
    setInputValue("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button>
          <span onClick={addTodo}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, ind) => (
            <li key={ind}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

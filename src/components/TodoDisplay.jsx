import React, { useState } from 'react';

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') return;
    setTodoItems([...todoItems, inputValue]);
    setInputValue('');
  };

  const handleRemove = index => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

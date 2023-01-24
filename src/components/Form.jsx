import React, { useState } from 'react'

export default function Form(props) {

    const [todoItems, setTodoItems] = useState([])
    const [stuffToDo, setInputValue] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (stuffToDo=== '') return;
        setTodoItems([...todoItems, stuffToDo]);
        setInputValue('');
      };
    

    return(
        <div>
        <form onSubmit ={handleSubmit} className ="form-group text-center">
            <label>
                What's to do, {props.name}?
                <input type = 'text' value = {stuffToDo} onChange = { e => setInputValue(e.target.value)} className = 'form-control text-center bg-light text-dark w-80'></input>
                <input type = 'submit' value = 'DO IT' className = 'btn btn-outline-dark w-50 mt-2'></input>
            </label>
        </form>
        <div>
            
            {todoItems.map((item, index) => (
          <li key={index}>
            {item}
            </li>
            ))}
        
        </div>

        </div>

    )

  
}

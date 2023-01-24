import React, { useState } from 'react'

export default function Form(props) {
 //first thing in array = current state
 //second thing is a function that allows you to update the state
    const [todoItems, setTodoItems] = useState([])
    const [stuffToDo, setInputValue] = useState('');
//first state = todoItems = an empty list 
//second state = stufftodo = the actual input of stuff = a string

    const handleSubmit = e => {
        e.preventDefault();
        if (stuffToDo === '') return;
        setTodoItems([...todoItems, stuffToDo]);
        setInputValue('');
      };
    

    return(
        <div>
        <form onSubmit ={handleSubmit} className ="form-group text-center">
            <label>
                What's to do, {props.name}?
                <input type = 'text' value = {stuffToDo} onChange = { e => setInputValue(e.target.value)} className = 'form-control text-center bg-light text-dark w-80'></input>
                <input type = 'submit' value = 'DO IT' className = 'btn btn-outline-dark w-50 mt-2 mb-3'></input>
            </label>
        </form>
            <div className = 'text-center'>

                {todoItems.map((item, index) => (
            <ul key={index}>
                {index+1}. {item}
                </ul>
                ))}
            </div>

        </div>

    )

  
}

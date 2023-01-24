import React, {useState} from 'react'
import Form from "./components/Form"
import Nav from "./components/Nav"
import TodoCard from "./components/TodoCard"
import TodoDisplay from "./components/TodoDisplay"

function App(props) {
  let theName = 'Jennifer'
  
  const [currentTodo, emptyTodo] = useState(' ')


  return (
   <>
   <Nav name = {theName} />
   <div className = 'container'>
      <h3 className = 'text-center'> {theName}, get it together</h3>
      <Form name = {theName} />
      <div className = 'row'>
  

      <TodoCard name = {theName}/>
      <div className="App">
          <TodoDisplay />
       </div>

      </div>
   </div>
   
   
   </>
  )
}

export default App;

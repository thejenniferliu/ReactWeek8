import React, {useState} from 'react'
import Form from "./components/Form"
import Nav from "./components/Nav"


function App(props) {
  let theName = 'Jennifer'
  

  return (
   <>
   <Nav name = {theName} />
   <div className = 'container'>
      <h3 className = 'text-center'> {theName}, get it together</h3>
      <Form name = {theName} />
    </div>
   </>
  )
}

export default App;

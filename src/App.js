import React, {useEffect, useState} from 'react'
import Form from "./components/Form"
import Nav from "./components/Nav"
import Students from "./components/Students"


function App(props) {
  let theName = 'Jennifer'

  useEffect(() => {
    console.log('useeffect callback is working')
    fetch("https://scratched-juniper-salto.glitch.me/kekambas")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const student = data
        setStudents(student)
      })
  })

  const [students, setStudents] = useState([])

  function updateStudent(students){
    setStudents(students)
  }


  return (
   <>
   <Nav name = {theName} />
   <div className = 'container'>
      <h3 className = 'text-center'> {theName}, get it together</h3>
      <Form name = {theName} />
      <Students students = {students} updateStudent = {updateStudent} />
    </div>
   </>
  )
}

export default App;

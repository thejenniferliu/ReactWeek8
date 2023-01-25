import React from 'react'

export default function Students(props) {

    const tableHeaders = ['#', "First", "Last"]

  return (
    <div>
    <h1 className = 'text-center my-3'>Kekambas Krew 106</h1>
    <table className = 'table table-light table-striped'>
        <thead>
            <tr>
                    {tableHeaders.map((headings, i) => <th key={i}>{headings}</th>)}
            </tr>
        </thead>
        <tbody>
        {props.students.map(student => (
            <tr key = {student.id}>
                <th>{student.id}</th>
                <th>{student.first_name}</th>
                <th>{student.last_name}</th>

            </tr>
        ))}


        </tbody>

    </table>

</div>
  )
}

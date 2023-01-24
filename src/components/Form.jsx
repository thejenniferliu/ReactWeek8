import React, { useState } from 'react'

export default function Form(props) {
    
    const [stuffToDo, nothing] = useState(' ');

    return(
        <form className ="form-group text-center">
            <label>
                What's to do, {props.name}?
                <input type = 'text' value = {stuffToDo} onChange ={ e => nothing(e.target.value)} className = 'form-control text-center bg-light text-dark w-80'></input>
                <input type = 'submit' value = 'DO IT' className = 'btn btn-outline-dark w-50 mt-2'></input>
            </label>
        </form>

        // <form>
        //     <label>
        //         What's to do:
        //         <input type = 'text' value = {stuffToDo} onClick ={ e => nothing(e.target.value)}/>
        //     </label>
        //     <input type = 'submit' value = 'Submit' />
        // </form>
    )

  
}

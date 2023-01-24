import React from 'react'

export default function Nav(props) {
    console.log(props)
    console.log(typeof props)
  return (
    <nav className = 'navbar bg-body-light'>
        <div className = 'container-fluid'>
            <a className = 'navbar-brand' href ='/'> Good luck {props.name}. This is not easy.</a>
        </div>
    </nav>
  )
}

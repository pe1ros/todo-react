import React from 'react'
import '../styles.scss'


export function Footer(props) {

  const changeFilter = (e) =>{
    props.setFilter(e.target.innerText)
  } 
  
  return (
    <div className="Footer"> 
        <button autoFocus onClick={changeFilter}>All</button>
        <button onClick={changeFilter}>Active</button>
        <button onClick={changeFilter}>Completed</button>
    </div>
  )
}
import React from 'react'
import '../styles.scss'  

export function Footer(props) { 

  const changeFilter = (e) =>{
    if(e.target.innerText === 'All'){
      props.setFilter("SHOW_ALL")
    }  
    if(e.target.innerText === 'Active'){
      props.setFilter("SHOW_ACTIVE")
    }
    if(e.target.innerText === 'Completed'){
      props.setFilter("SHOW_COMPLETED")
    }
  } 
  const clearAllCompleted = () =>{
    props.clearCompleted();
  }
  function getItemsStatus(list, flag) {
    const listItems =  list.filter(l => l.completed === flag)
    return listItems
  }
  
  return (
    <div className="Footer" style={{display: props.todos.length ? 'flex' : "none"}}> 
    <div className="Footer__spanitems">
      <span>{getItemsStatus(props.todos,false).length} items left</span>
    </div>
    <div className="Footer__filter">
      <button autoFocus style={{border: props.filter === "SHOW_ALL" ? '1px solid' : ""}} onClick={changeFilter}>All</button>
      <button style={{border: props.filter === "SHOW_ACTIVE" ? '1px solid' : ""}} onClick={changeFilter}>Active</button>
      <button style={{border: props.filter === "SHOW_COMPLETED" ? '1px solid' : ""}} onClick={changeFilter}>Completed</button>
    </div>
    <div className="Footer__clearitems">
      <button onClick={clearAllCompleted}>Clear completed [{getItemsStatus(props.todos,true).length}]</button>
    </div>
    </div>
  )
}
export default Footer
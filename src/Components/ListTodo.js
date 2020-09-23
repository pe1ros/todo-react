import React, {Component} from "react"
import { connect } from 'react-redux' 
import '../styles.scss'
import ListItem from "./ListItem"
import AddTodo from './AddTodo'

class ListTodo extends Component{ 
  render(){  
 
    return (
      <div className="listTodo"> 
        <AddTodo />  
        {this.props.todos && this.props.todos.map((t,k) => 
          <ListItem 
            key={k} 
            todo={t} 
            />)}
      </div>
    )
  }
} 

export default ListTodo
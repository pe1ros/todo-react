import React, {Component} from "react"
import { connect } from 'react-redux' 
import '../styles.scss'
import ListItem from "./ListItem"
import AddTodo from './AddTodo'

class ListTodo extends Component{
  constructor(props){
    super(props)
    this.state={
        
    }
  } 
  render(){  
 
    return (
      <div className="listTodo"> 
        <AddTodo addTodo={this.props.addTodo}/>  
        {this.props.todos.map((t,k) => 
          <ListItem 
            key={k} 
            todo={t} 
            deleteTodo={this.props.deleteTodo}
            toggleTodo={this.props.toggleTodo}
            editDescTodo={this.props.editDescTodo}
            />)}
      </div>
    )
  }
}
// const mapStateToProps = (store) =>{
//   return{
//     todos: store.todos
//   }
// }
// const mapDispatchToProps = (dispatch) =>{ 
//   return{ 
//   }
// }
export default ListTodo
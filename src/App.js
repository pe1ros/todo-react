import React, {Component} from 'react';  
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'
import ListTodo from './Components/ListTodo'
import { connect } from 'react-redux' 
import memoize from "memoize-one";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todos:   JSON.parse(localStorage.getItem('todos')) || [] ,
      filter:'All'
    }
  } 

  addTodo =(todo) =>{  
    this.setState( {todos:[...this.state.todos,todo]})  
  }
  deleteTodo =(id)=>{
    this.setState({todos:[...this.state.todos.filter(t=>t.id !== id)]}) 
  }
  toggleTodo =(id)=>{
    this.setState({todos:this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )})
  }
  editDescTodo =(id,desc)=>{
    this.setState({todos:this.state.todos.map(todo =>
      todo.id === id ? { ...todo, description: desc } : todo
    )})
  }
  setFilter = (filter) =>{
    this.setState({filter})
  }
  filter = memoize(
    (list, filterText) => list.filter(item => 
      {
        if(filterText === "All"){
          return item
        }
        if(filterText === "Active"){
          return item.completed === false && item
        }
        if(filterText === "Completed"){
          return item.completed === true && item  
        }
      }
      )
  );
  
  render (){ 
    const filteredTodos = this.filter(this.state.todos, this.state.filter)
    localStorage.setItem('todos',JSON.stringify(this.state.todos))
    return (
      <div className="App">
        <Header/>
        <div className="App__list">
        <ListTodo 
          addTodo ={ this.addTodo}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
          editDescTodo={this.editDescTodo}
          todos={filteredTodos}
        />
        <Footer setFilter ={this.setFilter}/>
      </div>
      </div>
    );
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
export default App

import React, {Component} from 'react';  
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'
import ListTodo from './Components/ListTodo'
import { connect } from 'react-redux' 
import {deleteTodo,toggleTodo,setFilter,clearCompleted} from './redux/pageActions'
import {getVisibleTodos} from './selectors/index'

class App extends Component{ 
  render (){     
    localStorage.setItem('todos',JSON.stringify(this.props.todos  ))
    return (
      <div className="App">
        <Header/>
        <div className="App__list">
        <ListTodo   
          todos={this.props.todosFiltred}
        />
        <Footer 
          todos={this.props.todos} 
          setFilter={this.props.setFilter}
          clearCompleted={this.props.clearCompleted} 
          filter={this.props.filter}
        />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (store) =>{ 
  return{
    todosFiltred: getVisibleTodos(store),
    todos: store.todoReducer.todos,
    filter:store.filterReducer.filter
  }
}

const mapDispatchToProps = (dispatch) =>{ 
  return{  
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    toggleTodo:(id)=>dispatch(toggleTodo(id)),
    setFilter:(filter)=>dispatch(setFilter(filter)),
    clearCompleted:()=> dispatch(clearCompleted())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

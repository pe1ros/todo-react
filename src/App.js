import React, {Component} from 'react';  
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'
import ListTodo from './Components/ListTodo'
import { connect } from 'react-redux' 
import {deleteTodo,toggleTodo} from './redux/pageActions'

class App extends Component{
  constructor(props){
    super(props)
    this.state={ 
      filter:'All'
    }
  }  
  render (){  
    localStorage.setItem('todos',JSON.stringify(this.props.todos))
    return (
      <div className="App">
        <Header/>
        <div className="App__list">
        <ListTodo   
          todos={this.props.todos}
        />
        <Footer />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (store) =>{
  return{
    todos: store.todos,
  }
}

const mapDispatchToProps = (dispatch) =>{ 
  return{  
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    toggleTodo:(id)=>dispatch(toggleTodo(id)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

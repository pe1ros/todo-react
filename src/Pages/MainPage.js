import React, {Component} from "react"
import AddTodo from '../Components/AddTodo'
import ListTodo from '../Components/ListTodo'

class MainPage extends Component{ 
  render(){
    return(
    <div>
      <AddTodo/>
      <ListTodo/>
    </div>)
  }
}
export default MainPage
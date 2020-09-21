import React, {Component} from "react"
import '../styles.scss'
import { addTodo } from "../redux/pageActions" 
import { connect } from 'react-redux' 

class AddTodo extends Component{
  constructor(props){
    super(props)
    this.state ={
      description:"",
      completed: false,
    }
  }
  changeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = (e) =>{
    e.preventDefault()  
    this.props.addTodo({
      id:Date.now(),
      description:this.state.description, 
      completed:this.state.completed})

    localStorage.setItem('todos',JSON.stringify({
      id:Date.now(),
      description:this.state.description, 
      completed:this.state.completed}))
      
    this.setState({description:''})
 
  }
  render(){

    return (
      <div > 
        <form className="AddTodo" action='submit' onSubmit={this.submitHandler}>
          <input type='text' 
            name='description' 
            placeholder="Add your current business and push Enter" 
            onChange={this.changeHandler} 
            value={this.state.description}/> 
        </form>
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
  return{
    todos: store.todos
  }
}
const mapDispatchToProps = (dispatch) =>{ 
  return{
    addTodo: (data) => dispatch(addTodo(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)